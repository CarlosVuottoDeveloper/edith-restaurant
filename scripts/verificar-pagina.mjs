// Confere o HTML entregue pelo servidor: node scripts/verificar-pagina.mjs [url]
const url = process.argv[2] ?? "http://localhost:3100";

const resposta = await fetch(url);
if (!resposta.ok) {
  console.error(`FALHA: ${url} respondeu ${resposta.status}`);
  process.exit(1);
}
const html = (await resposta.text()).replace(/<!--[\s\S]*?-->/g, "");

const ENTIDADES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#x27;": "'",
  "&#39;": "'",
  "&nbsp;": " ",
};

const decodificar = (texto) =>
  texto.replace(/&[#\w]+;/g, (entidade) => ENTIDADES[entidade] ?? entidade);

const textoVisivel = decodificar(
  html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<head\b[\s\S]*?<\/head>/gi, " ")
    .replace(/<[^>]+>/g, " "),
).replace(/\s+/g, " ");

const titulo = decodificar(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
const descricao = decodificar(
  html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "",
);

const NO_HTML = [
  '<html lang="pt-BR"',
  '<meta name="robots" content="noindex',
  'href="https://wa.me/5511966319096"',
  'href="https://www.instagram.com/misturaesaboresedith/"',
  'href="https://maps.app.goo.gl/ySEXUoBRwoD3YYvH7"',
];

const NO_TEXTO = [
  "Cooperativa Mistura & Sabores Edith",
  "Rua Charles Coulomb, 120 - Jardim Edite, São Paulo - SP",
  "Segunda a sexta, das 11h às 15h",
  "Sextas, das 17h às 22h",
  "+55 11 96631-9096",
  "Enviar mensagem no WhatsApp",
  "@misturaesaboresedith",
  "Queremos ser espelho para essa nova economia",
  "vai mudar as nossas vidas",
  "Jardim Edite recebe Unidade Produtiva de Alimentação Solidária",
  "Juliana Mota",
  "Carlos Vuotto",
];

const PROIBIDO =
  /card[aá]pio|coffee break|pre[cç]o|R\$|\bpedidos?\b|pe[cç]a agora|\bencomend|delivery|\breserv(a|as|ar|e)\b|undefined|Jardim Edith|Sabores Edite|\b(19|20)\d{2}\b/i;

const falhas = [];
for (const trecho of NO_HTML) {
  if (!html.includes(trecho)) falhas.push(`falta no HTML: ${trecho}`);
}
if (/href="(undefined)?"/.test(html)) falhas.push("link vazio ou undefined");
if (!titulo) falhas.push("falta o título da página");
if (!descricao) falhas.push("falta a descrição da página");
for (const trecho of NO_TEXTO) {
  if (!textoVisivel.includes(trecho)) falhas.push(`falta no texto: ${trecho}`);
}
for (const texto of [textoVisivel, titulo, descricao]) {
  const proibido = texto.match(PROIBIDO);
  if (proibido) falhas.push(`texto proibido: ${proibido[0]}`);
}

if (falhas.length > 0) {
  falhas.forEach((falha) => console.error(`FALHA: ${falha}`));
  process.exit(1);
}
console.log(`OK: ${url}`);
