import { ArrowUpRight } from "lucide-react";

type Source = { title: string; outlet: string; url: string };
type Section = { title: string; sources: Source[] };

const sections: Section[] = [
  {
    title: "Contexto e Movimento",
    sources: [
      { outlet: "Brasil Escola", title: "Terceira Geração Romântica", url: "https://brasilescola.uol.com.br/literatura/terceira-geracao-do-romantismo.htm" },
      { outlet: "Toda Matéria", title: "Condoreirismo e Características", url: "https://www.todamateria.com.br/o-condoreirismo/" },
      { outlet: "Português.com.br", title: "Poesia Condoreira e Liberdade", url: "https://www.portugues.com.br/literatura/condoreirismo.html" },
      { outlet: "Toda Matéria", title: "Terceira Geração — Resumo de Autores", url: "https://www.todamateria.com.br/terceira-geracao-romantica/" },
      { outlet: "InfoEscola", title: "Evolução do Romantismo no Brasil", url: "https://www.infoescola.com/literatura/romantismo-no-brasil/" },
    ],
  },
  {
    title: "Castro Alves",
    sources: [
      { outlet: "Academia Brasileira de Letras", title: "Perfil de Castro Alves", url: "https://www.academia.org.br/academicos/castro-alves" },
      { outlet: "Mundo Educação", title: "Biografia e Obras de Castro Alves", url: "https://mundoeducacao.uol.com.br/literatura/castro-alves.htm" },
      { outlet: "Agência Brasil", title: "O Legado do Poeta dos Escravos", url: "https://agenciabrasil.ebc.com.br/geral/noticia/2022-03/hoje-e-dia-poeta-dos-escravos-castro-alves-completaria-175-anos" },
      { outlet: "Biblioteca Nacional Digital", title: "Dossiê Castro Alves", url: "https://bndigital.bn.gov.br/castro-alves/" },
      { outlet: "G1 Globo", title: "170 Anos e Impacto Cultural", url: "https://g1.globo.com/bahia/noticia/2017/03/instituto-geografico-celebra-170-anos-de-castro-alves-com-filme-e-poesia.html" },
    ],
  },
  {
    title: "Análises de Obras",
    sources: [
      { outlet: "SME Goiânia", title: 'Análise Técnica de "O Navio Negreiro"', url: "https://sme.goiania.go.gov.br/conexaoescola/eaja/lingua-portuguesa-navio-negreiro-castro-alves/" },
      { outlet: "Coletivo Leitor", title: "Análise de Espumas Flutuantes", url: "https://www.coletivoleitor.com.br/uploads/demos/espumas-flutuantes-e-outros-poemas.pdf" },
    ],
  },
  {
    title: "Outros Autores",
    sources: [
      { outlet: "eBiografia", title: "Vida e Obra de Tobias Barreto", url: "https://www.ebiografia.com/tobias_barreto/" },
    ],
  },
];

const authors = ["Arthur", "Christyan", "Vitor", "Isabelly", "Bruno", "Kauan"];
const totalSources = sections.reduce((n, s) => n + s.sources.length, 0);

const Index = () => {
  let counter = 0;

  return (
    <main className="min-h-screen bg-background text-ink">
      {/* Top bar */}
      <div className="border-b border-ink/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <span className="font-mono text-xs uppercase tracking-wider">
            ⏤ 3GR / {new Date().getFullYear()}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-ink/60">
            {totalSources.toString().padStart(2, "0")} fontes
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Hero */}
        <section className="fade-up grid gap-10 py-20 sm:py-32 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="chip">
              <span className="dot" />
              Literatura Brasileira · Romantismo
            </div>
            <h1 className="mt-8 font-display text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95]">
              Fontes
              <br />
              <span className="text-ink/40">3ª Geração</span>
              <br />
              Romântica
            </h1>
          </div>
          <div className="flex flex-col justify-end md:col-span-4">
            <p className="text-sm text-ink/60">
              Coletânea curada de referências sobre a Terceira Geração do
              Romantismo brasileiro e o Condoreirismo.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {authors.map((a) => (
                <span key={a} className="chip">{a}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Marquee divider */}
        <div className="overflow-hidden border-y border-ink/10 py-4">
          <div className="marquee-track flex w-max gap-12 font-display text-3xl text-ink/30 sm:text-5xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 gap-12">
                <span>Castro Alves</span><span>✦</span>
                <span>Tobias Barreto</span><span>✦</span>
                <span>Condoreirismo</span><span>✦</span>
                <span>Liberdade</span><span>✦</span>
                <span>O Navio Negreiro</span><span>✦</span>
                <span>Espumas Flutuantes</span><span>✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-24 py-24">
          {sections.map((section, sIdx) => (
            <section
              key={section.title}
              className="fade-up grid gap-8 md:grid-cols-12"
              style={{ animationDelay: `${80 * (sIdx + 1)}ms` }}
            >
              <div className="md:col-span-4">
                <div className="md:sticky md:top-8">
                  <span className="font-mono text-xs uppercase tracking-wider text-ink/50">
                    {String(sIdx + 1).padStart(2, "0")} — Seção
                  </span>
                  <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                    {section.title}
                  </h2>
                </div>
              </div>

              <ul className="grid gap-3 md:col-span-8">
                {section.sources.map((src) => {
                  counter += 1;
                  const num = counter;
                  return (
                    <li key={src.url}>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="source-card group flex items-center justify-between gap-6 rounded-2xl border border-ink/15 bg-card/40 p-5 sm:p-6"
                      >
                        <div className="flex min-w-0 items-center gap-5 sm:gap-6">
                          <span className="meta font-mono text-xs text-ink/40">
                            {String(num).padStart(2, "0")}
                          </span>
                          <div className="min-w-0">
                            <p className="meta font-mono text-[11px] uppercase tracking-wider text-ink/50">
                              {src.outlet}
                            </p>
                            <h3 className="mt-1 truncate text-lg font-medium tracking-tight sm:text-xl">
                              {src.title}
                            </h3>
                          </div>
                        </div>
                        <div className="arrow-wrap flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current/30">
                          <ArrowUpRight strokeWidth={1.75} className="arrow h-4 w-4" />
                          <ArrowUpRight strokeWidth={1.75} className="arrow-ghost h-4 w-4 m-auto" />
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="border-t border-ink/10 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-ink/50">
                Autores
              </p>
              <p className="mt-3 font-display text-3xl sm:text-4xl">
                {authors.join(", ")}
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs uppercase tracking-wider text-ink/50">
                Trabalho de Literatura
              </p>
              <p className="mt-3 font-mono text-sm">
                © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
