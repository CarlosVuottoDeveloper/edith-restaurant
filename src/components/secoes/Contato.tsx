import { BotaoChamada } from "@/components/ui/BotaoChamada";
import { LinkExterno } from "@/components/ui/LinkExterno";
import { Secao } from "@/components/ui/Secao";
import { site } from "@/content/site";

export function Contato() {
  const { endereco, whatsapp, instagram } = site;

  return (
    <Secao id="contato" titulo="Endereço e contato" fundo="contorno">
      <div>
        <address className="not-italic">{endereco.texto}</address>
        <LinkExterno href={endereco.mapa.url}>
          {endereco.mapa.rotulo}
        </LinkExterno>
      </div>
      <div className="flex flex-col items-start gap-2">
        <BotaoChamada href={whatsapp.url}>{whatsapp.chamada}</BotaoChamada>
        <p>{whatsapp.numero}</p>
      </div>
      <p>
        Instagram:{" "}
        <LinkExterno href={instagram.url}>{instagram.rotulo}</LinkExterno>
      </p>
    </Secao>
  );
}
