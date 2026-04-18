import { ArrowUpRight } from "lucide-react";

type Source = {
  title: string;
  outlet: string;
  url: string;
};

type Section = {
  title: string;
  subtitle: string;
  sources: Source[];
};

const sections: Section[] = [
  {
    title: "Contexto e Movimento",
    subtitle: "Terceira Geração & Condoreirismo",
    sources: [
      {
        outlet: "Brasil Escola",
        title: "Terceira Geração Romântica",
        url: "https://brasilescola.uol.com.br/literatura/terceira-geracao-do-romantismo.htm",
      },
      {
        outlet: "Toda Matéria",
        title: "Condoreirismo e Características",
        url: "https://www.todamateria.com.br/o-condoreirismo/",
      },
      {
        outlet: "Português.com.br",
        title: "Poesia Condoreira e Liberdade",
        url: "https://www.portugues.com.br/literatura/condoreirismo.html",
      },
      {
        outlet: "Toda Matéria",
        title: "Terceira Geração — Resumo de Autores",
        url: "https://www.todamateria.com.br/terceira-geracao-romantica/",
      },
      {
        outlet: "InfoEscola",
        title: "Evolução do Romantismo no Brasil",
        url: "https://www.infoescola.com/literatura/romantismo-no-brasil/",
      },
    ],
  },
  {
    title: "Castro Alves",
    subtitle: "Vida e Legado",
    sources: [
      {
        outlet: "Academia Brasileira de Letras",
        title: "Perfil de Castro Alves",
        url: "https://www.academia.org.br/academicos/castro-alves",
      },
      {
        outlet: "Mundo Educação",
        title: "Biografia e Obras de Castro Alves",
        url: "https://mundoeducacao.uol.com.br/literatura/castro-alves.htm",
      },
      {
        outlet: "Agência Brasil — EBC",
        title: "O Legado do Poeta dos Escravos",
        url: "https://agenciabrasil.ebc.com.br/geral/noticia/2022-03/hoje-e-dia-poeta-dos-escravos-castro-alves-completaria-175-anos",
      },
      {
        outlet: "Biblioteca Nacional Digital",
        title: "Dossiê Castro Alves",
        url: "https://bndigital.bn.gov.br/castro-alves/",
      },
      {
        outlet: "G1 Globo",
        title: "170 Anos e Impacto Cultural",
        url: "https://g1.globo.com/bahia/noticia/2017/03/instituto-geografico-celebra-170-anos-de-castro-alves-com-filme-e-poesia.html",
      },
    ],
  },
  {
    title: "Análises de Obras",
    subtitle: "Leituras críticas",
    sources: [
      {
        outlet: "SME Goiânia",
        title: 'Análise Técnica de "O Navio Negreiro"',
        url: "https://sme.goiania.go.gov.br/conexaoescola/eaja/lingua-portuguesa-navio-negreiro-castro-alves/",
      },
      {
        outlet: "Coletivo Leitor",
        title: "Análise de Espumas Flutuantes (PDF)",
        url: "https://www.coletivoleitor.com.br/uploads/demos/espumas-flutuantes-e-outros-poemas.pdf",
      },
    ],
  },
  {
    title: "Outros Autores",
    subtitle: "Vozes da geração",
    sources: [
      {
        outlet: "eBiografia",
        title: "Vida e Obra de Tobias Barreto",
        url: "https://www.ebiografia.com/tobias_barreto/",
      },
    ],
  },
];

const authors = ["Arthur", "Christyan", "Vitor", "Isabelly", "Bruno", "Kauan"];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Header */}
        <header className="fade-up text-center">
          <p className="font-sans-ui text-[0.7rem] uppercase tracking-[0.45em] text-sepia">
            Literatura Brasileira · Romantismo
          </p>
          <h1 className="mt-5 font-display text-4xl italic leading-tight sm:text-6xl md:text-7xl">
            Fontes <span className="not-italic">3ª Geração</span>
            <br />
            <span className="italic">Romântica</span>
          </h1>

          <div className="ornament-rule mx-auto mt-8 max-w-md">
            <span className="text-lg" aria-hidden>✦</span>
          </div>

          <p className="mt-6 font-sans-ui text-xs uppercase tracking-[0.35em] text-ink/70">
            {authors.join(" · ")}
          </p>
        </header>

        {/* Sections */}
        <div className="mt-20 space-y-20">
          {sections.map((section, sIdx) => (
            <section
              key={section.title}
              className="fade-up"
              style={{ animationDelay: `${120 * (sIdx + 1)}ms` }}
            >
              <div className="mb-8 flex flex-col items-start gap-1 border-b border-ink/30 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="font-display text-2xl sm:text-3xl">
                  {section.title}
                </h2>
                <p className="font-sans-ui text-[0.7rem] uppercase tracking-[0.3em] text-sepia">
                  {section.subtitle}
                </p>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.sources.map((src) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="source-card flex h-full flex-col justify-between gap-6 border border-ink/70 bg-card p-5 sm:p-6"
                    >
                      <div>
                        <p className="font-sans-ui text-[0.65rem] uppercase tracking-[0.3em] text-sepia">
                          {src.outlet}
                        </p>
                        <h3 className="mt-3 font-display text-xl leading-snug">
                          <span className="underline-anim">{src.title}</span>
                        </h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-sans-ui text-[0.7rem] uppercase tracking-[0.25em] text-ink/60">
                          Acessar fonte
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-ink/70 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-ink/30 pt-8 text-center">
          <div className="ornament-rule mx-auto mb-6 max-w-xs">
            <span aria-hidden>❦</span>
          </div>
          <p className="font-display italic text-lg">
            {authors.join(" · ")}
          </p>
          <p className="mt-2 font-sans-ui text-[0.7rem] uppercase tracking-[0.35em] text-sepia">
            Trabalho de Literatura · {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
