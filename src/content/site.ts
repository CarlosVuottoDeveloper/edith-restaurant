export type Shift = { name: string; when: string };
export type Quote = { text: string; attribution: string };
export type Link = { label: string; url: string };
export type Photo = { src: string; alt: string };
export type Site = {
  indexable: boolean;
  name: string;
  description: string;
  tagline: string;
  intro: string;
  history: string[];
  quotes: Quote[];
  hours: Shift[];
  dishes: Photo[];
  address: { text: string; map: Link };
  whatsapp: {
    number: string;
    cta: string;
    shortCta: string;
    url: string;
  };
  instagram: Link;
  navigation: Link[];
  credits: {
    article: { title: string; author: string; outlet?: string; url?: string };
    development: string;
  };
};

export const site: Site = {
  // Stays false until launch: keeps the page out of search engines.
  indexable: false,
  name: "Cooperativa Mistura & Sabores Edith",
  description:
    "Cooperativa de moradores do Jardim Edite, na zona sul de São Paulo, que serve refeições e marmitex. Conheça a história, os horários e o endereço.",
  // Excerpt from Angelita de Jesus's quote, shown in the history section.
  tagline: "ganhar e dividir o nosso pão",
  intro:
    "Uma cooperativa de alimentação formada por moradores do Conjunto Habitacional Jardim Edite, na zona sul de São Paulo, que serve refeições e marmitex para a vizinhança e para quem trabalha na região da Avenida Engenheiro Luís Carlos Berrini.",
  history: [
    "A Unidade Produtiva de Alimentação Solidária foi inaugurada no Jardim Edite como parte do projeto “Economia Solidária como Estratégia de Desenvolvimento”, da Secretaria Municipal do Desenvolvimento, Trabalho e Empreendedorismo (SDTE), em parceria com a Central de Cooperativas e Empreendimentos Solidários (Unisol Brasil).",
    "Na inauguração, o coletivo reunia dezesseis moradores do conjunto habitacional e era acompanhado pela Incubadora Pública de Empreendimentos Solidários. As cozinheiras passaram por uma incubação, em que aprenderam a manipulação dos alimentos e a gestão de um negócio.",
    "O grupo se formalizou como cooperativa, com Estatuto Social e Conselhos Fiscal e Administrativo próprios.",
  ],
  quotes: [
    {
      text: "Queremos ser espelho para essa nova economia, sem patrão, mas com o mesmo intuito de ganhar e dividir o nosso pão, dando e mostrando o verdadeiro jeito de trabalho e renda justa para o coletivo.",
      attribution:
        "Angelita de Jesus, presidente da Cooperativa na época da matéria",
    },
    {
      text: "Acredito que esse projeto vai mudar as nossas vidas, inclusive para a independência de nós, mulheres, e queremos oferecer alimentos de qualidade e fazer o bem.",
      attribution: "Cícera Lacerda, sócia-cooperada",
    },
  ],
  hours: [{ name: "Almoço", when: "Segunda a sexta, das 11h às 15h" }],
  dishes: [
    {
      src: "/dish-grilled-chicken.jpg",
      alt: "Prato com filé de frango grelhado sobre alface, arroz e salada de cenoura e tomate, com feijão à parte",
    },
    {
      src: "/dish-stroganoff.jpg",
      alt: "Prato com arroz, batata palha e salada, acompanhado de estrogonofe e feijão em tigelas",
    },
    {
      src: "/dish-grilled-steak.jpg",
      alt: "Prato visto de cima com carne grelhada coberta de cebola, arroz e salada, com feijão e farofa à parte",
    },
  ],
  address: {
    text: "Rua Charles Coulomb, 120 - Jardim Edite, São Paulo - SP",
    map: {
      label: "Abrir no mapa",
      url: "https://maps.app.goo.gl/ySEXUoBRwoD3YYvH7",
    },
  },
  whatsapp: {
    number: "+55 11 96631-9096",
    cta: "Enviar mensagem no WhatsApp",
    shortCta: "WhatsApp",
    url: "https://wa.me/5511966319096",
  },
  instagram: {
    label: "@misturaesaboresedith",
    url: "https://www.instagram.com/misturaesaboresedith/",
  },
  navigation: [
    { label: "Endereço", url: "#contact" },
    { label: "Horários", url: "#hours" },
    { label: "História", url: "#history" },
  ],
  credits: {
    article: {
      title: "Jardim Edite recebe Unidade Produtiva de Alimentação Solidária",
      author: "Juliana Mota",
    },
    development: "Carlos Vuotto",
  },
};
