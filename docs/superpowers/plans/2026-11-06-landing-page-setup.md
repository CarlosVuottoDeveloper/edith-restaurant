# Landing page do Edith: plano de configuração inicial

> **Para agentes:** SUB-SKILL OBRIGATÓRIA: use `superpowers:subagent-driven-development` ou `superpowers:executing-plans` para executar este plano tarefa por tarefa. Os passos usam caixas de seleção (`- [ ]`) para acompanhamento.

**Objetivo:** criar a base em Next.js da página do Edith, com o conteúdo real e sem estilo final, e publicá-la na Vercel fora dos buscadores.

**Arquitetura:** uma única rota estática, pré-renderizada em HTML. Todo o conteúdo fica em um arquivo tipado, consumido por componentes de seção simples, sem estado e sem código no cliente. O design feito no Claude Design substitui depois a apresentação desses componentes, sem mexer no conteúdo.

**Tecnologias:** Next.js 16 (App Router), React, TypeScript, Tailwind CSS, npm, Vercel.

**Documento de design:** [2026-11-06-landing-page-setup-design.md](../specs/2026-11-06-landing-page-setup-design.md). Leia antes de começar: os fatos, as citações e o que está fora do escopo estão lá.

## Restrições gerais

- Idioma da página: `pt-BR`.
- Node: `"engines": { "node": "24.x" }`. A máquina local usa Node 26, então o aviso `EBADENGINE` do npm é esperado e não é um erro.
- Nome: `Cooperativa Mistura & Sabores Edith`. O bairro é "Jardim Edite" e a cooperativa é "Edith". Não uniformize a grafia.
- Só entram fatos do documento de design. Nada de telefone, horário, preço, avaliação ou depoimento inventado.
- Fora da página: cardápio, preços, coffee break, pedido online e reserva.
- O texto da página não cita data nem ano da inauguração.
- Sem backend, sem `"use client"`, sem fontes externas e sem decisões visuais definitivas.
- Sem framework de testes. A verificação usa lint, checagem de tipos, build e `scripts/verificar-pagina.mjs`.
- `git push`, a vinculação com a Vercel e a publicação só acontecem com a confirmação da pessoa responsável pelo projeto.
- Todo commit termina com a linha `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Foco da revisão

1. **Celular estreito (360 px):** a página não pode ter rolagem horizontal. O endereço e os links precisam caber na tela. Verificado na Task 2.
2. **Sem JavaScript:** todo o conteúdo precisa estar no HTML entregue pelo servidor. O script de verificação ignora as tags `<script>`. Verificado na Task 2.
3. **Publicação em produção:** a Vercel só adiciona `noindex` por conta própria em prévias, então a versão de produção depende da tag da própria página. Verificado localmente na Task 2 e na URL publicada na Task 3.
4. **Conteúdo excluído:** nenhum termo de cardápio, coffee break, pedido, reserva ou ano pode reaparecer no texto. Verificado na Task 2.
5. **Crédito sem veículo e sem link:** a página não pode mostrar `undefined` nem um link vazio. Verificado na Task 2.

---

### Task 1: Base do projeto

**Arquivos:**
- Criar: arquivos do gerador do Next.js na raiz do repositório
- Modificar: `package.json`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- Remover: imagens de exemplo em `public/` e `src/app/page.module.css`, se existir

**Interfaces:**
- Produz: os scripts `npm run lint` e `npm run build`, o alias `@/*` apontando para `src/` e um `layout.tsx` que a Task 2 altera.

O gerador recusa pastas com `.agents/` e `skills-lock.json`, por isso o projeto é gerado em uma pasta temporária e copiado para a raiz. Os dois itens continuam no repositório e entram no commit.

- [ ] **Passo 1: Criar a branch de trabalho**

Run: `git checkout -b setup-inicial`
Expected: branch `setup-inicial` ativa. O `main` ainda não tem commits.

- [ ] **Passo 2: Gerar o projeto em uma pasta temporária e copiar para a raiz**

```bash
TMP_DIR="$(mktemp -d)"
npx --yes create-next-app@latest "$TMP_DIR/edith-restaurant" --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --disable-git --skip-install --no-agent-feedback --yes
rsync -a "$TMP_DIR/edith-restaurant/" ./
rm -rf "$TMP_DIR"
```

Expected: `package.json` na raiz, com `.agents/`, `docs/` e `skills-lock.json` intactos.

- [ ] **Passo 3: Fixar o Node e instalar as dependências**

Adicione `"engines": { "node": "24.x" }` ao `package.json` e rode `npm install`.
Expected: `package-lock.json` criado, apenas com o aviso `EBADENGINE`.

- [ ] **Passo 4: Limpar o conteúdo de exemplo**

- `src/app/layout.tsx`: use `<html lang="pt-BR">`, remova as fontes do `next/font` e mantenha a importação de `globals.css`.
- `src/app/globals.css`: deixe apenas `@import "tailwindcss";`.
- `src/app/page.tsx`: retorne um `<main>` vazio.
- `public/`: remova as imagens de exemplo.

Mantenha o `AGENTS.md` criado pelo gerador, se ele existir.

- [ ] **Passo 5: Verificar a base**

Run: `npm run lint && npx tsc --noEmit && npm run build`
Expected: os três terminam sem erro, e a rota `/` aparece como estática na saída do build.

- [ ] **Passo 6: Fazer o commit**

```bash
git add -A
git status --short   # confirme que node_modules/, .next/ e .env* não aparecem
git commit -m "chore: criar base do projeto em Next.js"
```

---

### Task 2: Conteúdo e seções da página

Antes de começar, leia `.agents/skills/vercel-react-best-practices/SKILL.md`. Ao final, confira a página com `.agents/skills/web-design-guidelines/SKILL.md`, considerando só estrutura e acessibilidade, porque o visual fica para o design.

**Arquivos:**
- Criar: `src/content/site.ts`
- Criar: `src/components/FotoReservada.tsx`
- Criar: `src/components/secoes/Abertura.tsx`, `Historia.tsx`, `Horarios.tsx`, `Contato.tsx`, `Rodape.tsx`
- Criar: `scripts/verificar-pagina.mjs`
- Modificar: `src/app/layout.tsx`, `src/app/page.tsx`

**Interfaces:**
- Consome: a base da Task 1.
- Produz: o objeto `site` a seguir, usado pelas seções e pelos metadados, e o comando `node scripts/verificar-pagina.mjs [url]`, reutilizado na Task 3.

```ts
// src/content/site.ts
export type Turno = { nome: string; quando: string };
export type Citacao = { texto: string; autoria: string };
export type Link = { rotulo: string; url: string };
export type Site = {
  indexavel: boolean;
  nome: string;
  descricao: string;
  apresentacao: string;
  historia: string[];
  citacoes: Citacao[];
  horarios: Turno[];
  endereco: { texto: string; mapa: Link };
  whatsapp: { numero: string; chamada: string; url: string };
  instagram: Link;
  creditos: {
    materia: { titulo: string; autora: string; veiculo?: string; url?: string };
    desenvolvimento: string;
  };
};
export const site: Site;
```

Valores exatos:

| Campo | Valor |
|---|---|
| `indexavel` | `false` |
| `nome` | `Cooperativa Mistura & Sabores Edith` |
| `horarios` | `Almoço` / `Segunda a sexta, das 11h às 15h`; `Happy hour` / `Sextas, das 17h às 22h` |
| `endereco.texto` | `Rua Charles Coulomb, 120 - Jardim Edite, São Paulo - SP` |
| `endereco.mapa.url` | `https://www.google.com/maps/search/?api=1&query=Rua%20Charles%20Coulomb%2C%20120%20-%20Jardim%20Edite%2C%20S%C3%A3o%20Paulo%20-%20SP` |
| `whatsapp.numero` | `+55 11 96631-9096` |
| `whatsapp.chamada` | `Enviar mensagem no WhatsApp` |
| `whatsapp.url` | `https://wa.me/5511966319096` |
| `instagram` | `@misturaesaboresedith` / `https://www.instagram.com/misturaesaboresedith/` |
| `creditos.materia.titulo` | `Jardim Edite recebe Unidade Produtiva de Alimentação Solidária` |
| `creditos.materia.autora` | `Juliana Mota` |
| `creditos.materia.veiculo` e `url` | não definidos |
| `creditos.desenvolvimento` | `Carlos Vuotto` |

Escreva `descricao`, `apresentacao` e `historia` usando só os fatos do documento de design, e cite o projeto e os dezesseis moradores no passado, como relato da matéria. Copie as `citacoes` literalmente. A autoria de Angelita de Jesus deve dizer `presidente da Cooperativa na época da matéria`.

- [ ] **Passo 1: Escrever o script de verificação**

`scripts/verificar-pagina.mjs` usa só Node, recebe a URL como argumento (padrão `http://localhost:3100`), lista cada falha e encerra com código 1 se houver alguma.

Sobre o HTML bruto:
- contém `<html lang="pt-BR"`
- contém `<meta name="robots" content="noindex`
- contém `href="https://wa.me/5511966319096"`
- contém `href="https://www.instagram.com/misturaesaboresedith/"`
- contém `href="https://www.google.com/maps/search/?api=1&amp;query=Rua%20Charles%20Coulomb`
- não contém `href=""`

Sobre o texto visível, depois de remover `<script>`, `<style>`, tags e comentários e de decodificar as entidades HTML:
- contém `Cooperativa Mistura & Sabores Edith`, `Rua Charles Coulomb, 120 - Jardim Edite, São Paulo - SP`, `Segunda a sexta, das 11h às 15h`, `Sextas, das 17h às 22h`, `+55 11 96631-9096`, `Enviar mensagem no WhatsApp`, `@misturaesaboresedith`, `Queremos ser espelho para essa nova economia`, `vai mudar as nossas vidas`, `Jardim Edite recebe Unidade Produtiva de Alimentação Solidária`, `Juliana Mota` e `Carlos Vuotto`
- não corresponde, sem diferenciar maiúsculas, a `/card[aá]pio|coffee break|pre[cç]o|R\$|fa[cç]a seu pedido|pe[cç]a agora|delivery|\breserva\b|undefined|Jardim Edith|Sabores Edite|\b(19|20)\d{2}\b/`

- [ ] **Passo 2: Confirmar que o script falha com a página vazia**

Run: `npm run build && npx next start -p 3100` em segundo plano e, em seguida, `node scripts/verificar-pagina.mjs`.
Expected: código de saída 1, com as falhas de conteúdo listadas. Encerre o servidor.

- [ ] **Passo 3: Criar `src/content/site.ts`**

Use o tipo e os valores acima.

- [ ] **Passo 4: Criar os componentes**

- `FotoReservada({ rotulo: string, proporcao: string })`: um `<div>` com `role="img"`, `aria-label={rotulo}`, `aspect-ratio` definido por `proporcao` e o texto `Foto em breve`. Use em `Abertura` e em `Historia`, com proporção `16 / 9`.
- Seções, sem props e importando `site`, na ordem: `Abertura` (`<h1>` com o nome e a apresentação), `Historia` (texto e citações em `<blockquote>`), `Horarios` (`horarios`), `Contato` (endereço, mapa, número, chamada de WhatsApp e Instagram) e `Rodape` (`<footer>` com os créditos).
- Dê a cada `<section>` um `id` (`abertura`, `historia`, `horarios`, `contato`) e um título `<h2>`, exceto em `Abertura`.
- Links externos usam `target="_blank"` e `rel="noopener noreferrer"`.
- Em `Rodape`, o título da matéria só vira link se `url` existir, e o veículo só aparece se existir.
- Use apenas as classes do Tailwind necessárias para espaçamento legível e largura de leitura.

- [ ] **Passo 5: Ligar a página e os metadados**

- `src/app/page.tsx`: renderize as seções em `<main>`, com o rodapé depois.
- `src/app/layout.tsx`: exporte `metadata` com `title: site.nome`, `description: site.descricao` e `robots: { index: site.indexavel, follow: site.indexavel }`.

- [ ] **Passo 6: Verificar lint, tipos, build e conteúdo**

Run: `npm run lint && npx tsc --noEmit && npm run build`, depois `npx next start -p 3100` em segundo plano e `node scripts/verificar-pagina.mjs`.
Expected: todos sem erro. Mantenha o servidor no ar para o próximo passo.

- [ ] **Passo 7: Conferir a página renderizada em 360 px**

Siga `.agents/skills/agent-browser/SKILL.md`, usando `npx --yes agent-browser` sem instalar nada globalmente. Abra `http://localhost:3100` com viewport 360x800, tire uma captura de tela e avalie `document.documentElement.scrollWidth <= window.innerWidth`.
Expected: resultado `true`, com as cinco partes visíveis e os dois espaços de foto reservados. Depois encerre o servidor.

- [ ] **Passo 8: Fazer o commit**

```bash
git add src scripts
git commit -m "feat: adicionar conteúdo e seções da página"
```

---

### Task 3: Publicação na Vercel

Antes de começar, a branch precisa ter passado pela revisão final. Esta tarefa altera serviços externos: **peça confirmação à pessoa responsável pelo projeto antes do Passo 1.** Use `npx --yes vercel@latest` em todos os comandos, porque a CLI global (65.3.1) está desatualizada e não precisa ser alterada.

**Arquivos:** nenhum no repositório. `vercel link` cria `.vercel/`, que o `.gitignore` do gerador já ignora.

**Interfaces:**
- Consome: `node scripts/verificar-pagina.mjs [url]`, da Task 2.
- Produz: o projeto na conta `kaduvuotto-6250s-projects`, com publicação automática a partir do `main`, e a URL `vercel.app` de produção.

- [ ] **Passo 1: Enviar o `main` para o GitHub**

O repositório remoto está vazio e o `main` local ainda não tem commits.

```bash
git branch main setup-inicial
git switch main
git push -u origin main
```

Expected: `main` publicado em `CarlosVuottoDeveloper/edith-restaurant`.

- [ ] **Passo 2: Vincular o projeto ao repositório**

Run: `npx --yes vercel@latest link --repo --scope kaduvuotto-6250s-projects`
Expected: `.vercel/repo.json` criado, com o projeto ligado ao repositório.

Se o comando pedir interação ou a conta da Vercel não tiver acesso ao GitHub `CarlosVuottoDeveloper`, pare e peça à pessoa responsável que autorize o acesso. Não tente contornar a autorização.

- [ ] **Passo 3: Disparar a primeira publicação por push**

```bash
git commit --allow-empty -m "chore: disparar primeira publicação na Vercel"
git push
```

Expected: um novo deploy de produção aparece em `npx --yes vercel@latest ls --format json` e chega a `Ready`. Isso confirma a publicação automática pelo `main`.

- [ ] **Passo 4: Verificar a URL de produção**

Run: `node scripts/verificar-pagina.mjs https://<url-de-producao>.vercel.app`
Expected: sem falhas, inclusive a do `noindex`.

- [ ] **Passo 5: Entregar o link**

Passe a URL à pessoa responsável e lembre que ela não deve ser divulgada até o lançamento.

---

## Depois desta etapa

Estes itens não fazem parte do plano e estão aqui para não serem esquecidos no lançamento:

- Aplicar o layout do Claude Design.
- Adicionar as fotos, confirmando a autorização da cooperativa, e remover `FotoReservada`.
- Revisar e aprovar os textos.
- Decidir a conta definitiva da Vercel, porque o plano Hobby é limitado a uso pessoal e não comercial.
- Trocar `indexavel` para `true` e tirar de `scripts/verificar-pagina.mjs` a checagem de `noindex`.
- Completar o veículo e o link da matéria, se forem encontrados.
