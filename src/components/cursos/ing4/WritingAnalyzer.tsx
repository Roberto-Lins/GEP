// Ferramenta de auxílio à escrita do curso ING-4 — v1.
//
// Análise 100% client-side (heurística local): nada sai do navegador, custo zero,
// sem chave de API, compatível com o deploy estático. A interface já está preparada
// para um provedor de IA futuro (ver `analisar()` e o seletor de modo): a v1 usa o
// provider 'local'; o provider 'ia' está reservado para uma futura função serverless
// que guarde a chave no servidor (ver docs/WRITING-TOOL.md). A correção é pedagógica
// — explica cada apontamento, não dá apenas uma nota.
import { useEffect, useMemo, useState } from 'react';

type Severidade = 'erro' | 'aviso' | 'dica';
type Categoria =
  | 'Ortografia'
  | 'Escolha de palavra'
  | 'Concordância'
  | 'Conectores'
  | 'Repetição'
  | 'Clareza'
  | 'Estrutura';

interface Achado {
  categoria: Categoria;
  severidade: Severidade;
  trecho?: string;
  mensagem: string;
  sugestao?: string;
}

interface Estrutura {
  rotulo: string;
  ok: boolean;
  dica: string;
}

interface Resultado {
  achados: Achado[];
  estrutura: Estrutura[];
  revisado: string;
  stats: { palavras: number; frases: number; paragrafos: number };
}

const RASCUNHO_KEY = 'bussola:ing4:writing:draft';

// ── Dicionários e listas (focados na PP1) ──────────────────────────────────────
const TYPOS: Record<string, string> = {
  teh: 'the', recieve: 'receive', alot: 'a lot', wich: 'which', becuase: 'because',
  enviroment: 'environment', oppinion: 'opinion', beleive: 'believe', definately: 'definitely',
  seperate: 'separate', tomorow: 'tomorrow', untill: 'until', allways: 'always',
  thier: 'their', agains: 'against', succesful: 'successful', occured: 'occurred',
  goverment: 'government', peolpe: 'people', freind: 'friend', beggining: 'beginning',
  wont: "won't", dont: "don't", didnt: "didn't", arent: "aren't", isnt: "isn't",
};

const CONECTORES = {
  opiniao: /\b(in my opinion|i think|i believe|personally|from my point of view)\b/i,
  adicao: /\b(first of all|firstly|in addition|furthermore|moreover|secondly|also)\b/gi,
  exemplo: /\b(for example|for instance|such as)\b/i,
  contraste: /\b(however|although|even though|despite|in spite of|on the other hand|nevertheless)\b/i,
  conclusao: /\b(in conclusion|to sum up|to conclude|overall|in summary)\b/i,
};

const STOPWORDS = new Set(
  ('the a an and or but to of in on at for with from is are was were be been being this that these those ' +
    'i you he she it we they my your his her our their me him them as it its do does did not no so if then ' +
    'than too very can could will would should have has had about into out up down over under more most some any')
    .split(' '),
);

const REGRAS: { re: RegExp; cat: Categoria; sev: Severidade; msg: string; sug?: string }[] = [
  { re: /\bdespite of\b/gi, cat: 'Escolha de palavra', sev: 'erro',
    msg: '“despite” nunca leva “of”.', sug: 'Use “despite” (sem of) ou “in spite of”.' },
  { re: /\bin spite\b(?!\s+of)/gi, cat: 'Escolha de palavra', sev: 'erro',
    msg: '“in spite” exige a preposição “of”.', sug: 'Escreva “in spite of”.' },
  { re: /\bfor to\b/gi, cat: 'Escolha de palavra', sev: 'erro',
    msg: 'Não se usa “for to” antes de um verbo para indicar propósito.', sug: 'Use apenas “to” (+ verbo).' },
  { re: /\bsuggest(?:s|ed)?\s+(?:me|him|her|us|them|you)\s+to\b/gi, cat: 'Escolha de palavra', sev: 'erro',
    msg: '“suggest” não aceita “pessoa + to”.', sug: 'Use “suggest + -ing” (ex.: suggested going) ou “suggest that …”.' },
  { re: /\brob(?:bed|s)?\s+(?:my|his|her|your|their|the|a|an)\s+(?:money|phone|car|wallet|jewell?ery|laptop|bike|watch|bag|things)\b/gi,
    cat: 'Escolha de palavra', sev: 'erro',
    msg: '“rob” é para pessoa/lugar; o objeto é “stolen”.', sug: 'Use “steal/stole + objeto” (ex.: stole my phone).' },
  { re: /\bsteal\s+(?:a |the )?bank\b/gi, cat: 'Escolha de palavra', sev: 'erro',
    msg: 'Não se “steal” um banco — assalta-se o lugar.', sug: 'Use “rob a bank”.' },
  { re: /\b(he|she|it)\s+don't\b/gi, cat: 'Concordância', sev: 'erro',
    msg: 'Com he/she/it use “doesn’t”.', sug: 'Troque “don’t” por “doesn’t”.' },
  { re: /\b(i|we|you|they)\s+doesn't\b/gi, cat: 'Concordância', sev: 'erro',
    msg: 'Com I/we/you/they use “don’t”.', sug: 'Troque “doesn’t” por “don’t”.' },
  { re: /\b(people|cars|students|they|we|children)\s+(is|was|has)\b/gi, cat: 'Concordância', sev: 'erro',
    msg: 'Sujeito plural exige verbo no plural.', sug: 'Use are/were/have (ex.: “people are”, “cars are”).' },
  { re: /\balthough\b[^.!?]*\b(but)\b/gi, cat: 'Conectores', sev: 'erro',
    msg: 'Não use “but” na mesma oração que já tem “although”.', sug: 'Escolha apenas um conector de contraste.' },
];

// ── Motor de análise local ─────────────────────────────────────────────────────
function dividirFrases(t: string): string[] {
  return t.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
}

function analisarLocal(texto: string): Resultado {
  const achados: Achado[] = [];
  const limpo = texto.trim();
  const frases = dividirFrases(limpo);
  const paragrafos = limpo.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const palavras = (limpo.toLowerCase().match(/[a-z']+/g) ?? []);

  // 1. Ortografia
  const vistosTypos = new Set<string>();
  for (const m of limpo.matchAll(/[A-Za-z']+/g)) {
    const w = m[0].toLowerCase();
    if (TYPOS[w] && !vistosTypos.has(w)) {
      vistosTypos.add(w);
      achados.push({ categoria: 'Ortografia', severidade: 'erro', trecho: m[0],
        mensagem: `Possível erro de ortografia: “${m[0]}”.`, sugestao: `Você quis dizer “${TYPOS[w]}”?` });
    }
  }

  // 2/3. Regras de escolha de palavra, concordância e conectores
  for (const r of REGRAS) {
    const vistos = new Set<string>();
    for (const m of limpo.matchAll(r.re)) {
      const trecho = m[0].trim();
      if (vistos.has(trecho.toLowerCase())) continue;
      vistos.add(trecho.toLowerCase());
      achados.push({ categoria: r.cat, severidade: r.sev, trecho, mensagem: r.msg, sugestao: r.sug });
    }
  }

  // 4. Repetição (palavras de conteúdo)
  const freq: Record<string, number> = {};
  for (const w of palavras) if (w.length >= 4 && !STOPWORDS.has(w)) freq[w] = (freq[w] ?? 0) + 1;
  const limite = Math.max(3, Math.round(palavras.length * 0.02));
  Object.entries(freq)
    .filter(([, n]) => n > limite)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .forEach(([w, n]) =>
      achados.push({ categoria: 'Repetição', severidade: 'aviso', trecho: w,
        mensagem: `A palavra “${w}” aparece ${n} vezes.`, sugestao: 'Varie com sinônimos ou pronomes para não soar repetitivo.' }));

  // 5. Clareza
  frases.forEach((f) => {
    const n = (f.match(/[a-z']+/gi) ?? []).length;
    if (n > 30)
      achados.push({ categoria: 'Clareza', severidade: 'aviso', trecho: f.slice(0, 60) + '…',
        mensagem: `Frase muito longa (${n} palavras).`, sugestao: 'Considere dividi-la em duas frases mais curtas.' });
  });
  if (/ {2,}/.test(limpo))
    achados.push({ categoria: 'Clareza', severidade: 'dica', mensagem: 'Há espaços duplos no texto.', sugestao: 'Use um único espaço entre as palavras.' });
  frases.forEach((f) => {
    if (f && /^[a-z]/.test(f))
      achados.push({ categoria: 'Clareza', severidade: 'dica', trecho: f.slice(0, 40) + '…',
        mensagem: 'Frase começando com letra minúscula.', sugestao: 'Comece cada frase com letra maiúscula.' });
  });

  // 6. Conectores ausentes (por função)
  const adicao = (limpo.match(CONECTORES.adicao) ?? []).length;
  const checks: { ok: boolean; nome: string; exemplos: string }[] = [
    { ok: CONECTORES.opiniao.test(limpo), nome: 'opinião', exemplos: 'In my opinion, I believe that, Personally' },
    { ok: adicao >= 1, nome: 'adição', exemplos: 'First of all, In addition, Furthermore' },
    { ok: CONECTORES.exemplo.test(limpo), nome: 'exemplo', exemplos: 'For example, For instance, Such as' },
    { ok: CONECTORES.contraste.test(limpo), nome: 'contraste', exemplos: 'However, Although, On the other hand' },
    { ok: CONECTORES.conclusao.test(limpo), nome: 'conclusão', exemplos: 'In conclusion, To sum up, Overall' },
  ];
  checks.filter((c) => !c.ok).forEach((c) =>
    achados.push({ categoria: 'Conectores', severidade: 'dica',
      mensagem: `Faltou um conector de ${c.nome}.`, sugestao: `Inclua expressões como: ${c.exemplos}.` }));

  // 7. Estrutura argumentativa (status por elemento — não é nota)
  const estrutura: Estrutura[] = [
    { rotulo: 'Opinião clara (tese)', ok: CONECTORES.opiniao.test(limpo), dica: 'Declare sua posição já no 1º parágrafo (In my opinion…).' },
    { rotulo: 'Pelo menos 2 argumentos', ok: adicao >= 2, dica: 'Use First of all… e In addition… para separar dois argumentos.' },
    { rotulo: 'Exemplos', ok: CONECTORES.exemplo.test(limpo), dica: 'Ilustre cada razão com For example / For instance.' },
    { rotulo: 'Contraste', ok: CONECTORES.contraste.test(limpo), dica: 'Mostre o outro lado com Although / However.' },
    { rotulo: 'Conclusão', ok: CONECTORES.conclusao.test(limpo), dica: 'Feche com To sum up / In conclusion, sem ideia nova.' },
    { rotulo: 'Parágrafos separados', ok: paragrafos.length >= 3, dica: 'Separe introdução, desenvolvimento e conclusão em parágrafos.' },
  ];

  return {
    achados,
    estrutura,
    revisado: revisar(limpo),
    stats: { palavras: palavras.length, frases: frases.length, paragrafos: paragrafos.length },
  };
}

// Versão revisada BÁSICA: corrige apenas mecânica/ortografia, sem alterar as ideias.
function revisar(texto: string): string {
  let t = texto;
  t = t.replace(/[ \t]{2,}/g, ' ').replace(/\s+([,.;:!?])/g, '$1');
  t = t.replace(/\bdespite of\b/gi, 'despite').replace(/\bfor to\b/gi, 'to');
  t = t.replace(/[A-Za-z']+/g, (w) => {
    const lower = w.toLowerCase();
    if (TYPOS[lower]) {
      const fix = TYPOS[lower];
      return w[0] === w[0].toUpperCase() ? fix.charAt(0).toUpperCase() + fix.slice(1) : fix;
    }
    return w;
  });
  // Capitaliza o início de cada frase.
  t = t.replace(/(^|[.!?]\s+)([a-z])/g, (_m, p1, p2) => p1 + p2.toUpperCase());
  return t.trim();
}

// ── Provider seam (futuro) ───────────────────────────────────────────────────
async function analisar(texto: string, provider: 'local' | 'ia'): Promise<Resultado> {
  if (provider === 'ia') {
    // FUTURO: fetch('/api/writing-review', { method:'POST', body: JSON.stringify({ texto }) })
    // com a chave guardada no SERVIDOR (função serverless). Ver docs/WRITING-TOOL.md.
    throw new Error('A revisão com IA ainda não está disponível nesta versão.');
  }
  return analisarLocal(texto);
}

const COR_SEV: Record<Severidade, string> = {
  erro: 'border-alerta/40 bg-alerta/[0.07] text-alerta',
  aviso: 'border-dourado/40 bg-dourado/[0.07] text-dourado-soft',
  dica: 'border-white/15 bg-white/[0.04] text-nevoa',
};
const ROTULO_SEV: Record<Severidade, string> = { erro: 'Erro', aviso: 'Atenção', dica: 'Dica' };

export default function WritingAnalyzer() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [erro, setErro] = useState('');
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(RASCUNHO_KEY);
      if (salvo) setTexto(salvo);
    } catch { /* ignore */ }
    setCarregado(true);
  }, []);

  useEffect(() => {
    if (!carregado) return;
    try { localStorage.setItem(RASCUNHO_KEY, texto); } catch { /* ignore */ }
  }, [texto, carregado]);

  async function rodar() {
    setErro('');
    if (texto.trim().split(/\s+/).filter(Boolean).length < 5) {
      setErro('Escreva pelo menos algumas frases para analisar.');
      setResultado(null);
      return;
    }
    try {
      setResultado(await analisar(texto, 'local'));
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Falha ao analisar.');
    }
  }

  const palavras = useMemo(() => texto.trim().split(/\s+/).filter(Boolean).length, [texto]);
  const porCategoria = useMemo(() => {
    const map: Partial<Record<Categoria, Achado[]>> = {};
    resultado?.achados.forEach((a) => { (map[a.categoria] ??= []).push(a); });
    return map;
  }, [resultado]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 rounded-lg border border-progresso/30 bg-progresso/[0.06] px-3 py-2 text-sm text-nevoa/85">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Análise <strong className="mx-1 text-marfim">100% no seu navegador</strong> — seu texto não é enviado a nenhum servidor.
      </div>

      <div>
        <label htmlFor="redacao" className="mb-2 block text-sm font-medium text-marfim">Sua redação (em inglês)</label>
        <textarea
          id="redacao"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={10}
          placeholder="In my opinion, …"
          className="w-full resize-y rounded-xl border border-white/10 bg-naval-800/60 p-4 text-marfim placeholder:text-nevoa/40 focus:border-dourado/50 focus:outline-none"
        />
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-nevoa/55">
          <span>{palavras} palavra{palavras === 1 ? '' : 's'} · salvo automaticamente neste navegador</span>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => { setTexto(''); setResultado(null); setErro(''); }} className="rounded-lg border border-white/10 px-3 py-1.5 text-nevoa/70 transition hover:border-white/25 hover:text-nevoa">Limpar</button>
            <button type="button" onClick={rodar} className="btn-primary">Analisar texto</button>
          </div>
        </div>
        <p className="mt-2 text-xs text-nevoa/45">
          Revisão com IA — <span className="rounded bg-white/5 px-1.5 py-0.5">em breve</span>: exigirá uma função no servidor para proteger a chave (ver doc técnico).
        </p>
      </div>

      {erro && <p className="rounded-lg border border-alerta/40 bg-alerta/[0.07] px-3 py-2 text-sm text-alerta">{erro}</p>}

      {resultado && (
        <div className="space-y-6">
          {/* Estrutura argumentativa */}
          <section className="rounded-xl border border-white/10 bg-aco/20 p-5">
            <h3 className="mb-3 font-serif text-lg text-marfim">Estrutura argumentativa</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {resultado.estrutura.map((e) => (
                <li key={e.rotulo} className="flex items-start gap-2 text-sm">
                  <span className={e.ok ? 'text-progresso' : 'text-alerta'} aria-hidden="true">{e.ok ? '✓' : '✗'}</span>
                  <span className="text-nevoa/85"><strong className="text-marfim">{e.rotulo}.</strong> {e.ok ? 'Presente.' : e.dica}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-nevoa/50">{resultado.stats.palavras} palavras · {resultado.stats.frases} frases · {resultado.stats.paragrafos} parágrafo(s)</p>
          </section>

          {/* Achados por categoria */}
          <section>
            <h3 className="mb-3 font-serif text-lg text-marfim">
              Apontamentos {resultado.achados.length > 0 && <span className="text-nevoa/50">({resultado.achados.length})</span>}
            </h3>
            {resultado.achados.length === 0 ? (
              <p className="rounded-lg border border-progresso/30 bg-progresso/[0.06] px-3 py-2 text-sm text-nevoa/85">Nenhum problema detectado pelas verificações básicas. Releia para coerência e conteúdo. 👏</p>
            ) : (
              <div className="space-y-4">
                {Object.entries(porCategoria).map(([cat, lista]) => (
                  <div key={cat}>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-dourado/80">{cat}</h4>
                    <ul className="space-y-2">
                      {lista!.map((a, i) => (
                        <li key={i} className={`rounded-lg border px-3 py-2 text-sm ${COR_SEV[a.severidade]}`}>
                          <span className="mr-2 rounded bg-black/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase">{ROTULO_SEV[a.severidade]}</span>
                          <span className="text-marfim/90">{a.mensagem}</span>
                          {a.trecho && <span className="ml-1 text-nevoa/60">— “{a.trecho}”</span>}
                          {a.sugestao && <span className="mt-1 block text-nevoa/75">→ {a.sugestao}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Versão revisada básica */}
          <section className="rounded-xl border border-dourado/20 bg-dourado/[0.05] p-5">
            <h3 className="mb-1 font-serif text-lg text-marfim">Versão revisada (automática, básica)</h3>
            <p className="mb-3 text-xs text-nevoa/60">Corrige apenas mecânica e ortografia (espaços, maiúsculas, typos, “despite of”, “for to”). <strong>Não altera as suas ideias</strong> — revise você mesmo o conteúdo.</p>
            <p className="whitespace-pre-wrap rounded-lg border border-white/10 bg-naval-800/60 p-4 text-sm text-marfim/90">{resultado.revisado}</p>
            <button
              type="button"
              onClick={() => { void navigator.clipboard?.writeText(resultado.revisado); }}
              className="mt-3 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-nevoa/70 transition hover:border-dourado/40 hover:text-dourado"
            >Copiar versão revisada</button>
          </section>
        </div>
      )}
    </div>
  );
}
