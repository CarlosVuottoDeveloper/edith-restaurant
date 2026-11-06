# Landing page do Edith: configuração inicial

Data: 2026-11-06

## Intenção

O Edith é a Cooperativa Mistura & Sabores Edith, formada por moradores do Conjunto Habitacional Jardim Edite, na zona sul de São Paulo. Ela serve refeições e marmitex para moradores e para quem trabalha na região da Avenida Engenheiro Luís Carlos Berrini.

A página existe para que uma pessoa, inclusive perto da hora do almoço, descubra onde fica o lugar, quando abre e qual é a sua história. O pedido continua sendo feito na fila do caixa, então o site informa e não vende.

Este trabalho cria a base do projeto. O layout e o wireframe serão feitos no Claude Design pela pessoa responsável pelo projeto e entram depois, portanto a base precisa estar pronta para recebê-los sem retrabalho.

## Objetivos

- Projeto React funcionando localmente, com lint, checagem de tipos e build passando.
- Publicação na Vercel a partir do repositório GitHub já existente (`CarlosVuottoDeveloper/edith-restaurant`), mantida fora dos buscadores até o lançamento (ver "Publicação").
- Uma única página com todas as seções abaixo, usando o conteúdo real em pt-BR e sem estilo final.
- Conteúdo separado da apresentação, para que o design possa ser aplicado sem mexer nos textos e os textos possam mudar sem mexer no design.

## Fora do escopo

- Cardápio e preços: decisão da pessoa responsável pelo projeto de não incluir.
- Coffee break: decisão da pessoa responsável pelo projeto de não incluir, apesar de constar no perfil do Instagram.
- Pedido online, reserva, login, banco de dados ou qualquer backend.
- Layout, identidade visual e wireframe: serão feitos no Claude Design.
- Fotos reais: serão adicionadas por último pela pessoa responsável pelo projeto.
- Domínio próprio.

## O que não pode acontecer

- Exibir informação inventada, como telefone, horário, preço, avaliações ou depoimentos que não estejam neste documento.
- Sugerir que o cliente pode pedir pelo site.
- Tratar o Edith como um restaurante comum, apagando a história da cooperativa.
- Deixar decisões visuais definitivas na base que dificultem aplicar o design depois.

## Conteúdo

### Identificação

- Nome: Cooperativa Mistura & Sabores Edith
- Instagram: https://www.instagram.com/misturaesaboresedith/ (@misturaesaboresedith)

O bairro se escreve "Jardim Edite" e a cooperativa se escreve "Edith". A diferença é real e deve ser mantida.

### Endereço

Rua Charles Coulomb, 120 - Jardim Edite, São Paulo - SP

### Horários (conforme o perfil do Instagram)

- Almoço: segunda a sexta, das 11h às 15h
- Happy hour: sextas, das 17h às 22h

### Contato

+55 11 96631-9096, por mensagem no WhatsApp.

A chamada abre uma conversa no WhatsApp pelo link `https://wa.me/5511966319096`.

### Apresentação e história

A fonte é a matéria "Jardim Edite recebe Unidade Produtiva de Alimentação Solidária", de Juliana Mota. A pessoa responsável pelo projeto decidiu manter a história como está na matéria. Fatos que podem ser usados:

- A Unidade Produtiva de Alimentação Solidária foi inaugurada no Jardim Edite, zona sul de São Paulo.
- Faz parte do projeto "Economia Solidária como Estratégia de Desenvolvimento", da Secretaria Municipal do Desenvolvimento, Trabalho e Empreendedorismo (SDTE), em parceria com a Central de Cooperativas e Empreendimentos Solidários (Unisol Brasil).
- O coletivo é formado por dezesseis moradores do Conjunto Habitacional Jardim Edite e é acompanhado pela Incubadora Pública de Empreendimentos Solidários.
- As cozinheiras passaram por incubação, em que aprenderam manipulação de alimentos e gestão de um negócio.
- O grupo se formalizou como cooperativa, com Estatuto Social e Conselhos Fiscal e Administrativo próprios.
- Serve refeições e marmitex para moradores e para funcionários de empresas da região da Avenida Engenheiro Luís Carlos Berrini.

Citações disponíveis, exatamente como na matéria:

> "Queremos ser espelho para essa nova economia, sem patrão, mas com o mesmo intuito de ganhar e dividir o nosso pão, dando e mostrando o verdadeiro jeito de trabalho e renda justa para o coletivo." (Angelita de Jesus, presidente da Cooperativa na época da matéria)

> "Acredito que esse projeto vai mudar as nossas vidas, inclusive para a independência de nós, mulheres, e queremos oferecer alimentos de qualidade e fazer o bem." (Cícera Lacerda, sócia-cooperada)

A matéria não informa o ano da inauguração, então o texto da página não deve citar data.

### Créditos

Ficam no rodapé, com pouco destaque:

- Matéria: "Jardim Edite recebe Unidade Produtiva de Alimentação Solidária", de Juliana Mota. O veículo e o link não são conhecidos e não apareceram em uma busca na web. Sem esses dados, o crédito usa só o título e a autora, sem inventar a fonte. O conteúdo deve ter campos opcionais para os dois.
- Desenvolvimento do site: Carlos Vuotto.

## Seções da página

Na ordem, como ponto de partida até o design definir outra:

1. Abertura: nome e apresentação breve
2. História
3. Horários: almoço e happy hour
4. Endereço e contato: endereço, link para abrir no mapa, WhatsApp e Instagram
5. Rodapé: créditos

## Publicação

- O projeto fica na conta da Vercel `kaduvuotto-6250`, no plano Hobby, durante a fase de construção.
- A primeira versão publicada fica fora dos buscadores (`noindex`). Quem tiver o link ainda consegue abrir a página, então o endereço `vercel.app` não deve ser divulgado.
- O lançamento é um passo separado, fora desta etapa, e só acontece depois do design, das fotos e da aprovação dos textos pela pessoa responsável pelo projeto. Nesse passo, remove-se o `noindex`.
- Antes do lançamento é preciso decidir se o projeto passa para o plano Pro ou para uma conta da cooperativa, porque o plano Hobby é limitado a uso pessoal e não comercial. Essa troca pode mudar o endereço `vercel.app`.

## Decisões da pessoa responsável pelo projeto

- React, publicado na Vercel.
- Layout e wireframe feitos no Claude Design por essa pessoa.
- Sem cardápio e sem coffee break.
- Contato por mensagem no WhatsApp, no número +55 11 96631-9096.
- Fotos adicionadas por último.
- História mantida como está na matéria.
- Página fora dos buscadores até o lançamento, com liberação depois do design, das fotos e da aprovação dos textos.
- Começar na conta atual da Vercel e decidir a conta definitiva antes do lançamento.
- Créditos para a matéria e para quem desenvolveu o site.

## Decisões do autor deste documento

A pessoa responsável viu e não contestou Next.js, a ausência de backend, o conteúdo em arquivo único e o Node 24. As demais foram definidas ao escrever este documento e ainda podem ser alteradas.

- Next.js (App Router) com TypeScript, com a página pré-renderizada em HTML estático, para que o conteúdo apareça em buscadores.
- Sem backend.
- Conteúdo em um único arquivo tipado, consumido pelas seções.
- Tailwind CSS, padrão do gerador do Next.js. Como o formato de exportação do Claude Design ainda não é conhecido, nada na base deve impedir o uso de CSS comum.
- npm como gerenciador de pacotes, já que o pnpm não está instalado na máquina.
- Node 24, versão padrão atual da Vercel, fixada em `engines` no `package.json`.
- Espaços reservados de imagem claramente identificados, com dimensões definidas, para as fotos entrarem depois sem deslocar a página.
- Título, descrição e idioma `pt-BR` definidos nos metadados da página.
- Link de mapa em vez de mapa incorporado, sem chave de API.
- Sem framework de testes nesta etapa, por não haver lógica a testar. A verificação é lint, checagem de tipos, build e conferência da página renderizada.

## O que fica para o construtor

- Escrever os textos a partir dos fatos acima, sem acrescentar fatos novos.
- A estrutura interna de pastas e a divisão de componentes.
- Como gerar o projeto, considerando que o repositório já contém `.agents/` e `skills-lock.json`, que devem ser preservados.

## Estado atual

- O repositório tem remoto no GitHub, ainda não tem commits e não tem código.
- A máquina usa Node 26.12.1 e npm 11.20.0.
- A Vercel CLI instalada (65.3.1) está desatualizada, a mais recente é a 65.12.1.
- O projeto ainda não está vinculado à Vercel.
