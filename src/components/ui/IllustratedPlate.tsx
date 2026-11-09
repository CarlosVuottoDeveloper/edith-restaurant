type PieceProps = { x: number; y: number; rotation?: number; scale?: number };

function placement({ x, y, rotation = 0, scale = 1 }: PieceProps) {
  return `translate(${x} ${y}) rotate(${rotation}) scale(${scale})`;
}

// Grains spread with the golden angle: they cover the plate evenly without looking like a grid.
const GRAINS = Array.from({ length: 150 }, (_, i) => {
  const radius = 188 * Math.sqrt((i + 1) / 150);
  const angle = (i + 1) * 2.39996;
  return {
    x: Math.round((320 + radius * Math.cos(angle)) * 10) / 10,
    y: Math.round((320 + radius * Math.sin(angle)) * 10) / 10,
    rotation: (i * 47) % 180,
    color: i % 2 === 0 ? "fill-carrot-orange" : "fill-brand-green",
  };
});

const FLORETS = [
  { x: 0, y: -24, r: 19 },
  { x: -22, y: -10, r: 18 },
  { x: 22, y: -10, r: 18 },
  { x: -12, y: 10, r: 18 },
  { x: 13, y: 10, r: 18 },
  { x: 0, y: -4, r: 17 },
];

function Broccoli(props: PieceProps) {
  return (
    <g transform={placement(props)}>
      <path d="M-11 12 L11 12 L8 48 Q0 54 -8 48 Z" className="fill-brand-green" />
      {FLORETS.map((floret) => (
        <circle
          key={`${floret.x}-${floret.y}`}
          cx={floret.x}
          cy={floret.y + 3}
          r={floret.r}
          className="fill-leaf-green"
        />
      ))}
      {FLORETS.map((floret) => (
        <circle
          key={`${floret.x}-${floret.y}`}
          cx={floret.x}
          cy={floret.y}
          r={floret.r - 3}
          className="fill-brand-green"
        />
      ))}
    </g>
  );
}

function Slice({
  fillColor,
  ringColor,
  ...props
}: PieceProps & { fillColor: string; ringColor: string }) {
  return (
    <g transform={placement(props)}>
      <circle r="32" className={fillColor} />
      <circle r="23" fill="none" strokeWidth="2" className={ringColor} />
      <circle r="11" fill="none" strokeWidth="2" className={ringColor} />
    </g>
  );
}

function Leaf({
  color = "fill-leaf-green",
  ...props
}: PieceProps & { color?: string }) {
  return (
    <g transform={placement(props)}>
      <path d="M0 -44 C30 -22 30 20 0 44 C-30 20 -30 -22 0 -44 Z" className={color} />
      <path
        d="M0 -32 V36 M0 -12 L13 -22 M0 -12 L-13 -22 M0 10 L14 -2 M0 10 L-14 -2"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        className="stroke-surface"
      />
    </g>
  );
}

function Beet(props: PieceProps) {
  return (
    <g transform={placement(props)}>
      <Leaf x={-14} y={-52} rotation={-22} scale={0.62} />
      <Leaf x={14} y={-54} rotation={20} scale={0.68} color="fill-brand-green" />
      <path
        d="M0 -26 C26 -26 38 -8 34 12 C30 32 12 42 2 62 C-8 42 -30 32 -34 12 C-38 -8 -26 -26 0 -26 Z"
        className="fill-beet-red"
      />
    </g>
  );
}

function Carrot(props: PieceProps) {
  return (
    <g transform={placement(props)}>
      <path
        d="M0 -22 Q-14 -44 -6 -56 M0 -22 Q0 -46 4 -60 M0 -22 Q14 -42 14 -54"
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
        className="stroke-brand-green"
      />
      <path
        d="M-20 -22 Q0 -30 20 -22 Q18 28 0 66 Q-18 28 -20 -22 Z"
        className="fill-carrot-orange"
      />
      <path
        d="M-16 -4 H-4 M16 10 H5 M-10 24 H-2"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="stroke-ink"
      />
    </g>
  );
}

function BlueBowl(props: PieceProps) {
  return (
    <g transform={placement(props)}>
      <circle r="58" className="fill-pot-blue" />
      <circle r="44" className="fill-ink" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <circle
          key={i}
          cx={Math.round(32 * Math.sqrt((i + 1) / 12) * Math.cos(i * 2.4))}
          cy={Math.round(32 * Math.sqrt((i + 1) / 12) * Math.sin(i * 2.4))}
          r="6"
          className={i % 3 === 0 ? "fill-beet-red" : "fill-carrot-orange"}
        />
      ))}
    </g>
  );
}

/**
 * Plate seen from above, drawn only with the system colors. It is an illustration,
 * not a photo of the place.
 */
export function IllustratedPlate() {
  return (
    <svg
      viewBox="0 0 640 640"
      aria-hidden="true"
      className="h-auto w-full overflow-visible"
    >
      <BlueBowl x={76} y={92} />
      <Beet x={574} y={108} rotation={24} scale={0.8} />
      <Leaf x={208} y={36} rotation={62} scale={0.8} />
      <Leaf x={606} y={374} rotation={118} scale={0.82} color="fill-brand-green" />
      <Carrot x={84} y={540} rotation={-128} scale={0.95} />
      <Leaf x={562} y={566} rotation={38} scale={0.74} />
      <circle cx="32" cy="288" r="9" className="fill-beet-red" />
      <circle cx="620" cy="226" r="8" className="fill-beet-red" />
      <circle cx="350" cy="30" r="7" className="fill-ink" />

      <g className="drop-shadow-plate">
        <circle cx="320" cy="320" r="256" className="fill-ink" />
      </g>
      <circle
        cx="320"
        cy="320"
        r="228"
        fill="none"
        strokeWidth="2"
        className="stroke-surface opacity-25"
      />
      <circle cx="320" cy="320" r="204" className="fill-surface" />
      {GRAINS.map(({ x, y, rotation, color }) => (
        <ellipse
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          rx="6"
          ry="2.5"
          transform={`rotate(${rotation} ${x} ${y})`}
          className={color}
        />
      ))}

      <Leaf x={232} y={250} rotation={-40} scale={1.15} />
      <Leaf x={420} y={418} rotation={132} scale={1.1} />
      <Leaf x={428} y={210} rotation={30} scale={0.9} color="fill-brand-green" />
      <Slice
        x={330}
        y={196}
        fillColor="fill-beet-red"
        ringColor="stroke-surface"
      />
      <Slice
        x={230}
        y={392}
        scale={1.1}
        fillColor="fill-beet-red"
        ringColor="stroke-surface"
      />
      <Slice
        x={436}
        y={318}
        scale={0.85}
        fillColor="fill-carrot-orange"
        ringColor="stroke-ink"
      />
      <Slice
        x={330}
        y={456}
        scale={0.8}
        fillColor="fill-carrot-orange"
        ringColor="stroke-ink"
      />
      <Slice
        x={176}
        y={316}
        scale={0.7}
        fillColor="fill-carrot-orange"
        ringColor="stroke-ink"
      />
      <Broccoli x={322} y={310} rotation={-12} scale={1.45} />
      <Broccoli x={244} y={170} rotation={-34} scale={0.95} />
      <Broccoli x={410} y={486} rotation={150} scale={0.8} />
      <Broccoli x={486} y={270} rotation={64} scale={0.8} />
    </svg>
  );
}
