import type { Quote as QuoteContent } from "@/content/site";

type QuoteProps = { quote: QuoteContent };

export function Quote({ quote }: QuoteProps) {
  return (
    <figure className="flex flex-col gap-2 border-t-2 border-pot-blue pt-4">
      <blockquote>“{quote.text}”</blockquote>
      <figcaption className="caption">{quote.attribution}</figcaption>
    </figure>
  );
}
