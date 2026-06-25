# ADR 0003 — PostgreSQL + Row-Level Security como defesa em profundidade

**Status:** Aceito · **Fase:** 1

## Contexto
A plataforma terá dados por usuário (perfil, progresso, conteúdo, permissões). Precisamos de
autorização confiável mesmo diante de bugs na camada de aplicação.

## Decisão
Usar **PostgreSQL** com **RLS habilitada e `default-deny`** em todas as tabelas de dados de usuário.
A RLS é a **última** linha de defesa; a autorização também é verificada na camada de aplicação
(servidor). Migrações SQL **versionadas**; IDs públicos em **UUID/ULID**.

## Motivos
- Modelo relacional encaixa em cursos/estruturas/usuários/permissões/versões/auditoria.
- RLS mitiga IDOR e vazamento por query mal escrita por construção.
- `default-deny` torna o "esquecer uma checagem" seguro por padrão.

## Consequências
- Toda nova tabela exige política RLS **e** teste de autorização.
- Migrações de schema precisam de disciplina (revisão + versionamento).

## Riscos
- Política mal configurada pode vazar dados ou travar acesso legítimo → mitigado por `default-deny`,
  suíte de testes de RLS (A não acessa recurso de B) e revisão de schema.

## Alternativas consideradas
- **Autorização só na aplicação:** um bug vira vazamento direto; descartado como única linha.
- **RLS como única defesa:** lógica de negócio complexa em SQL é ilegível; RLS fica para o
  invariante simples "esta linha é sua / você tem grant".
