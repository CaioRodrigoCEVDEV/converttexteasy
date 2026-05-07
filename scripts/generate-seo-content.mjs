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
function header(prefix='..') { return `<header class="topbar"><a href="/" class="brand-lockup text-decoration-none"><span class="navbar-logo"><img src="${prefix}/assets/img/iconeTextLab.png" alt="Ícone ConvertTextEasy" loading="lazy"></span><div><div class="brand-title">ConvertTextEasy</div><div class="brand-subtitle">Ferramentas de texto, dev e SEO</div></div></a><div class="topbar-actions"><a class="theme-toggle text-decoration-none" href="/blog">Blog</a><button class="theme-toggle btn btn-sm" onclick="toggleTheme()" title="Alternar tema"><span id="themeIcon">🌙</span><small>Tema</small></button></div></header>`; }
function footer() {
  const indexHtmlPath = path.join(root, 'public', 'index.html');

  if (fs.existsSync(indexHtmlPath)) {
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    const footerMatch = indexHtml.match(/<footer class="footer">[\s\S]*?<\/footer>/);

    if (footerMatch) return footerMatch[0];
  }

  return `<footer class="footer">
    <div class="footer-grid">
      <div>
        <div class="brand-lockup mb-3">
          <span class="navbar-logo"><img loading="lazy" src="/assets/img/iconeTextLab.png" alt="Ícone ConvertTextEasy"></span>
          <div>
            <div class="brand-title" id="footerTitle">ConvertTextEasy</div>
            <div class="brand-subtitle" id="footerBrandSubtitle">Conversor de Texto</div>
          </div>
        </div>
        <p class="small text-muted mb-3" id="footerDesc">Ferramenta gratuita para transformar textos, validar dados e melhorar SEO técnico.</p>
      </div>

      <div>
        <h6 class="mb-3 fw-semibold" id="footerLinksTitle">Ferramentas</h6>
        <ul class="list-unstyled small m-0">
          <li class="mb-2"><a href="/" id="footerHomeLink" class="text-muted text-decoration-none">Página Inicial</a></li>
          <li class="mb-2"><a href="/contador-caracteres" id="footerToolLink1" class="text-muted text-decoration-none">Contador de caracteres</a></li>
          <li class="mb-2"><a href="/json-formatter" id="footerToolLink2" class="text-muted text-decoration-none">JSON Formatter</a></li>
          <li><a href="/slug-generator" id="footerToolLink3" class="text-muted text-decoration-none">Slug Generator</a></li>
        </ul>
      </div>

      <div>
        <h6 class="mb-3 fw-semibold" id="footerContactTitle">Suporte</h6>
        <ul class="list-unstyled small m-0">
          <li class="mb-2"><a href="/blog" class="text-muted text-decoration-none">Blog</a></li>
          <li class="mb-2"><a href="/about" class="text-muted text-decoration-none" id="footerAboutLink">Sobre Nós</a></li>
          <li class="mb-2"><a href="/privacy-policy" class="text-muted text-decoration-none" id="footerPrivacyLink">Privacidade</a></li>
          <li class="mb-2"><a href="/terms" class="text-muted text-decoration-none" id="footerTermsLink">Termos</a></li>
          <li><a href="/contact" id="footerContactLink" class="text-muted text-decoration-none">Contato</a></li>
        </ul>
      </div>

      <div>
        <h6 class="mb-3 fw-semibold" id="newsletterTitle">Fique Atualizado</h6>
        <p class="small text-muted mb-3" id="newsletterCopy">Receba dicas e novas ferramentas por email.</p>
        <div class="input-group">
          <input type="email" id="newsletterInput" class="form-control form-control-sm" placeholder="Seu email">
          <button class="btn btn-primary btn-sm" id="newsletterButton" type="button">Inscrever</button>
        </div>
        <p class="small text-muted mt-4 mb-0" id="footerCopyright">© 2026 ConvertTextEasy. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>`;
}

function toolHtml(tool){
 const faq = [`${tool.title} é gratuito?`, `Os dados são enviados ao servidor?`, `Posso usar no celular?`];
 const related = tools.filter(t=>t.slug!==tool.slug).slice(0,8).map(t=>`<a class="related-tool-link" href="/${t.slug}">${esc(t.title)}</a>`).join('');
 const schema = {"@context":"https://schema.org","@type":"SoftwareApplication",name:tool.title,applicationCategory:'UtilitiesApplication',operatingSystem:'Web',url:`${site}/${tool.slug}`,description:tool.description,offers:{"@type":"Offer",price:'0',priceCurrency:'USD'}};
 const faqSchema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map((q,i)=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:[`Sim. ${tool.title} pode ser usado sem cadastro diretamente no navegador.`,`Não armazenamos o conteúdo digitado. A transformação acontece no seu navegador sempre que possível.`,`Sim. A página é responsiva e funciona em telas menores.`][i]}}))};
 const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:'Início',item:site},{"@type":"ListItem",position:2,name:'Ferramentas',item:`${site}/#ferramentas`},{"@type":"ListItem",position:3,name:tool.title,item:`${site}/${tool.slug}`} ]};
 return `<!DOCTYPE html><html lang="pt-BR" data-theme="dark" data-bs-theme="dark"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${esc(tool.title)} Online Grátis | ConvertTextEasy</title><meta name="description" content="${esc(tool.description)}"><link rel="canonical" href="${site}/${tool.slug}"><meta property="og:title" content="${esc(tool.title)}"><meta property="og:description" content="${esc(tool.description)}"><meta property="og:type" content="website"><meta property="og:url" content="${site}/${tool.slug}"><link rel="icon" href="../assets/img/iconeTextLab.png" type="image/x-icon"><link rel="stylesheet" href="../assets/css/style.css"><script type="application/ld+json">${JSON.stringify(schema)}</script><script type="application/ld+json">${JSON.stringify(faqSchema)}</script><script type="application/ld+json">${JSON.stringify(breadcrumb)}</script></head><body data-tool-page="${tool.type}"><div class="site-shell">${header('..')}<nav class="breadcrumbs"><a href="/">Início</a><span>›</span><a href="/#ferramentas">Ferramentas</a><span>›</span><span>${esc(tool.title)}</span></nav><section class="panel hero-panel"><div class="panel-body"><div class="page-eyebrow">Ferramenta online</div><h1 class="page-title">${esc(tool.title)}</h1><p class="page-description">${esc(tool.description)}</p></div></section><main class="content-grid mt-4"><section class="panel editor-card"><div class="panel-head"><div><h2 class="panel-title">Editor de ${esc(tool.title)}</h2><p class="panel-copy">Cole o conteúdo, execute a ação e copie o resultado. A contagem é atualizada em tempo real.</p></div></div><div class="panel-body"><div class="editor-stack"><div class="editor-surface"><textarea id="input" placeholder="Cole seu texto aqui..." class="form-control editor-textarea" rows="12"></textarea><div class="editor-footer"><div class="editor-actions"><button class="editor-action-btn" onclick="copyText()" title="Copiar">📋</button><button class="editor-action-btn" onclick="clearText()" title="Limpar">🗑</button></div><div class="editor-stats">Caracteres: <span id="charCount">0</span> | Palavras: <span id="wordCount">0</span> | Linhas: <span id="lineCount">0</span></div></div></div><div class="tool-action-bar"><button id="toolActionButton" class="badge-conversion badge-conversion-primary" onclick="convert('${tool.type}')" type="button"><span>Go</span>Executar ferramenta</button></div></div></div></section><aside class="sidebar-stack"><section class="panel"><div class="panel-head"><div><h2 class="panel-title">Exemplo</h2><p class="panel-copy">Resultado esperado para referência rápida.</p></div></div><div class="panel-body"><div class="example">${esc(tool.example)}</div></div></section><section class="panel"><div class="panel-head"><div><h2 class="panel-title">Outras ferramentas</h2><p class="panel-copy">Páginas individuais com tutorial, FAQ e exemplos.</p></div></div><div class="panel-body"><div class="related-tools-grid">${related}</div></div></section></aside></main><section class="panel mt-4"><div class="panel-body article-content"><h2>Tutorial: como usar ${esc(tool.title)}</h2><p>${esc(tool.tutorial)} A ferramenta foi criada para resolver tarefas recorrentes de texto, desenvolvimento e SEO sem exigir instalação, login ou configuração.</p><p>Para começar, cole o conteúdo no editor principal. Em seguida, clique no botão de execução. O resultado aparece no mesmo campo para facilitar conferência, cópia e ajustes manuais. Se estiver revisando um conteúdo grande, acompanhe também as métricas de caracteres, palavras e linhas no rodapé do editor.</p><h2>Boas práticas</h2><ul><li>Revise o resultado antes de publicar ou enviar para sistemas externos.</li><li>Evite colar dados sensíveis em ferramentas online quando não for necessário.</li><li>Use a página específica da ferramenta como referência em fluxos repetitivos.</li></ul><h2>FAQ</h2><h3>${faq[0]}</h3><p>Sim. A ferramenta é gratuita e foi pensada para uso rápido no navegador.</p><h3>${faq[1]}</h3><p>As transformações principais rodam no cliente. Não há necessidade de enviar seu texto para uma API para executar a operação.</p><h3>${faq[2]}</h3><p>Sim. O layout é responsivo e pode ser usado em desktop, tablet ou celular.</p></div></section>${footer()}</div><script src="../assets/js/script.js"></script></body></html>`;
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
 const schema={"@context":"https://schema.org","@type":"Article",headline:article.title,description:article.desc,datePublished:today,dateModified:today,author:{"@type":"Organization",name:'ConvertTextEasy'},mainEntityOfPage:`${site}/blog/${article.slug}`};
 const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:'Início',item:site},{"@type":"ListItem",position:2,name:'Blog',item:`${site}/blog`},{"@type":"ListItem",position:3,name:article.title,item:`${site}/blog/${article.slug}`} ]};
 return `<!DOCTYPE html><html lang="pt-BR" data-theme="dark" data-bs-theme="dark"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${esc(article.title)} | Blog ConvertTextEasy</title><meta name="description" content="${esc(article.desc)}"><link rel="canonical" href="${site}/blog/${article.slug}"><meta property="og:title" content="${esc(article.title)}"><meta property="og:description" content="${esc(article.desc)}"><meta property="og:type" content="article"><meta property="og:url" content="${site}/blog/${article.slug}"><link rel="icon" href="../assets/img/iconeTextLab.png" type="image/x-icon"><link rel="stylesheet" href="../assets/css/style.css"><script type="application/ld+json">${JSON.stringify(schema)}</script><script type="application/ld+json">${JSON.stringify(breadcrumb)}</script></head><body><div class="site-shell">${header('..')}<nav class="breadcrumbs"><a href="/">Início</a><span>›</span><a href="/blog">Blog</a><span>›</span><span>${esc(article.title)}</span></nav><article class="panel"><div class="panel-body article-content"><p class="page-eyebrow">Guia prático</p><h1 class="page-title">${esc(article.title)}</h1><p class="page-description">${esc(article.desc)}</p>${paragraphs.map((p,i)=>`${i===1?'<h2>Por que isso importa?</h2>':''}${i===3?'<h2>Passo a passo e boas práticas</h2>':''}${i===8?'<h2>Exemplos e erros comuns</h2>':''}<p>${esc(p)}</p>`).join('')}<div class="tool-callout"><h2>Ferramenta relacionada</h2><p>Use ${esc(tool.title)} para aplicar este conceito em poucos cliques.</p><a class="badge-conversion badge-conversion-primary text-decoration-none" href="/${tool.slug}"><span>Go</span>Abrir ferramenta</a></div></div></article>${footer()}</div><script src="../assets/js/script.js"></script></body></html>`;
}

for (const tool of tools) fs.writeFileSync(path.join(toolsDir, `${tool.slug}.html`), toolHtml(tool));
for (const [oldName, newSlug] of [['uppercase-text.html','uppercase-text'],['lowercase-text.html','lowercase-text'],['capitalize-text.html','capitalize-text'],['reverse-text.html','reverse-text'],['alternating-case.html','alternating-case'],['italic-text.html','italic-text'],['strikethrough-text.html','strikethrough-text'],['morse-code-translator.html','morse-code-translator']]) {
 fs.copyFileSync(path.join(toolsDir, `${newSlug}.html`), path.join(toolsDir, oldName));
}
for (const [i, article] of articleSeeds.entries()) fs.writeFileSync(path.join(blogDir, `${article.slug}.html`), articleHtml(article, i));

const blogIndex = `<!DOCTYPE html><html lang="pt-BR" data-theme="dark" data-bs-theme="dark"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Blog de texto, SEO e dev tools | ConvertTextEasy</title><meta name="description" content="Guias práticos sobre conversão de texto, JSON, XML, CSV, regex, SEO técnico e produtividade."><link rel="canonical" href="${site}/blog"><meta property="og:title" content="Blog ConvertTextEasy"><meta property="og:description" content="Artigos práticos para texto, SEO e desenvolvimento."><link rel="stylesheet" href="../assets/css/style.css"></head><body><div class="site-shell">${header('..')}<section class="panel hero-panel"><div class="panel-body"><div class="page-eyebrow">Blog indexável</div><h1 class="page-title">Guias práticos de texto, SEO e desenvolvimento</h1><p class="page-description">Artigos otimizados com explicações, exemplos e ferramentas relacionadas.</p></div></section><section class="tools-grid mt-4">${articleSeeds.map(a=>`<a class="tool-card" href="/blog/${a.slug}"><div class="tool-title">${esc(a.title)}</div><p>${esc(a.desc)}</p><div class="example">Guia prático</div></a>`).join('')}</section>${footer()}</div><script src="../assets/js/script.js"></script></body></html>`;
fs.writeFileSync(path.join(blogDir, 'index.html'), blogIndex);

const urls = ['/', '/blog', ...tools.map(t=>`/${t.slug}`), ...articleSeeds.map(a=>`/blog/${a.slug}`), '/about','/contact','/privacy-policy','/terms'];
fs.writeFileSync(path.join(root,'public','sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u=>`  <url><loc>${site}${u}</loc><lastmod>${today}</lastmod><changefreq>${u.includes('/blog/')?'monthly':'weekly'}</changefreq><priority>${u==='/'?'1.0':u==='/blog'?'0.9':'0.8'}</priority></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(root,'public','robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`);
fs.writeFileSync(path.join(root,'public','content-manifest.json'), JSON.stringify({tools, articles:articleSeeds}, null, 2));
console.log(`Generated ${tools.length} tool pages and ${articleSeeds.length} blog articles.`);
