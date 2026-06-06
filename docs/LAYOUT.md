# Layout e Estrutura

## Estrutura global

O layout do site segue uma shell centralizada com largura maxima e paineis reutilizaveis.

Blocos principais:

- `site-shell`: container geral
- `topbar`: cabecalho sticky com marca, tema, idioma e menu
- `content-grid`: grade principal com coluna de conteudo e sidebar
- `panel`: bloco visual reutilizado em home, ferramentas, blog e institucionais
- `footer`: rodape com navegacao, suporte e newsletter

## Home

A home organiza a experiencia em camadas:

1. cabecalho fixo com acesso rapido
2. editor principal
3. barra de acoes de conversao rapida
4. sidebar com resumo e dicas
5. secao explicativa sobre o produto
6. grade completa de ferramentas
7. grade de artigos do blog
8. rodape institucional

## Paginas de ferramenta

Cada pagina de ferramenta tende a seguir esta ordem:

1. breadcrumbs
2. hero com `H1` e descricao
3. editor principal
4. sidebar com:
- como usar
- exemplo antes/depois
- casos de uso reais
- erros comuns
- ferramentas relacionadas
5. FAQ especifica
6. rodape

## Paginas de blog

As paginas de artigo seguem um layout editorial simples:

1. breadcrumbs
2. titulo e descricao
3. data de atualizacao
4. assinatura editorial
5. secoes do artigo em blocos curtos
6. callout para ferramenta relacionada
7. rodape

## Paginas institucionais

As paginas `about`, `privacy-policy`, `terms` e `contact` usam o mesmo esqueleto visual:

1. hero da pagina
2. area principal com secoes textuais
3. sidebar de confianca e navegacao
4. rodape

## Responsividade

O layout usa grid e empilhamento progressivo.

Comportamentos observados:

- o header permanece sticky em telas maiores
- a grade principal vira empilhada em breakpoints menores
- existe drawer mobile para navegacao e ferramentas
- os cards de ferramentas usam `auto-fit` para reorganizar colunas

## Padrões de navegacao

Padroes recorrentes:

- links de breadcrumbs
- cards clicaveis para ferramentas e artigos
- links relacionados em ferramentas
- links institucionais no rodape
- seletor de idioma no topo

## Componentes reutilizados

Componentes mais importantes:

- `panel`
- `tool-card`
- `badge-conversion`
- `editor-action-btn`
- `feature-item`
- `related-tool-link`
- `cookie-consent`

## Observacoes de manutencao

- o HTML base vem de `public/`, mas o layout final e alterado no servidor
- mudancas visuais globais devem ser feitas primeiro em `public/assets/css/style.css`
- mudancas estruturais precisam considerar tanto o HTML base quanto as substituicoes em `src/index.js`
