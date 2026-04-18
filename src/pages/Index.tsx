import { ArrowUpRight } from "lucide-react";

type Source = {
  title: string;
  outlet: string;
  url: string;
};

type Section = {
  title: string;
  sources: Source[];
};

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

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
        {/* Header */}
        <header className="fade-up">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
            Literatura Brasileira
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl">
            Fontes
            <br />
            3ª Geração Romântica
          </h1>
          <p className="mt-8 max-w-md text-sm text-ink/60">
            {authors.join(", ")}
          </p>
        </header>

        {/* Sections */}
        <div className="mt-24 space-y-20">
          {sections.map((section, sIdx) => (
            <section
              key={section.title}
              className="fade-up"
              style={{ animationDelay: `${100 * (sIdx + 1)}ms` }}
            >
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl sm:text-3xl">
                  {section.title}
                </h2>
                <span className="text-xs font-medium tabular-nums text-ink/40">
                  {String(sIdx + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {section.sources.map((src) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="source-card group flex h-full items-start justify-between gap-4 rounded-xl border border-ink/15 bg-card/50 p-5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink/50">
                          {src.outlet}
                        </p>
                        <h3 className="mt-2 text-base font-medium leading-snug text-ink">
                          {src.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        strokeWidth={1.5}
                        className="arrow mt-0.5 h-5 w-5 shrink-0 text-ink/60"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-28 flex flex-col gap-2 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink/60">
            {authors.join(", ")}
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-ink/40">
            Trabalho de Literatura · {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
