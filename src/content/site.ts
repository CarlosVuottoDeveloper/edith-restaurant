export type Turno = { nome: string; quando: string };
export type Citacao = { texto: string; autoria: string };
export type Link = { rotulo: string; url: string };
export type Site = {
  indexavel: boolean;
  nome: string;
  descricao: string;
  destaque: string;
  apresentacao: string;
  historia: string[];
  citacoes: Citacao[];
  horarios: Turno[];
  endereco: { texto: string; mapa: Link };
  whatsapp: {
    numero: string;
    chamada: string;
    chamadaCurta: string;
    url: string;
  };
  instagram: Link;
  navegacao: Link[];
  creditos: {
    materia: { titulo: string; autora: string; veiculo?: string; url?: string };
    desenvolvimento: string;
  };
};

export const site: Site = {
  // Fica false até o lançamento: mantém a página fora dos buscadores.
  indexavel: false,
  nome: "Cooperativa Mistura & Sabores Edith",
  descricao:
    "Cooperativa de moradores do Jardim Edite, na zona sul de São Paulo, que serve refeições e marmitex. Conheça a história, os horários e o endereço.",
  // Trecho da citação de Angelita de Jesus, na seção de história.
  destaque: "ganhar e dividir o nosso pão",
  apresentacao:
    "Uma cooperativa de alimentação formada por moradores do Conjunto Habitacional Jardim Edite, na zona sul de São Paulo, que serve refeições e marmitex para a vizinhança e para quem trabalha na região da Avenida Engenheiro Luís Carlos Berrini.",
  historia: [
    "A Unidade Produtiva de Alimentação Solidária foi inaugurada no Jardim Edite como parte do projeto “Economia Solidária como Estratégia de Desenvolvimento”, da Secretaria Municipal do Desenvolvimento, Trabalho e Empreendedorismo (SDTE), em parceria com a Central de Cooperativas e Empreendimentos Solidários (Unisol Brasil).",
    "Na inauguração, o coletivo reunia dezesseis moradores do conjunto habitacional e era acompanhado pela Incubadora Pública de Empreendimentos Solidários. As cozinheiras passaram por uma incubação, em que aprenderam a manipulação dos alimentos e a gestão de um negócio.",
    "O grupo se formalizou como cooperativa, com Estatuto Social e Conselhos Fiscal e Administrativo próprios.",
  ],
  citacoes: [
    {
      texto:
        "Queremos ser espelho para essa nova economia, sem patrão, mas com o mesmo intuito de ganhar e dividir o nosso pão, dando e mostrando o verdadeiro jeito de trabalho e renda justa para o coletivo.",
      autoria: "Angelita de Jesus, presidente da Cooperativa na época da matéria",
    },
    {
      texto:
        "Acredito que esse projeto vai mudar as nossas vidas, inclusive para a independência de nós, mulheres, e queremos oferecer alimentos de qualidade e fazer o bem.",
      autoria: "Cícera Lacerda, sócia-cooperada",
    },
  ],
  horarios: [
    { nome: "Almoço", quando: "Segunda a sexta, das 11h às 15h" },
    { nome: "Happy hour", quando: "Sextas, das 17h às 22h" },
  ],
  endereco: {
    texto: "Rua Charles Coulomb, 120 - Jardim Edite, São Paulo - SP",
    mapa: {
      rotulo: "Abrir no mapa",
      url: "https://maps.app.goo.gl/ySEXUoBRwoD3YYvH7",
    },
  },
  whatsapp: {
    numero: "+55 11 96631-9096",
    chamada: "Enviar mensagem no WhatsApp",
    chamadaCurta: "WhatsApp",
    url: "https://wa.me/5511966319096",
  },
  instagram: {
    rotulo: "@misturaesaboresedith",
    url: "https://www.instagram.com/misturaesaboresedith/",
  },
  navegacao: [
    { rotulo: "Endereço", url: "#contato" },
    { rotulo: "Horários", url: "#horarios" },
    { rotulo: "História", url: "#historia" },
  ],
  creditos: {
    materia: {
      titulo: "Jardim Edite recebe Unidade Produtiva de Alimentação Solidária",
      autora: "Juliana Mota",
    },
    desenvolvimento: "Carlos Vuotto",
  },
};
