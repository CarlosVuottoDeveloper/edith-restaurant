import { Quote } from "@/components/ui/Quote";
import { Section } from "@/components/ui/Section";
import { StorefrontPhoto } from "@/components/ui/StorefrontPhoto";
import { site } from "@/content/site";

export function History() {
  return (
    <Section id="history" title="História">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          {site.history.map((paragraph) => (
            <p key={paragraph} className="max-w-prose">
              {paragraph}
            </p>
          ))}
        </div>
        <StorefrontPhoto />
      </div>
      <div className="grid gap-8 pt-4 md:grid-cols-2">
        {site.quotes.map((quote) => (
          <Quote key={quote.attribution} quote={quote} />
        ))}
      </div>
    </Section>
  );
}
