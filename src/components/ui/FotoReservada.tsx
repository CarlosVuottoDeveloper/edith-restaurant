type FotoReservadaProps = { rotulo: string; proporcao: string };

/** Guarda o espaço de uma foto que ainda vai entrar, sem deslocar a página. */
export function FotoReservada({ rotulo, proporcao }: FotoReservadaProps) {
  return (
    <div
      role="img"
      aria-label={`Foto em breve: ${rotulo}`}
      style={{ aspectRatio: proporcao }}
      className="legenda flex w-full max-w-full items-center justify-center rounded-nenhum border-2 border-dashed border-azul-panela"
    >
      Foto em breve
    </div>
  );
}
