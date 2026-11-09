import { AddressPill } from "@/components/ui/AddressPill";
import { IllustratedPlate } from "@/components/ui/IllustratedPlate";
import { site } from "@/content/site";

export function Hero() {
  const { text, map } = site.address;

  return (
    <section
      id="hero"
      className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 md:grid-cols-2 md:pb-16"
    >
      <div className="flex flex-col gap-4">
        <p className="tagline text-brand-green">{site.tagline}</p>
        <h1 className="page-title">{site.name}</h1>
        <p className="max-w-prose">{site.intro}</p>
        <div className="pt-4">
          <AddressPill address={text} mapLabel={map.label} mapUrl={map.url} />
        </div>
      </div>
      {/* On mobile the color blob follows the plate; from md up, OrganicBackground paints it. */}
      <div className="relative -mx-4 px-8 py-16 md:mx-0 md:p-0">
        <svg
          viewBox="0 0 360 400"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full fill-carrot-orange md:hidden"
        >
          <path d="M0 40 C90 -10 170 30 240 26 C300 22 340 6 360 0 L360 340 C270 400 190 360 120 372 C70 380 30 392 0 400 Z" />
        </svg>
        <IllustratedPlate />
      </div>
    </section>
  );
}
