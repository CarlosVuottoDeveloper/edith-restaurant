type FotoReservadaProps = { rotulo: string; proporcao: string };

export function FotoReservada({ rotulo, proporcao }: FotoReservadaProps) {
  return (
    <div
      role="img"
      aria-label={rotulo}
      style={{ aspectRatio: proporcao }}
      className="flex w-full items-center justify-center border border-dashed"
    >
      Foto em breve
    </div>
  );
}
