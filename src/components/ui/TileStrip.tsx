const TILES = [
  { color: "bg-beet-red", width: 5 },
  { color: "bg-carrot-orange", width: 2 },
  { color: "bg-pot-blue", width: 4 },
  { color: "bg-brand-green", width: 1 },
  { color: "bg-leaf-green", width: 3 },
];

/** Decorative strip in the ingredient colors, split like wall tiles. */
export function TileStrip() {
  return (
    <div aria-hidden="true" className="flex h-8 gap-0.5">
      {TILES.map(({ color, width }) => (
        <div key={color} className={color} style={{ flexGrow: width }} />
      ))}
    </div>
  );
}
