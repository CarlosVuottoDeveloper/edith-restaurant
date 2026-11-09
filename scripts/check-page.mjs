// Checks the HTML served by the server: node scripts/check-page.mjs [url]
// The expected and forbidden strings are site copy, so they stay in Portuguese.
const url = process.argv[2] ?? "http://localhost:3100";

const response = await fetch(url);
if (!response.ok) {
  console.error(`FAIL: ${url} responded ${response.status}`);
  process.exit(1);
}
const html = (await response.text()).replace(/<!--[\s\S]*?-->/g, "");

const ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#x27;": "'",
  "&#39;": "'",
  "&nbsp;": " ",
};

const decode = (text) =>
  text.replace(/&[#\w]+;/g, (entity) => ENTITIES[entity] ?? entity);

const visibleText = decode(
  html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<head\b[\s\S]*?<\/head>/gi, " ")
    .replace(/<[^>]+>/g, " "),
).replace(/\s+/g, " ");

const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
const description = decode(
  html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "",
);

const IN_HTML = [
  '<html lang="pt-BR"',
  '<meta name="robots" content="noindex',
  'href="https://wa.me/5511966319096"',
  'href="https://www.instagram.com/misturaesaboresedith/"',
  'href="https://maps.app.goo.gl/ySEXUoBRwoD3YYvH7"',
  'aria-label="Instagram"',
  "storefront.jpg",
  "dish-grilled-chicken.jpg",
  "dish-stroganoff.jpg",
  "dish-grilled-steak.jpg",
];

const IN_TEXT = [
  "Cooperativa Mistura & Sabores Edith",
  "Rua Charles Coulomb, 120 - Jardim Edite, São Paulo - SP",
  "Segunda a sexta, das 11h às 15h",
  "+55 11 96631-9096",
  "Enviar mensagem no WhatsApp",
  "@misturaesaboresedith",
  "Queremos ser espelho para essa nova economia",
  "vai mudar as nossas vidas",
  "Jardim Edite recebe Unidade Produtiva de Alimentação Solidária",
  "Juliana Mota",
  "Carlos Vuotto",
];

const FORBIDDEN =
  /happy hour|foto em breve|card[aá]pio|coffee break|pre[cç]o|R\$|\bpedidos?\b|pe[cç]a agora|\bencomend|delivery|\breserv(a|as|ar|e)\b|undefined|Jardim Edith|Sabores Edite|\b(19|20)\d{2}\b/i;

const failures = [];
for (const snippet of IN_HTML) {
  if (!html.includes(snippet)) failures.push(`missing from HTML: ${snippet}`);
}
if (/href="(undefined)?"/.test(html)) failures.push("empty or undefined link");
if (!title) failures.push("missing page title");
if (!description) failures.push("missing page description");
for (const snippet of IN_TEXT) {
  if (!visibleText.includes(snippet)) failures.push(`missing from text: ${snippet}`);
}
for (const text of [visibleText, title, description]) {
  const forbidden = text.match(FORBIDDEN);
  if (forbidden) failures.push(`forbidden text: ${forbidden[0]}`);
}

if (failures.length > 0) {
  failures.forEach((failure) => console.error(`FAIL: ${failure}`));
  process.exit(1);
}
console.log(`OK: ${url}`);
