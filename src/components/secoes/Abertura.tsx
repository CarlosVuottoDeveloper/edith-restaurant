import { FotoReservada } from "@/components/FotoReservada";
import { site } from "@/content/site";

export function Abertura() {
  return (
    <section id="abertura" className="space-y-4">
      <h1 className="text-3xl font-bold">{site.nome}</h1>
      <p>{site.apresentacao}</p>
      <FotoReservada rotulo="Foto da cooperativa" proporcao="16 / 9" />
    </section>
  );
}
