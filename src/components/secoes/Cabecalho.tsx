import { BotaoChamada } from "@/components/ui/BotaoChamada";
import { IconeInstagram } from "@/components/ui/IconeInstagram";
import { LogoMarca } from "@/components/ui/LogoMarca";
import { site } from "@/content/site";

export function Cabecalho() {
  return (
    <header className="relative z-10 mx-auto flex h-28 max-w-6xl items-center justify-between gap-4 px-4 md:h-36">
      <LogoMarca />
      <div className="flex items-center gap-8">
        <nav aria-label="Seções da página" className="hidden md:block">
          <ul className="flex gap-8">
            {site.navegacao.map(({ rotulo, url }) => (
              <li key={url}>
                <a href={url} className="underline-offset-2 hover:underline">
                  {rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <BotaoChamada href={site.whatsapp.url} variante="escuro">
            {site.whatsapp.chamadaCurta}
          </BotaoChamada>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-pilula hover:bg-tinta hover:text-superficie"
          >
            <IconeInstagram className="size-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
