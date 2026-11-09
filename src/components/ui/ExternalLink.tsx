import type { ReactNode } from "react";

type ExternalLinkProps = { href: string; children: ReactNode };

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-leaf-green underline underline-offset-2"
    >
      {children}
    </a>
  );
}
