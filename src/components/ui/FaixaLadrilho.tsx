const LADRILHOS = [
  { cor: "bg-vermelho-beterraba", largura: 5 },
  { cor: "bg-laranja-cenoura", largura: 2 },
  { cor: "bg-azul-panela", largura: 4 },
  { cor: "bg-verde-mistura", largura: 1 },
  { cor: "bg-verde-folha", largura: 3 },
];

/** Faixa decorativa com as cores dos ingredientes, separadas como azulejos. */
export function FaixaLadrilho() {
  return (
    <div aria-hidden="true" className="flex h-8 gap-0.5">
      {LADRILHOS.map(({ cor, largura }) => (
        <div key={cor} className={cor} style={{ flexGrow: largura }} />
      ))}
    </div>
  );
}
