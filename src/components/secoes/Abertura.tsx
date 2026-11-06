import { LogoMarca } from "@/components/ui/LogoMarca";
import { site } from "@/content/site";

export function Abertura() {
  return (
    <section id="abertura" className="grid items-center gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h1 className="titulo-pagina">{site.nome}</h1>
        <p className="destaque text-verde-mistura">{site.destaque}</p>
        <p className="max-w-prose">{site.apresentacao}</p>
      </div>
      <div className="order-first md:order-last">
        <LogoMarca />
      </div>
    </section>
  );
}
