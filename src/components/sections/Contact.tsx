import { CtaButton } from "@/components/ui/CtaButton";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function Contact() {
  const { address, whatsapp, instagram } = site;

  return (
    <Section id="contact" title="Endereço e contato">
      <div>
        <address className="text-balance not-italic">{address.text}</address>
        <ExternalLink href={address.map.url}>{address.map.label}</ExternalLink>
      </div>
      <div className="flex flex-col items-start gap-2">
        <CtaButton href={whatsapp.url}>{whatsapp.cta}</CtaButton>
        <p>{whatsapp.number}</p>
      </div>
      <p className="flex items-center gap-2">
        <InstagramIcon className="size-5 shrink-0 text-leaf-green" />
        <span className="sr-only">Instagram: </span>
        <ExternalLink href={instagram.url}>{instagram.label}</ExternalLink>
      </p>
    </Section>
  );
}
