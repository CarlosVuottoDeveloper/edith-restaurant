import { FotoReservada } from "@/components/FotoReservada";
import { site } from "@/content/site";

export function Historia() {
  return (
    <section id="historia" className="space-y-4">
      <h2 className="text-2xl font-bold">História</h2>
      {site.historia.map((paragrafo) => (
        <p key={paragrafo}>{paragrafo}</p>
      ))}
      {site.citacoes.map((citacao) => (
        <blockquote key={citacao.autoria} className="border-l-2 pl-4">
          <p>“{citacao.texto}”</p>
          <footer className="mt-1 text-sm">{citacao.autoria}</footer>
        </blockquote>
      ))}
      <FotoReservada rotulo="Foto da história da cooperativa" proporcao="16 / 9" />
    </section>
  );
}
