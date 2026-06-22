# Ferramenta de auxílio à escrita (ING-4 · Writing)

Documento técnico da ferramenta que analisa a redação de opinião do aluno na aba **Writing** do
curso ING-4 (`/ing4/writing`). Componente: `src/components/cursos/ing4/WritingAnalyzer.tsx`.

## Contexto e restrições da plataforma

A Bússola dos Aspirantes é **100% estática** (Astro, output estático; deploy em Vercel/Netlify/GitHub
Pages), **sem backend, sem banco e sem autenticação** (ver `CLAUDE.md`). Isso impõe três limites
diretos à ferramenta:

- **Sem servidor próprio** para guardar segredos → qualquer chave de API embutida no bundle do
  cliente fica **exposta** (extraível do JS) e sujeita a abuso/custo.
- **Custo** de chamadas a um LLM é por token e recai sobre quem detém a chave.
- **Privacidade:** o texto do aluno é dado pessoal; enviá-lo a terceiros precisa ser consciente.

## 1. Solução recomendada

**v1 — analisador heurístico 100% client-side (implementado).** Toda a análise roda no navegador,
sem rede: ortografia (lista de erros comuns), escolha de palavra/“pegadinhas” do curso
(*despite of*, *suggest + person + to*, *steal × rob*, *for to*…), concordância básica, repetição,
clareza (frases longas, espaços, maiúsculas), conectores por função e estrutura argumentativa
(tese, argumentos, exemplo, contraste, conclusão), além de uma **versão revisada básica** que corrige
só mecânica/ortografia sem alterar as ideias. A saída é **pedagógica**: explica cada apontamento, não
dá apenas uma nota.

A interface já expõe um **seam de provedor** (`analisar(texto, provider)`), com `provider: 'local'`
ativo e `provider: 'ia'` reservado para o futuro — permitindo evoluir sem reescrever a UI.

## 2. Alternativas consideradas

| Opção | Como funciona | Chave exposta? | Custo | Privacidade |
|---|---|---|---|---|
| **A. Heurística local (escolhida p/ v1)** | Regras em JS no navegador | Não há chave | Zero | Texto não sai do device |
| **B. Proxy serverless (futuro recomendado)** | Função (Vercel/Netlify/CF Worker) guarda a chave em env e chama o LLM | Não (chave no servidor) | Por token + rate-limit | Texto trafega ao provedor |
| **C. BYOK (traga sua chave)** | Aluno cola a própria chave (em localStorage), navegador chama o LLM direto | Só a chave do próprio aluno | Zero p/ a plataforma | Texto trafega ao provedor |
| **D. Chave fixa no frontend** | Chave no bundle JS | **Sim — inseguro** | Alto risco de abuso | — |

## 3. Vantagens e limitações

- **A (local):** ✅ grátis, privado, offline, sem chave, compatível com o deploy atual. ⚠️ não
  entende semântica — não corrige tudo (concordância complexa, coerência, registro).
- **B (proxy):** ✅ correção real por IA, chave protegida no servidor. ⚠️ exige uma função serverless
  (pequena camada de servidor, fora do “100% estático”), tem custo por token e latência; precisa de
  rate-limit e aviso de privacidade.
- **C (BYOK):** ✅ qualidade de IA sem custo para a plataforma. ⚠️ a chave vive no navegador do aluno
  (risco dele) e a UX exige que ele tenha uma chave.
- **D:** ❌ **descartada** — expõe a chave; nunca fazer.

## 4. Arquitetura proposta

```
WritingAnalyzer.tsx (ilha React, client:load)
 ├─ analisarLocal(texto): Resultado        ← v1 (heurística pura, sem rede)
 └─ analisar(texto, provider)
      ├─ 'local' → analisarLocal            ← ativo
      └─ 'ia'    → fetch('/api/writing-review', { texto })   ← FUTURO (provider seam)
                       │
                       ▼
            Função serverless (Vercel/Netlify/CF Worker)
              - lê a chave de process.env.OPENAI_API_KEY / ANTHROPIC_API_KEY (NUNCA no cliente)
              - rate-limit por IP/sessão
              - chama o LLM e devolve só o feedback estruturado
```

O contrato de saída (`Resultado`: `achados`, `estrutura`, `revisado`, `stats`) é o mesmo para
qualquer provider, então a UI não muda ao plugar a IA.

## 5. Etapas de implementação

1. **(Feito)** v1 heurística local + UI pedagógica + versão revisada + rascunho salvo em
   `localStorage` (`bussola:ing4:writing:draft`).
2. **(Feito)** Seam de provider e botão “Revisão com IA — em breve” (desabilitado).
3. **(Futuro)** Criar `api/writing-review` como função serverless; configurar a chave em variável de
   ambiente do provedor de deploy; adicionar rate-limit e um aviso de privacidade antes do envio.
4. **(Futuro)** Ativar o provider `'ia'` no seletor da UI e tratar erros/limites de uso.
5. **(Opcional)** Modo BYOK como alternativa sem servidor (chave do aluno em `localStorage`, opt-in).

## 6. Custos e riscos

- **v1:** custo **zero** e risco mínimo (nada sai do navegador). Risco residual: falsos
  positivos/negativos das heurísticas — mitigado deixando claro que é uma checagem básica.
- **Futuro IA:** custo por token (mitigar com rate-limit, limite de tamanho do texto e cache);
  risco de vazamento de chave **eliminado** ao mantê-la no servidor; risco de privacidade tratado com
  aviso explícito antes de enviar o texto.

## 7. Estratégia para nunca expor a chave no frontend

- **Nunca** colocar chave de API no código do cliente nem em `PUBLIC_*` (tudo que é `PUBLIC_`/bundle
  vai para o navegador).
- A chave vive **apenas** em variável de ambiente **do servidor** (a função serverless), acessada via
  `process.env` no runtime do servidor.
- O navegador fala só com o **endpoint próprio** (`/api/writing-review`), nunca direto com o LLM.
- Proteger o endpoint com rate-limit e limite de payload para conter abuso/custo.
- Alternativa sem servidor (BYOK): a chave é **do próprio aluno**, guardada só no `localStorage` dele
  e enviada direto ao provedor por ele escolhido — a plataforma nunca a armazena.
