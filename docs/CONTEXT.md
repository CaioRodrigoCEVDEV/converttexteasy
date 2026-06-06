# Contexto do Projeto

## Visao geral

`ConvertTextEasy` e um site utilitario focado em conversao de texto, formatacao de dados, pequenas ferramentas para desenvolvimento e apoio a fluxos de SEO.

O projeto combina:

- home com editor principal e vitrine de ferramentas
- paginas individuais para cada ferramenta
- blog editorial com artigos relacionados aos temas das ferramentas
- paginas institucionais para confianca publica
- localizacao para varios idiomas com prefixo de rota

## Objetivo do produto

O produto foi desenhado para resolver tarefas curtas e recorrentes sem exigir cadastro, instalacao ou fluxo complexo. O foco e utilidade imediata no navegador.

Perfis de uso mais claros:

- redatores
- analistas de SEO
- desenvolvedores
- estudantes
- suporte tecnico
- pessoas que precisam limpar, converter ou validar texto rapidamente

## Estrutura tecnica

O projeto usa `Node.js` com `Express` e roda a partir de `src/index.js`.

Ha duas camadas principais:

- camada publica em `public/`: HTML, CSS, JS, assets e paginas estaticas base
- camada de montagem/servidor em `src/`: localizacao, SEO, canonical, sitemap, robots, structured data e adaptacoes por rota

## Como a aplicacao funciona

1. O servidor responde rotas publicas como `/`, `/blog`, `/:tool`, `/blog/:slug` e paginas institucionais.
2. O HTML base vem de `public/`.
3. Antes de enviar o HTML, o servidor injeta:
- idioma
- canonical
- hreflang
- meta tags
- schema.org
- conteudo especifico de ferramenta, artigo e pagina institucional
4. O cliente complementa a experiencia com tema, troca de idioma, drawer mobile e acoes do editor.

## Arquivos centrais

- `src/index.js`: servidor, roteamento, SEO tecnico, localizacao, sitemaps, robots, ads.txt
- `src/site-content.js`: conteudo editorial especifico de ferramentas, artigos e paginas institucionais
- `src/locales/*.json`: strings localizadas por idioma
- `public/content-manifest.json`: catalogo de ferramentas e artigos
- `public/assets/js/script.js`: logica do editor, i18n no cliente, tema, drawer, interacoes gerais
- `public/assets/js/tool-page.js`: configuracoes e textos de apoio para ferramentas no cliente
- `public/assets/css/style.css`: sistema visual principal

## Conteudo e SEO

O projeto hoje depende de uma combinacao de conteudo estatico e enriquecimento em tempo de resposta.

Pontos importantes:

- `ads.txt` exposto em `/ads.txt`
- `robots.txt` exposto em `/robots.txt`
- `sitemap.xml` como indice de sitemaps
- sitemaps separados para paginas, ferramentas e blog
- structured data para `Organization`, `WebSite`, `BreadcrumbList`, `SoftwareApplication`, `Article` e `FAQPage`

## Idiomas

Idiomas suportados:

- `pt`
- `en`
- `es`
- `fr`
- `de`
- `it`
- `zh`
- `ja`
- `ru`
- `ar`

O locale padrao atual e `pt`.

## Validacao existente

Scripts disponiveis:

- `npm run check`
- `npm run check:seo`
- `npm run validate:site`

Esses scripts cobrem sintaxe, SEO tecnico e validacoes basicas de publicacao.
