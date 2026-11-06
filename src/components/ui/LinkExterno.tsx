import type { ReactNode } from "react";

type LinkExternoProps = { href: string; children: ReactNode };

export function LinkExterno({ href, children }: LinkExternoProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-verde-folha underline underline-offset-2"
    >
      {children}
    </a>
  );
}
