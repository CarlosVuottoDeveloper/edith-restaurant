import { CapsulaEndereco } from "@/components/ui/CapsulaEndereco";
import { PratoIlustrado } from "@/components/ui/PratoIlustrado";
import { site } from "@/content/site";

export function Abertura() {
  const { texto, mapa } = site.endereco;

  return (
    <section
      id="abertura"
      className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 md:grid-cols-2 md:pb-16"
    >
      <div className="flex flex-col gap-4">
        <p className="destaque text-verde-mistura">{site.destaque}</p>
        <h1 className="titulo-pagina">{site.nome}</h1>
        <p className="max-w-prose">{site.apresentacao}</p>
        <div className="pt-4">
          <CapsulaEndereco
            endereco={texto}
            rotuloMapa={mapa.rotulo}
            urlMapa={mapa.url}
          />
        </div>
      </div>
      {/* No celular, a mancha de cor acompanha o prato; do md em diante, quem pinta é o FundoOrganico. */}
      <div className="relative -mx-4 px-8 py-16 md:mx-0 md:p-0">
        <svg
          viewBox="0 0 360 400"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full fill-laranja-cenoura md:hidden"
        >
          <path d="M0 40 C90 -10 170 30 240 26 C300 22 340 6 360 0 L360 340 C270 400 190 360 120 372 C70 380 30 392 0 400 Z" />
        </svg>
        <PratoIlustrado />
      </div>
    </section>
  );
}
