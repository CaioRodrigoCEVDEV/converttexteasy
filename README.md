# ConvertTextEasy

Plataforma de ferramentas online para conversao de texto, formatacao de dados, utilidades para desenvolvimento e apoio a fluxos de SEO.

## O projeto

O ConvertTextEasy entrega:

- home com editor principal
- mais de 30 ferramentas individuais
- blog com artigos relacionados aos temas das ferramentas
- paginas institucionais publicas
- localizacao para multiplos idiomas
- camada tecnica de SEO, canonical, hreflang, sitemap e structured data

## Stack

- Node.js
- Express
- JavaScript ESM
- HTML estatico em `public/`
- CSS proprio em `public/assets/css/style.css`
- i18n com arquivos em `src/locales/`

## Estrutura principal

```text
src/
  index.js
  site-content.js
  locales/
public/
  index.html
  blog/
  tools/
  pages/
  assets/
  content-manifest.json
scripts/
  check-seo.mjs
  check-hardcoded-i18n.mjs
  generate-seo-content.mjs
  validate-site.mjs
```

## Como rodar

Instale dependencias:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

Servidor padrao:

```text
http://127.0.0.1:3000
```

## Scripts

```bash
npm start
npm run check
npm run check:i18n
npm run check:seo
npm run validate:site
npm run generate:content
```

## SEO tecnico

O projeto serve e valida:

- `/ads.txt`
- `/robots.txt`
- `/sitemap.xml`
- `sitemap-pages.xml`
- `sitemap-tools.xml`
- `sitemap-blog.xml`
- canonical por rota
- hreflang por idioma
- structured data por tipo de pagina

## Conteudo

Catalogos centrais:

- `public/content-manifest.json`: lista de ferramentas e artigos
- `src/site-content.js`: conteudo editorial especifico de ferramentas, artigos e paginas institucionais

## Idiomas suportados

- pt
- en
- es
- fr
- de
- it
- zh
- ja
- ru
- ar

Locale padrao atual: `pt`

## Documentacao adicional

- `docs/CONTEXT.md`
- `docs/LAYOUT.md`
- `docs/VISUAL_IDENTITY.md`

## Observacoes importantes

- o HTML publico e enriquecido no servidor antes da resposta final
- mudancas de layout global normalmente envolvem `public/` e `src/index.js`
- mudancas editoriais de ferramentas, blog e paginas institucionais devem priorizar `src/site-content.js`
