import { BotaoChamada } from "@/components/ui/BotaoChamada";
import { IconeInstagram } from "@/components/ui/IconeInstagram";
import { LinkExterno } from "@/components/ui/LinkExterno";
import { Secao } from "@/components/ui/Secao";
import { site } from "@/content/site";

export function Contato() {
  const { endereco, whatsapp, instagram } = site;

  return (
    <Secao id="contato" titulo="Endereço e contato">
      <div>
        <address className="text-balance not-italic">{endereco.texto}</address>
        <LinkExterno href={endereco.mapa.url}>
          {endereco.mapa.rotulo}
        </LinkExterno>
      </div>
      <div className="flex flex-col items-start gap-2">
        <BotaoChamada href={whatsapp.url}>{whatsapp.chamada}</BotaoChamada>
        <p>{whatsapp.numero}</p>
      </div>
      <p className="flex items-center gap-2">
        <IconeInstagram className="size-5 shrink-0 text-verde-folha" />
        <span className="sr-only">Instagram: </span>
        <LinkExterno href={instagram.url}>{instagram.rotulo}</LinkExterno>
      </p>
    </Secao>
  );
}
