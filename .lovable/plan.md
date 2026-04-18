
## Site: Fontes 3ª Geração Romântica

Página única, leve e elegante, com toque retrô (tipografia serifada clássica + ornamentos sutis) sobre base moderna e minimalista.

### Visual
- Fundo `#fbecc5`, texto preto.
- Tipografia: serifa clássica (ex.: Playfair Display) para títulos + serifa de leitura (ex.: Cormorant/Lora) para subtítulos; sans leve (Inter) para detalhes.
- Detalhes retrô: filete duplo decorativo, pequeno ornamento central (✦ / fleuron), leve textura de papel (muito sutil, opcional).
- Animações suaves: fade-in ao rolar, hover com leve elevação e sublinhado animado nos botões.

### Estrutura
1. **Cabeçalho**
   - Título grande: "Fontes 3ª Geração Romântica"
   - Subtítulo menor: "Arthur · Christyan · Vitor · Isabelly · Bruno · Kauan"
   - Ornamento decorativo abaixo.

2. **Seções organizadas por tema** (cada fonte vira um botão/cartão clicável que abre em nova aba):

   - **Contexto e Movimento (3ª Geração / Condoreirismo)**
     - Brasil Escola — Terceira Geração Romântica
     - Toda Matéria — Condoreirismo e Características
     - Português.com.br — Poesia Condoreira e Liberdade
     - Toda Matéria — Terceira Geração (Resumo de Autores)
     - InfoEscola — Evolução do Romantismo no Brasil

   - **Castro Alves — Vida e Legado**
     - Academia Brasileira de Letras — Perfil de Castro Alves
     - Mundo Educação — Biografia e Obras de Castro Alves
     - Agência Brasil (EBC) — O Legado do Poeta dos Escravos
     - Biblioteca Nacional Digital — Dossiê Castro Alves
     - G1 Globo — 170 Anos e Impacto Cultural

   - **Análises de Obras**
     - SME Goiânia — Análise Técnica de "O Navio Negreiro"
     - Coletivo Leitor — Análise de Espumas Flutuantes (PDF)

   - **Outros Autores**
     - eBiografia — Vida e Obra de Tobias Barreto

3. **Rodapé** discreto com os nomes dos autores e o ano.

### Botões
- Cartões retangulares com borda fina preta, fundo levemente mais claro no hover, título da fonte em serifa + nome do veículo em caixa alta pequena.
- Ícone discreto de "link externo" no canto.
- Layout em grid responsivo (1 coluna mobile, 2–3 colunas desktop).

### Técnico
- Atualizar `src/pages/Index.tsx` com a página completa.
- Ajustar `src/index.css` e `tailwind.config.ts` para tokens de cor (creme `#fbecc5`, preto, tons sépia para hover) e famílias de fonte via Google Fonts no `index.html`.
- Sem backend; tudo estático e leve.
