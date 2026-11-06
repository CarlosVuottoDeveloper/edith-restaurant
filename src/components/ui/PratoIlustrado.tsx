type PecaProps = { x: number; y: number; giro?: number; escala?: number };

function posicao({ x, y, giro = 0, escala = 1 }: PecaProps) {
  return `translate(${x} ${y}) rotate(${giro}) scale(${escala})`;
}

// Grãos espalhados com o ângulo áureo: cobrem o prato por igual, sem parecer uma grade.
const GRAOS = Array.from({ length: 150 }, (_, i) => {
  const raio = 188 * Math.sqrt((i + 1) / 150);
  const angulo = (i + 1) * 2.39996;
  return {
    x: Math.round((320 + raio * Math.cos(angulo)) * 10) / 10,
    y: Math.round((320 + raio * Math.sin(angulo)) * 10) / 10,
    giro: (i * 47) % 180,
    cor: i % 2 === 0 ? "fill-laranja-cenoura" : "fill-verde-mistura",
  };
});

const BROTOS = [
  { x: 0, y: -24, r: 19 },
  { x: -22, y: -10, r: 18 },
  { x: 22, y: -10, r: 18 },
  { x: -12, y: 10, r: 18 },
  { x: 13, y: 10, r: 18 },
  { x: 0, y: -4, r: 17 },
];

function Brocolis(props: PecaProps) {
  return (
    <g transform={posicao(props)}>
      <path d="M-11 12 L11 12 L8 48 Q0 54 -8 48 Z" className="fill-verde-mistura" />
      {BROTOS.map((broto) => (
        <circle
          key={`${broto.x}-${broto.y}`}
          cx={broto.x}
          cy={broto.y + 3}
          r={broto.r}
          className="fill-verde-folha"
        />
      ))}
      {BROTOS.map((broto) => (
        <circle
          key={`${broto.x}-${broto.y}`}
          cx={broto.x}
          cy={broto.y}
          r={broto.r - 3}
          className="fill-verde-mistura"
        />
      ))}
    </g>
  );
}

function Rodela({
  corFundo,
  corAnel,
  ...props
}: PecaProps & { corFundo: string; corAnel: string }) {
  return (
    <g transform={posicao(props)}>
      <circle r="32" className={corFundo} />
      <circle r="23" fill="none" strokeWidth="2" className={corAnel} />
      <circle r="11" fill="none" strokeWidth="2" className={corAnel} />
    </g>
  );
}

function Folha({
  cor = "fill-verde-folha",
  ...props
}: PecaProps & { cor?: string }) {
  return (
    <g transform={posicao(props)}>
      <path d="M0 -44 C30 -22 30 20 0 44 C-30 20 -30 -22 0 -44 Z" className={cor} />
      <path
        d="M0 -32 V36 M0 -12 L13 -22 M0 -12 L-13 -22 M0 10 L14 -2 M0 10 L-14 -2"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        className="stroke-superficie"
      />
    </g>
  );
}

function Beterraba(props: PecaProps) {
  return (
    <g transform={posicao(props)}>
      <Folha x={-14} y={-52} giro={-22} escala={0.62} />
      <Folha x={14} y={-54} giro={20} escala={0.68} cor="fill-verde-mistura" />
      <path
        d="M0 -26 C26 -26 38 -8 34 12 C30 32 12 42 2 62 C-8 42 -30 32 -34 12 C-38 -8 -26 -26 0 -26 Z"
        className="fill-vermelho-beterraba"
      />
    </g>
  );
}

function Cenoura(props: PecaProps) {
  return (
    <g transform={posicao(props)}>
      <path
        d="M0 -22 Q-14 -44 -6 -56 M0 -22 Q0 -46 4 -60 M0 -22 Q14 -42 14 -54"
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
        className="stroke-verde-mistura"
      />
      <path
        d="M-20 -22 Q0 -30 20 -22 Q18 28 0 66 Q-18 28 -20 -22 Z"
        className="fill-laranja-cenoura"
      />
      <path
        d="M-16 -4 H-4 M16 10 H5 M-10 24 H-2"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="stroke-tinta"
      />
    </g>
  );
}

function TigelaAzul(props: PecaProps) {
  return (
    <g transform={posicao(props)}>
      <circle r="58" className="fill-azul-panela" />
      <circle r="44" className="fill-tinta" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <circle
          key={i}
          cx={Math.round(32 * Math.sqrt((i + 1) / 12) * Math.cos(i * 2.4))}
          cy={Math.round(32 * Math.sqrt((i + 1) / 12) * Math.sin(i * 2.4))}
          r="6"
          className={
            i % 3 === 0 ? "fill-vermelho-beterraba" : "fill-laranja-cenoura"
          }
        />
      ))}
    </g>
  );
}

/**
 * Prato visto de cima, desenhado só com as cores do sistema. É uma ilustração,
 * não uma foto do lugar: sai quando a foto autorizada da cooperativa chegar.
 */
export function PratoIlustrado() {
  return (
    <svg
      viewBox="0 0 640 640"
      aria-hidden="true"
      className="h-auto w-full overflow-visible"
    >
      <TigelaAzul x={76} y={92} />
      <Beterraba x={574} y={108} giro={24} escala={0.8} />
      <Folha x={208} y={36} giro={62} escala={0.8} />
      <Folha x={606} y={374} giro={118} escala={0.82} cor="fill-verde-mistura" />
      <Cenoura x={84} y={540} giro={-128} escala={0.95} />
      <Folha x={562} y={566} giro={38} escala={0.74} />
      <circle cx="32" cy="288" r="9" className="fill-vermelho-beterraba" />
      <circle cx="620" cy="226" r="8" className="fill-vermelho-beterraba" />
      <circle cx="350" cy="30" r="7" className="fill-tinta" />

      <g className="drop-shadow-prato">
        <circle cx="320" cy="320" r="256" className="fill-tinta" />
      </g>
      <circle
        cx="320"
        cy="320"
        r="228"
        fill="none"
        strokeWidth="2"
        className="stroke-superficie opacity-25"
      />
      <circle cx="320" cy="320" r="204" className="fill-superficie" />
      {GRAOS.map(({ x, y, giro, cor }) => (
        <ellipse
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          rx="6"
          ry="2.5"
          transform={`rotate(${giro} ${x} ${y})`}
          className={cor}
        />
      ))}

      <Folha x={232} y={250} giro={-40} escala={1.15} />
      <Folha x={420} y={418} giro={132} escala={1.1} />
      <Folha x={428} y={210} giro={30} escala={0.9} cor="fill-verde-mistura" />
      <Rodela
        x={330}
        y={196}
        corFundo="fill-vermelho-beterraba"
        corAnel="stroke-superficie"
      />
      <Rodela
        x={230}
        y={392}
        escala={1.1}
        corFundo="fill-vermelho-beterraba"
        corAnel="stroke-superficie"
      />
      <Rodela
        x={436}
        y={318}
        escala={0.85}
        corFundo="fill-laranja-cenoura"
        corAnel="stroke-tinta"
      />
      <Rodela
        x={330}
        y={456}
        escala={0.8}
        corFundo="fill-laranja-cenoura"
        corAnel="stroke-tinta"
      />
      <Rodela
        x={176}
        y={316}
        escala={0.7}
        corFundo="fill-laranja-cenoura"
        corAnel="stroke-tinta"
      />
      <Brocolis x={322} y={310} giro={-12} escala={1.45} />
      <Brocolis x={244} y={170} giro={-34} escala={0.95} />
      <Brocolis x={410} y={486} giro={150} escala={0.8} />
      <Brocolis x={486} y={270} giro={64} escala={0.8} />
    </svg>
  );
}
