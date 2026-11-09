import { ExternalLink } from "@/components/ui/ExternalLink";
import { TileStrip } from "@/components/ui/TileStrip";
import { site } from "@/content/site";

export function Footer() {
  const { article, development } = site.credits;

  return (
    <footer>
      <div className="caption mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-8">
        <p>
          História baseada na matéria “
          {article.url ? (
            <ExternalLink href={article.url}>{article.title}</ExternalLink>
          ) : (
            article.title
          )}
          ”, de {article.author}
          {article.outlet ? ` (${article.outlet})` : ""}.
        </p>
        <p>Desenvolvimento do site: {development}.</p>
      </div>
      <TileStrip />
    </footer>
  );
}
