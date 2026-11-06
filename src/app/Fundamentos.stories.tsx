import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const CORES = [
  {
    token: "superficie",
    classe: "bg-superficie",
    uso: "Fundo da página e texto sobre a chamada principal.",
  },
  {
    token: "tinta",
    classe: "bg-tinta",
    uso: "Texto. Também vai sobre laranja-cenoura e azul-panela.",
  },
  {
    token: "verde-folha",
    classe: "bg-verde-folha",
    uso: "Links e anel de foco do teclado.",
  },
  {
    token: "vermelho-beterraba",
    classe: "bg-vermelho-beterraba",
    uso: "Só na chamada principal, com texto em superficie.",
  },
  {
    token: "verde-mistura",
    classe: "bg-verde-mistura",
    uso: "Texto de 24 px ou mais, ícones e bordas.",
  },
  {
    token: "azul-panela",
    classe: "bg-azul-panela",
    uso: "Fundo com texto em tinta, e bordas. Nunca como texto sobre superficie.",
  },
  {
    token: "laranja-cenoura",
    classe: "bg-laranja-cenoura",
    uso: "Fundo com texto em tinta. Nunca como texto sobre superficie.",
  },
];

const ESTILOS_DE_TEXTO = [
  {
    classe: "titulo-pagina",
    uso: "Uma vez por página, no h1.",
    exemplo: "Cooperativa Mistura & Sabores Edith",
  },
  {
    classe: "titulo-secao",
    uso: "Nos h2.",
    exemplo: "Endereço e contato",
  },
  {
    classe: "destaque text-verde-mistura",
    uso: "Poucas palavras, nunca abaixo de 32 px.",
    exemplo: "ganhar e dividir o nosso pão",
  },
  {
    classe: "corpo",
    uso: "Texto corrido, com até cerca de 65 caracteres por linha.",
    exemplo: "Rua Charles Coulomb, 120 - Jardim Edite, São Paulo - SP",
  },
  {
    classe: "chamada",
    uso: "Botões e links de ação.",
    exemplo: "Enviar mensagem no WhatsApp",
  },
  {
    classe: "legenda",
    uso: "Autorias, legendas e rodapé.",
    exemplo: "Cícera Lacerda, sócia-cooperada",
  },
];

const ESPACOS = [
  { classe: "w-2", valor: "2 (8 px)", uso: "Dentro de um grupo pequeno." },
  { classe: "w-4", valor: "4 (16 px)", uso: "Entre parágrafos e margem lateral no celular." },
  { classe: "w-8", valor: "8 (32 px)", uso: "Entre blocos." },
  { classe: "w-16", valor: "16 (64 px)", uso: "Entre seções." },
];

const RAIOS = [
  { classe: "rounded-nenhum", token: "nenhum", uso: "Fotos." },
  { classe: "rounded-pequeno", token: "pequeno", uso: "Blocos de informação." },
  { classe: "rounded-grande", token: "grande", uso: "Cartões e blocos sobre o fundo orgânico." },
  { classe: "rounded-pilula", token: "pilula", uso: "Botões de chamada e cápsula do endereço." },
];

// Lê o valor publicado pelo CSS, para esta página não repetir os tokens de globals.css.
function valorDoToken(variavel: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(variavel);
}

const meta = {
  title: "Fundamentos",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Cores: Story = {
  render: () => (
    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {CORES.map(({ token, classe, uso }) => (
        <li key={token} className="flex flex-col gap-2">
          <div
            className={`h-16 rounded-pequeno border-2 border-tinta ${classe}`}
          />
          <p className="chamada">{token}</p>
          <p className="legenda">{valorDoToken(`--color-${token}`)}</p>
          <p className="legenda">{uso}</p>
        </li>
      ))}
    </ul>
  ),
};

export const Tipografia: Story = {
  render: () => (
    <ul className="flex flex-col gap-8">
      {ESTILOS_DE_TEXTO.map(({ classe, uso, exemplo }) => (
        <li key={classe} className="flex flex-col gap-2">
          <p className={classe}>{exemplo}</p>
          <p className="legenda">
            {classe.split(" ")[0]}: {uso}
          </p>
        </li>
      ))}
    </ul>
  ),
};

export const Espacos: Story = {
  name: "Espaços",
  render: () => (
    <ul className="flex flex-col gap-4">
      {ESPACOS.map(({ classe, valor, uso }) => (
        <li key={classe} className="flex items-center gap-4">
          <div className={`h-8 shrink-0 bg-azul-panela ${classe}`} />
          <p>
            <span className="chamada">{valor}.</span> {uso}
          </p>
        </li>
      ))}
    </ul>
  ),
};

export const Raios: Story = {
  render: () => (
    <ul className="flex flex-wrap gap-8">
      {RAIOS.map(({ classe, token, uso }) => (
        <li key={token} className="flex w-48 flex-col gap-2">
          <div className={`h-16 bg-azul-panela ${classe}`} />
          <p className="chamada">{token}</p>
          <p className="legenda">{uso}</p>
        </li>
      ))}
    </ul>
  ),
};
