import { site } from "@/content/site";

export function Contato() {
  const { endereco, whatsapp, instagram } = site;

  return (
    <section id="contato" className="space-y-4">
      <h2 className="text-2xl font-bold">Endereço e contato</h2>
      <address className="not-italic">{endereco.texto}</address>
      <ul className="space-y-2">
        <li>
          <a
            href={endereco.mapa.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {endereco.mapa.rotulo}
          </a>
        </li>
        <li>
          {whatsapp.numero}:{" "}
          <a
            href={whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {whatsapp.chamada}
          </a>
        </li>
        <li>
          Instagram:{" "}
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {instagram.rotulo}
          </a>
        </li>
      </ul>
    </section>
  );
}
