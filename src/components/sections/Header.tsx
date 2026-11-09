import { BrandLogo } from "@/components/ui/BrandLogo";
import { CtaButton } from "@/components/ui/CtaButton";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="relative z-10 mx-auto flex h-28 max-w-6xl items-center justify-between gap-4 px-4 md:h-36">
      <BrandLogo />
      <div className="flex items-center gap-8">
        <nav aria-label="Seções da página" className="hidden md:block">
          <ul className="flex gap-8">
            {site.navigation.map(({ label, url }) => (
              <li key={url}>
                <a href={url} className="underline-offset-2 hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <CtaButton href={site.whatsapp.url} variant="dark">
            {site.whatsapp.shortCta}
          </CtaButton>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-pill hover:bg-ink hover:text-surface"
          >
            <InstagramIcon className="size-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
