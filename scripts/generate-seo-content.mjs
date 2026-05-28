import fs from 'fs';
import path from 'path';

const root = process.cwd();
const site = 'https://converttexteasy.com';
const today = '2026-05-07';
const toolsDir = path.join(root, 'public', 'tools');
const blogDir = path.join(root, 'public', 'blog');
fs.mkdirSync(toolsDir, { recursive: true });
fs.mkdirSync(blogDir, { recursive: true });

const tools = [
  ['uppercase-text','upper','Conversor para Maiúsculas','Converta texto para MAIÚSCULAS online, grátis e com contagem de caracteres.','TEXTO EM MAIÚSCULAS','Cole uma frase, clique em converter e copie o resultado em caixa alta.'],
  ['lowercase-text','lower','Conversor para Minúsculas','Transforme textos em letras minúsculas para padronizar cadastros, listas e conteúdos.','texto em minúsculas','Use para limpar textos copiados de documentos com excesso de caixa alta.'],
  ['capitalize-text','title','Capitalização de Texto','Coloque iniciais em maiúsculas e deixe títulos, nomes e chamadas mais legíveis.','Texto Com Iniciais Maiúsculas','Ótimo para títulos, nomes próprios e listas de produtos.'],
  ['smart-capitalization','smart','Capitalização Inteligente','Ajuste frases com primeira letra maiúscula após pontos, perguntas e exclamações.','Frase correta. Nova frase correta.','Ideal para textos corridos que foram digitados em caixa irregular.'],
  ['reverse-text','reverse','Inverter Texto','Inverta caracteres de palavras e frases em segundos.','oditrevni otxeT','Crie efeitos, testes visuais e brincadeiras com texto reverso.'],
  ['alternating-case','alternating','Texto Alternado','Gere letras alternadas entre maiúsculas e minúsculas automaticamente.','TeXtO aLtErNaDo','Use em posts, memes e chamadas criativas.'],
  ['italic-text','italic','Texto Itálico Unicode','Converta texto comum em caracteres Unicode com aparência itálica.','𝑇𝑒𝑥𝑡𝑜 𝑖𝑡á𝑙𝑖𝑐𝑜','Destaque nomes, bios e legendas.'],
  ['strikethrough-text','strikethrough','Texto Tachado','Aplique o efeito riscado em cada caractere do texto.','T̶e̶x̶t̶o̶','Útil para comparações, humor e marcações visuais.'],
  ['morse-code-translator','morse','Tradutor de Código Morse','Converta letras, números e sinais comuns para código Morse.','... --- ...','Estude, teste ou crie mensagens em Morse.'],
  ['contador-caracteres','stats','Contador de Caracteres','Conte caracteres, palavras e linhas online em tempo real.','Caracteres: 123','Cole qualquer texto para acompanhar métricas instantâneas.'],
  ['contador-palavras','stats','Contador de Palavras','Conte palavras online para artigos, posts, anúncios e trabalhos.','Palavras: 250','Controle limites de SEO, redes sociais e formulários.'],
  ['removedor-espacos','trimSpaces','Removedor de Espaços Extras','Remova espaços duplicados e normalize textos colados.','texto com espaço','Limpe listas e parágrafos antes de publicar.'],
  ['removedor-linhas-vazias','removeEmptyLines','Removedor de Linhas Vazias','Apague linhas em branco mantendo somente conteúdo útil.','linha 1\nlinha 2','Organize listas, CSVs simples e rascunhos.'],
  ['texto-aleatorio','randomText','Gerador de Texto Aleatório','Gere texto de exemplo para testes de layout, formulários e protótipos.','Lorem ipsum convert text easy','Clique para substituir o editor por um texto de demonstração.'],
  ['json-formatter','jsonFormat','JSON Formatter','Formate JSON online com indentação, validação básica e leitura fácil.','{\n  "site": "ConvertTextEasy"\n}','Cole JSON minificado e transforme em estrutura legível.'],
  ['json-validator','jsonValidate','Validador de JSON','Valide JSON online e identifique erros de sintaxe rapidamente.','JSON válido','Teste APIs, configurações e payloads antes de usar.'],
  ['jwt-decoder','jwtDecode','JWT Decoder','Decodifique header e payload de tokens JWT sem enviar dados ao servidor.','{ "alg": "HS256" }','Inspecione claims e datas de expiração no navegador.'],
  ['base64-encode-decode','base64','Base64 Encode Decode','Codifique e decodifique textos em Base64 no navegador.','Q29udmVydFRleHRFYXN5','Útil para testes de APIs, arquivos e snippets.'],
  ['base64-decode','base64','Base64 Decode','Decodifique Base64 online no navegador.','Q29udmVydFRleHRFYXN5 → ConvertTextEasy','Use para ler dados de testes, payloads e exemplos codificados.'],
  ['base64-encode','base64','Base64 Encode','Codifique texto em Base64 online no navegador.','ConvertTextEasy → Q29udmVydFRleHRFYXN5','Use para gerar strings Base64 em testes de APIs e documentação.'],
  ['url-encoder','urlEncode','URL Encoder','Codifique e decodifique URLs, parâmetros e caracteres especiais.','texto%20com%20espaço','Prepare strings seguras para links e query strings.'],
  ['uuid-generator','uuid','Gerador de UUID','Gere UUID v4 aleatório para testes, registros e identificadores.','550e8400-e29b-41d4-a716-446655440000','Crie IDs únicos localmente em um clique.'],
  ['hash-generator','hash','Hash Generator','Gere hashes SHA-256 de textos diretamente no navegador.','e3b0c44298...','Compare checksums e assinaturas simples.'],
  ['timestamp-converter','timestamp','Timestamp Converter','Converta timestamp Unix para data local e gere timestamps atuais.','1715000000 → data','Trabalhe com logs, APIs e bancos de dados.'],
  ['meta-tag-generator','metaTags','Meta Tag Generator','Crie title, meta description, canonical e OpenGraph para SEO.','<meta name="description" ...>','Monte tags essenciais para páginas indexáveis.'],
  ['slug-generator','slug','Slug Generator','Transforme títulos em slugs limpos, sem acentos e prontos para URLs.','como-formatar-json-online','Padronize URLs amigáveis para SEO.'],
  ['keyword-density-checker','keywordDensity','Keyword Density Checker','Calcule densidade de palavras-chave e termos mais frequentes.','seo: 2,4%','Revise repetição de termos antes de publicar.'],
  ['xml-formatter','xmlFormat','Formatador de XML','Formate XML online com quebras de linha e indentação simples.','<root>\n  <item/>\n</root>','Melhore a leitura de feeds, sitemaps e configurações.'],
  ['csv-to-json','csvToJson','Conversor CSV para JSON','Converta CSV com cabeçalho em uma lista JSON formatada.','[{"nome":"Ana"}]','Transforme planilhas exportadas em payloads para APIs.'],
  ['remove-accents','removeAccents','Removedor de Acentos','Remova acentos e marcas diacríticas de textos em português e outros idiomas.','acao informacao','Prepare slugs, sistemas legados e buscas normalizadas.'],
  ['clean-special-characters','cleanSpecial','Limpador de Caracteres Especiais','Remova caracteres especiais mantendo letras, números, espaços e pontuação básica.','Texto limpo 123','Limpe conteúdo copiado de PDFs, planilhas e sistemas antigos.']
].map(([slug,type,title,description,example,tutorial]) => ({slug,type,title,description,example,tutorial}));

const articleSeeds = [
  ['como-converter-texto-para-maiusculo','Como converter texto para maiúsculo','Aprenda quando usar caixa alta, como converter online e quais cuidados tomar para não prejudicar leitura e SEO.'],
  ['diferenca-entre-utf-8-e-ansi','Diferença entre UTF-8 e ANSI','Entenda codificação de caracteres, acentos quebrados e por que UTF-8 costuma ser a escolha mais segura.'],
  ['como-remover-acentos-em-textos','Como remover acentos em textos','Veja usos práticos para normalizar palavras, criar slugs e integrar sistemas que não aceitam diacríticos.'],
  ['como-formatar-json-online','Como formatar JSON online','Guia para deixar JSON legível, validar chaves, revisar arrays e evitar erros comuns em APIs.'],
  ['como-limpar-caracteres-especiais','Como limpar caracteres especiais','Saiba limpar símbolos invisíveis, quebras estranhas e caracteres copiados de PDFs ou planilhas.'],
  ['regex-para-iniciantes','Regex para iniciantes','Conceitos básicos de expressões regulares com exemplos de busca, validação e substituição.'],
  ['como-converter-csv-para-json','Como converter CSV para JSON','Transforme tabelas exportadas em objetos JSON e entenda cabeçalhos, delimitadores e tipos.'],
  ['como-validar-json','Como validar JSON','Aprenda a identificar erros em JSON, mensagens comuns e boas práticas antes de enviar para uma API.'],
  ['como-formatar-xml','Como formatar XML','Veja como indentar XML, organizar tags, revisar atributos e ler documentos extensos.'],
  ['como-contar-caracteres-online','Como contar caracteres online','Controle limites de formulários, meta descriptions, posts e anúncios com contagem em tempo real.'],
  ['contador-de-palavras-para-seo','Contador de palavras para SEO','Use métricas de palavras para planejar artigos, snippets, introduções e revisões editoriais.'],
  ['base64-encode-decode-guia','Base64 encode/decode: guia rápido','Entenda o que é Base64, quando usar e por que não deve ser tratado como criptografia.'],
  ['jwt-decoder-online-seguro','JWT decoder online seguro','Como inspecionar tokens JWT no navegador sem expor segredos e quais campos analisar.'],
  ['gerar-slug-seo','Como gerar slug SEO','Crie URLs curtas, legíveis, sem acentos e alinhadas com palavras-chave principais.'],
  ['meta-tags-para-iniciantes','Meta tags para iniciantes','Title, description, canonical e OpenGraph explicados para páginas indexáveis.'],
  ['densidade-de-palavras-chave','Densidade de palavras-chave','Como medir termos repetidos sem exagerar e manter o texto natural para pessoas e buscadores.'],
  ['timestamp-unix-explicado','Timestamp Unix explicado','Converta datas, leia logs e entenda segundos e milissegundos em integrações.'],
  ['uuid-v4-o-que-e','UUID v4: o que é e quando usar','Conheça identificadores únicos para testes, bancos de dados e objetos distribuídos.'],
  ['url-encode-e-decode','URL encode e decode','Entenda caracteres reservados, query strings e como evitar links quebrados.'],
  ['hash-sha-256-online','Hash SHA-256 online','Veja usos de hash para integridade, comparação de conteúdo e cuidados de segurança.'],
  ['remover-linhas-vazias','Como remover linhas vazias','Organize listas e rascunhos removendo linhas em branco sem perder conteúdo.'],
  ['capitalizacao-inteligente','Capitalização inteligente','Padronize frases, títulos e nomes com regras simples de caixa e revisão final.']
].map(([slug,title,desc]) => ({slug,title,desc}));

function esc(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function metaTags(titulo, descricao, url, tipo, img) {
  return `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<meta name="robots" content="index,follow">
<link rel="canonical" href="${site}${url}">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:type" content="${tipo || 'website'}">
<meta property="og:url" content="${site}${url}">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="ConvertTextEasy">
${img ? `<meta property="og:image" content="${site}${img}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(titulo)}">
<meta name="twitter:description" content="${esc(descricao)}">
${img ? `<meta name="twitter:image" content="${site}${img}">` : ''}
<link rel="icon" href="../assets/img/iconeTextLab.png" type="image/x-icon">
<link rel="apple-touch-icon" href="../assets/img/iconeTextLab.png">
<link rel="stylesheet" href="../assets/css/style.css">`; }

function langSelect(value) {
  const opts = [
    ['pt','🇧🇷 Português'],['en','🇺🇸 English'],['es','🇪🇸 Español'],['fr','🇫🇷 Français'],['de','🇩🇪 Deutsch'],
    ['it','🇮🇹 Italiano'],['zh','🇨🇳 中文'],['ja','🇯🇵 日本語'],['ru','🇷🇺 Русский'],['ar','🇸🇦 العربية']
  ];
  return opts.map(o => `<option value="${o[0]}"${o[0]===value?' selected':''}>${o[1]}</option>`).join('');
}

function header(prefix='..') { return `<header class="topbar" role="banner"><div class="brand-lockup"><a href="/" class="brand-lockup text-decoration-none" aria-label="ConvertTextEasy - Página Inicial"><span class="navbar-logo"> <img loading="lazy" src="${prefix}/assets/img/iconeTextLab.png" alt="ConvertTextEasy - Ferramentas de Texto Online" width="48" height="48"></span><div><div class="brand-title">ConvertTextEasy</div><div class="brand-subtitle" id="brandSubtitle">Ferramentas de texto, dev e SEO</div></div></a></div><div class="topbar-actions"><button class="mobile-menu-btn" type="button" id="mobileMenuBtn" aria-label="Abrir menu de ferramentas" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg></button><button class="theme-toggle btn btn-sm" onclick="toggleTheme()" title="Alternar tema" aria-label="Alternar tema claro/escuro"><span id="themeIcon" aria-hidden="true">🌙</span><small id="themeLabel">Tema</small></button><select onchange="changeLang(this.value)" class="form-select form-select-sm lang-select" aria-label="Selecionar idioma">${langSelect('pt')}</select></div></header>`; }

function footer() {
  const indexHtmlPath = path.join(root, 'public', 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    const footerMatch = indexHtml.match(/<footer class="footer"[\s\S]*?<\/footer>/);
    if (footerMatch) return footerMatch[0];
  }
  return `<footer class="footer" role="contentinfo">
    <div class="footer-grid">
      <div>
        <div class="brand-lockup mb-3">
          <span class="navbar-logo"><img loading="lazy" src="/assets/img/iconeTextLab.png" alt="ConvertTextEasy" width="48" height="48"></span>
          <div>
            <div class="brand-title" id="footerTitle">ConvertTextEasy</div>
            <div class="brand-subtitle" id="footerBrandSubtitle">Conversor de Texto</div>
          </div>
        </div>
        <p class="small text-muted mb-3" id="footerDesc">Ferramenta gratuita para transformar textos, validar dados e melhorar SEO técnico.</p>
      </div>
      <div>
        <h2 class="h6 mb-3 fw-semibold" id="footerLinksTitle">Ferramentas</h2>
        <ul class="list-unstyled small m-0">
          <li class="mb-2"><a href="/" id="footerHomeLink" class="text-muted text-decoration-none">Página Inicial</a></li>
          <li class="mb-2"><a href="/contador-caracteres" id="footerToolLink1" class="text-muted text-decoration-none">Contador de caracteres</a></li>
          <li class="mb-2"><a href="/json-formatter" id="footerToolLink2" class="text-muted text-decoration-none">JSON Formatter</a></li>
          <li><a href="/slug-generator" id="footerToolLink3" class="text-muted text-decoration-none">Slug Generator</a></li>
        </ul>
      </div>
      <div>
        <h2 class="h6 mb-3 fw-semibold" id="footerContactTitle">Suporte</h2>
        <ul class="list-unstyled small m-0">
          <li class="mb-2"><a href="/blog" class="text-muted text-decoration-none">Blog</a></li>
          <li class="mb-2"><a href="/about" class="text-muted text-decoration-none" id="footerAboutLink">Sobre Nós</a></li>
          <li class="mb-2"><a href="/privacy-policy" class="text-muted text-decoration-none" id="footerPrivacyLink">Privacidade</a></li>
          <li class="mb-2"><a href="/terms" class="text-muted text-decoration-none" id="footerTermsLink">Termos de Uso</a></li>
          <li><a href="/contact" id="footerContactLink" class="text-muted text-decoration-none">Contato</a></li>
        </ul>
      </div>
      <div>
        <h2 class="h6 mb-3 fw-semibold" id="newsletterTitle">Fique Atualizado</h2>
        <p class="small text-muted mb-3" id="newsletterCopy">Receba dicas e novas ferramentas por email.</p>
        <div class="input-group">
          <input type="email" id="newsletterInput" class="form-control form-control-sm" placeholder="Seu email" aria-label="Email para newsletter">
          <button class="btn btn-primary btn-sm" id="newsletterButton" type="button" aria-label="Inscrever">Inscrever</button>
        </div>
        <p class="small text-muted mt-4 mb-0" id="footerCopyright">© 2026 ConvertTextEasy. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>`;
}

function cookieConsent() {
  return `<div id="cookie-consent" class="cookie-consent" role="dialog" aria-label="Aviso de cookies" aria-describedby="cookie-desc">
  <p id="cookie-desc">Utilizamos cookies para melhorar sua experiência e exibir anúncios relevantes. Ao continuar, você concorda com nossa <a href="/privacy-policy">Política de Privacidade</a>.</p>
  <button onclick="acceptCookies()" class="btn btn-primary btn-sm cookie-btn">Aceitar</button>
</div>
<script>
function acceptCookies(){var e=document.getElementById('cookie-consent');if(e)e.style.display='none';localStorage.setItem('cookies_accepted','true')}
if(localStorage.getItem('cookies_accepted')==='true'){var e=document.getElementById('cookie-consent');if(e)e.style.display='none'}
</script>`; }

function toolHtml(tool){
 const faq = [
   `${tool.title} é gratuito?`,
   `Preciso cadastrar ou instalar algo para usar ${tool.title.toLowerCase()}?`,
   `Os dados que digito são enviados para servidores externos?`,
   `Posso usar ${tool.title.toLowerCase()} no celular?`,
   `Qual a diferença entre ${tool.title.toLowerCase()} e outras ferramentas similares?`
 ];
 const faqAnswers = [
   `Sim. ${tool.title} é totalmente gratuito e pode ser usado sem cadastro diretamente no navegador. Basta acessar a página, colar o texto e converter.`,
   `Não. O ${tool.title.toLowerCase()} funciona diretamente no navegador, sem necessidade de cadastro, download ou instalação de qualquer software.`,
   `Não armazenamos o conteúdo digitado. A transformação acontece exclusivamente no seu navegador (client-side) sem enviar dados para servidores externos.`,
   `Sim. A página é responsiva e funciona em telas menores, tablets e smartphones. Você pode usar o ${tool.title.toLowerCase()} de qualquer dispositivo.`,
   `${tool.title} foi desenvolvido com foco em simplicidade, privacidade (processamento local) e SEO técnico. Cada página possui descrição, exemplo, tutorial e marcação estruturada.`
 ];
 const related = tools.filter(t=>t.slug!==tool.slug).slice(0,8).map(t=>`<a class="related-tool-link" href="/${t.slug}">${esc(t.title)}</a>`).join('');
 const schema = {"@context":"https://schema.org","@type":"SoftwareApplication",name:tool.title,applicationCategory:'UtilitiesApplication',operatingSystem:'Web',url:`${site}/${tool.slug}`,description:tool.description,offers:{"@type":"Offer",price:'0',priceCurrency:'USD'}};
 const faqSchema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map((q,i)=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:faqAnswers[i]}}))};
 const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:'Início',item:site},{"@type":"ListItem",position:2,name:'Ferramentas',item:`${site}/#ferramentas`},{"@type":"ListItem",position:3,name:tool.title,item:`${site}/${tool.slug}`}]};
 const orgSchema = {"@context":"https://schema.org","@type":"Organization","name":"ConvertTextEasy","url":site};
  return `<!DOCTYPE html><html lang="pt-BR" data-theme="dark" data-bs-theme="dark"><head>${metaTags(
    `${tool.title} Online Grátis | ConvertTextEasy`,
    tool.description,
    `/${tool.slug}`,
    'website',
    '/assets/img/iconeTextLab.png'
  )}<script type="application/ld+json">${JSON.stringify(orgSchema)}</script><script type="application/ld+json">${JSON.stringify(schema)}</script><script type="application/ld+json">${JSON.stringify(faqSchema)}</script><script type="application/ld+json">${JSON.stringify(breadcrumb)}</script></head><body data-tool-page="${tool.type}"><a href="#main-content" class="skip-link" id="skipLink">Pular para o conteúdo principal</a><div class="site-shell">${header('..')}<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/" data-i18n="breadcrumbHome">Início</a><span aria-hidden="true">›</span><a href="/#ferramentas" data-i18n="breadcrumbTools">Ferramentas</a><span aria-hidden="true">›</span><span aria-current="page">${esc(tool.title)}</span></nav><section class="panel hero-panel"><div class="panel-body"><div class="page-eyebrow" data-i18n="onlineTool">Ferramenta online</div><h1 class="page-title">${esc(tool.title)}</h1><p class="page-description">${esc(tool.description)}</p></div></section><main id="main-content" class="content-grid mt-4"><section class="panel editor-card"><div class="panel-head"><div><h2 class="panel-title">Editor de ${esc(tool.title)}</h2><p class="panel-copy">Cole o conteúdo, execute a ação e copie o resultado. A contagem é atualizada em tempo real.</p></div></div><div class="panel-body"><div class="editor-stack"><div class="editor-surface"><textarea id="input" placeholder="Cole seu texto aqui..." class="form-control editor-textarea" rows="12" aria-label="Texto para ${esc(tool.title)}"></textarea><div class="editor-footer"><div class="editor-actions"><button class="editor-action-btn" onclick="copyText()" title="Copiar" aria-label="Copiar resultado">📋</button><button class="editor-action-btn" type="button" onclick="clearText()" title="Limpar" aria-label="Limpar texto">🗑</button></div><div class="editor-stats"><span>Caracteres:</span> <span id="charCount">0</span> | <span>Palavras:</span> <span id="wordCount">0</span> | <span>Linhas:</span> <span id="lineCount">0</span></div></div></div></div><div class="tool-action-bar"><button onclick="convert('${tool.type}')" type="button" class="badge-conversion badge-conversion-primary" aria-label="Converter para ${esc(tool.title)}"><span>Converter</span>${esc(tool.title)}</button></div></div></section><aside class="sidebar-stack" aria-label="Sobre a ferramenta"><section class="panel"><div class="panel-head"><div><h2 class="panel-title">Como usar</h2><p class="panel-copy">Siga o passo a passo abaixo para utilizar ${esc(tool.title).toLowerCase()}.</p></div></div><div class="panel-body"><ol class="tool-info-list"><li>Cole o texto na área de edição acima</li><li>${esc(tool.tutorial)}</li><li>Clique em "Converter" para processar</li><li>Copie o resultado usando o botão 📋</li></ol></div></section><section class="panel"><div class="panel-head"><div><h2 class="panel-title">Exemplo</h2><p class="panel-copy">Veja como fica o resultado após a conversão.</p></div></div><div class="panel-body"><div class="example">${esc(tool.example)}</div></div></section><section class="panel"><div class="panel-head"><div><h2 class="panel-title">Ferramentas relacionadas</h2></div></div><div class="panel-body"><div class="related-tools-grid">${related}</div></div></section></aside></main><section class="panel mt-4"><div class="panel-head"><div><h2 class="panel-title" data-i18n="faqTitle">Perguntas Frequentes sobre ${esc(tool.title)}</h2></div></div><div class="panel-body">${faq.map((q,i)=>`<div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"><h3 itemprop="name" data-i18n="faqQ${i+1}">${esc(q)}</h3><div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><p itemprop="text" data-i18n="faqA${i+1}">${esc(faqAnswers[i])}</p></div></div>`).join('')}</div></section>${footer()}</div>${cookieConsent()}<script src="../assets/js/script.js"></script></body></html>`;
}

function articleHtml(article, idx){
 const tool = tools[idx % tools.length];
 const paragraphs = [
  `Quando alguém procura por "${article.title.toLowerCase()}", geralmente quer uma solução prática, rápida e confiável. Este guia explica o conceito, mostra exemplos e indica cuidados para que você consiga trabalhar com textos, dados e conteúdo web com menos retrabalho.`,
  `O primeiro ponto é entender o contexto. Textos podem vir de editores, planilhas, PDFs, sistemas antigos, APIs, bancos de dados ou formulários. Cada origem pode carregar espaços extras, quebras de linha, acentos, codificações diferentes ou símbolos invisíveis. Uma ferramenta online ajuda porque concentra a limpeza e a validação em uma etapa simples.`,
  `Na prática, comece sempre copiando uma amostra pequena. Teste a transformação, confira se o resultado mantém as informações essenciais e só então aplique em um volume maior. Esse cuidado evita perdas acidentais, principalmente quando o conteúdo será usado em SEO, automações, integrações ou documentos oficiais.`,
  `Para SEO, a qualidade técnica do texto importa. Títulos claros, slugs legíveis, meta descriptions objetivas e dados estruturados ajudam buscadores a compreenderem a página. Porém, a automação não substitui revisão humana. O ideal é usar ferramentas para acelerar tarefas repetitivas e reservar a revisão para clareza, intenção de busca e precisão.`,
  `Em desenvolvimento, dados bem formatados reduzem erros. JSON indentado, XML organizado, Base64 decodificado, URLs codificadas corretamente e timestamps conferidos tornam o diagnóstico mais rápido. Se uma API falha, muitas vezes o problema está em uma vírgula, uma chave, uma aspas ou um caractere especial fora do lugar.`,
  `Outro cuidado é privacidade. Sempre que possível, prefira ferramentas que executam a transformação no navegador e evite colar tokens, senhas, chaves privadas, dados pessoais ou informações confidenciais. Para conteúdo sensível, gere exemplos fictícios ou trabalhe em ambiente interno controlado.`,
  `Um fluxo recomendado é: colar o texto, aplicar a transformação, validar o resultado, copiar para o destino final e salvar uma versão original caso precise desfazer. Esse processo simples é útil para redatores, estudantes, analistas de SEO, suporte, desenvolvedores e qualquer pessoa que lida com texto diariamente.`,
  `Erros comuns incluem confiar apenas na aparência visual, ignorar acentos quebrados, remover símbolos que tinham significado, publicar JSON sem validar e usar caixa alta em excesso. Caixa alta pode destacar uma chamada, mas blocos longos em maiúsculas prejudicam legibilidade. Da mesma forma, limpar caracteres especiais sem critério pode apagar informações importantes.`,
  `Use exemplos para testar. Uma frase curta mostra se acentos e capitalização foram preservados. Uma lista com linhas vazias revela se o removedor está funcionando. Um JSON com objeto aninhado confirma indentação. Um CSV com cabeçalho demonstra se os campos viraram chaves corretas.`,
  `No ConvertTextEasy, você pode combinar este artigo com a ferramenta ${tool.title}. Ela oferece uma página individual, editor, exemplo, FAQ e marcação estruturada para facilitar uso e descoberta. Acesse a ferramenta relacionada sempre que precisar aplicar a técnica sem instalar nada.`,
  `Por fim, documente padrões internos. Equipes que definem regras para slugs, títulos, metadados, acentuação, codificação e validação economizam tempo. Um padrão claro evita que cada pessoa resolva o mesmo problema de uma forma diferente e melhora a consistência do site ou produto.`,
  `Também vale criar uma checklist antes de publicar. Verifique se o texto tem título claro, descrição objetiva, URL limpa, codificação correta e exemplos testados. Essa revisão leva poucos minutos e reduz problemas de indexação, suporte e retrabalho técnico depois que a página já está no ar.`,
  `Se você trabalha com muitos arquivos, nomeie versões e mantenha uma cópia do conteúdo original. Assim fica mais fácil comparar o antes e depois, auditar mudanças e recuperar informações removidas por engano. Ferramentas online aceleram o processo, mas um fluxo organizado garante previsibilidade.`,
  `A melhor estratégia é combinar automação com critério. Use conversores, validadores e formatadores para tarefas mecânicas; depois leia o resultado como uma pessoa usuária leria. Conteúdo útil, bem estruturado e tecnicamente correto tende a performar melhor em busca orgânica e em operações internas.`
 ];
 const schema={"@context":"https://schema.org","@type":"Article",headline:article.title,description:article.desc,datePublished:today,dateModified:today,author:{"@type":"Organization",name:'ConvertTextEasy'},publisher:{"@type":"Organization","name":"ConvertTextEasy"},mainEntityOfPage:`${site}/blog/${article.slug}`};
 const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:'Início',item:site},{"@type":"ListItem",position:2,name:'Blog',item:`${site}/blog`},{"@type":"ListItem",position:3,name:article.title,item:`${site}/blog/${article.slug}`}]};
 const orgSchema = {"@context":"https://schema.org","@type":"Organization","name":"ConvertTextEasy","url":site};
  return `<!DOCTYPE html><html lang="pt-BR" data-theme="dark" data-bs-theme="dark"><head>${metaTags(
    `${article.title} | Blog ConvertTextEasy`,
    article.desc,
    `/blog/${article.slug}`,
    'article',
    '/assets/img/iconeTextLab.png'
  )}<script type="application/ld+json">${JSON.stringify(orgSchema)}</script><script type="application/ld+json">${JSON.stringify(schema)}</script><script type="application/ld+json">${JSON.stringify(breadcrumb)}</script></head><body><a href="#main-content" class="skip-link" id="skipLink">Pular para o conteúdo principal</a><div class="site-shell">${header('..')}<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/" data-i18n="breadcrumbHome">Início</a><span aria-hidden="true">›</span><a href="/blog" data-i18n="breadcrumbBlog">Blog</a><span aria-hidden="true">›</span><span aria-current="page">${esc(article.title)}</span></nav><article class="panel" id="main-content"><div class="panel-body article-content"><p class="page-eyebrow" data-i18n="guidedPractice">Guia prático</p><h1 class="page-title">${esc(article.title)}</h1><p class="page-description">${esc(article.desc)}</p>${paragraphs.map((p,i)=>`${i===0?'':''}${i===1?'<h2>Por que isso importa?</h2>':''}${i===3?'<h2>Passo a passo e boas práticas</h2>':''}${i===7?'<h2>Exemplos e erros comuns</h2>':''}<p>${esc(p)}</p>`).join('')}<div class="tool-callout"><h2>Ferramenta relacionada</h2><p>Use ${esc(tool.title)} para aplicar este conceito em poucos cliques.</p><a class="badge-conversion badge-conversion-primary text-decoration-none" href="/${tool.slug}" aria-label="Abrir ferramenta ${esc(tool.title)}"><span>Go</span>Abrir ferramenta</a></div></div></article>${footer()}</div>${cookieConsent()}<script src="../assets/js/script.js"></script></body></html>`;
}

for (const tool of tools) fs.writeFileSync(path.join(toolsDir, `${tool.slug}.html`), toolHtml(tool));
for (const [oldName, newSlug] of [['uppercase-text.html','uppercase-text'],['lowercase-text.html','lowercase-text'],['capitalize-text.html','capitalize-text'],['reverse-text.html','reverse-text'],['alternating-case.html','alternating-case'],['italic-text.html','italic-text'],['strikethrough-text.html','strikethrough-text'],['morse-code-translator.html','morse-code-translator']]) {
 fs.copyFileSync(path.join(toolsDir, `${newSlug}.html`), path.join(toolsDir, oldName));
}
for (const [i, article] of articleSeeds.entries()) fs.writeFileSync(path.join(blogDir, `${article.slug}.html`), articleHtml(article, i));

const blogIndex = `<!DOCTYPE html><html lang="pt-BR" data-theme="dark" data-bs-theme="dark"><head>${metaTags(
  'Blog de texto, SEO e dev tools | ConvertTextEasy',
  'Guias práticos sobre conversão de texto, JSON, XML, CSV, regex, SEO técnico e produtividade.',
  '/blog',
  'website',
  '/assets/img/iconeTextLab.png'
)}<script type="application/ld+json">{"@context":"https://schema.org","@type":"CollectionPage","name":"Blog ConvertTextEasy","description":"Guias práticos sobre texto, SEO e desenvolvimento.","url":"${site}/blog","isPartOf":{"@type":"WebSite","url":"${site}/"}}</script></head><body><a href="#main-content" class="skip-link" id="skipLink">Pular para o conteúdo principal</a><div class="site-shell">${header('..')}<section class="panel hero-panel" id="main-content"><div class="panel-body"><div class="page-eyebrow" data-i18n="blogEyebrow">Blog indexável</div><h1 class="page-title" data-i18n="blogTitleAlt">Guias práticos de texto, SEO e desenvolvimento</h1><p class="page-description" data-i18n="blogDescAlt">Artigos otimizados com explicações, exemplos e ferramentas relacionadas. Aprenda a trabalhar melhor com texto, dados técnicos e otimização para buscadores.</p></div></section><section class="tools-grid mt-4" role="list">${articleSeeds.map(a=>`<a class="tool-card" href="/blog/${a.slug}" role="listitem"><div class="tool-title">${esc(a.title)}</div><p>${esc(a.desc)}</p><div class="example" data-i18n="guidedPractice">Guia prático</div></a>`).join('')}</section>${footer()}</div>${cookieConsent()}<script src="../assets/js/script.js"></script></body></html>`;
fs.writeFileSync(path.join(blogDir, 'index.html'), blogIndex);

const urls = ['/', '/blog', ...tools.map(t=>`/${t.slug}`), ...articleSeeds.map(a=>`/blog/${a.slug}`), '/about','/contact','/privacy-policy','/terms'];
fs.writeFileSync(path.join(root,'public','sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u=>`  <url><loc>${site}${u}</loc><lastmod>${today}</lastmod><changefreq>${u.includes('/blog/')?'monthly':'weekly'}</changefreq><priority>${u==='/'?'1.0':u==='/blog'?'0.9':'0.8'}</priority></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(root,'public','robots.txt'), `User-agent: *
Allow: /
Crawl-delay: 10
Sitemap: ${site}/sitemap.xml
`);
fs.writeFileSync(path.join(root,'public','content-manifest.json'), JSON.stringify({tools, articles:articleSeeds}, null, 2));
console.log(`Generated ${tools.length} tool pages and ${articleSeeds.length} blog articles.`);
