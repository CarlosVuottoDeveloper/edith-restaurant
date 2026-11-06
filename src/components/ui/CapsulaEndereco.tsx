import { BotaoChamada } from "./BotaoChamada";

type CapsulaEnderecoProps = {
  endereco: string;
  rotuloMapa: string;
  urlMapa: string;
};

/** O endereço à vista na abertura, com o caminho direto para o mapa. */
export function CapsulaEndereco({
  endereco,
  rotuloMapa,
  urlMapa,
}: CapsulaEnderecoProps) {
  return (
    <div className="flex flex-col gap-2 rounded-grande bg-superficie p-2 shadow-cartao lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:rounded-pilula">
      <address className="px-4 py-2 text-balance not-italic lg:py-0">
        {endereco}
      </address>
      <div className="flex shrink-0 flex-col lg:block">
        <BotaoChamada href={urlMapa} variante="escuro">
          {rotuloMapa}
        </BotaoChamada>
      </div>
    </div>
  );
}
