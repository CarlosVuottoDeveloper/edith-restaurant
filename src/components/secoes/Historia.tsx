import { Citacao } from "@/components/ui/Citacao";
import { FotoFachada } from "@/components/ui/FotoFachada";
import { Secao } from "@/components/ui/Secao";
import { site } from "@/content/site";

export function Historia() {
  return (
    <Secao id="historia" titulo="História">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          {site.historia.map((paragrafo) => (
            <p key={paragrafo} className="max-w-prose">
              {paragrafo}
            </p>
          ))}
        </div>
        <FotoFachada />
      </div>
      <div className="grid gap-8 pt-4 md:grid-cols-2">
        {site.citacoes.map((citacao) => (
          <Citacao key={citacao.autoria} citacao={citacao} />
        ))}
      </div>
    </Secao>
  );
}
