import type { ReactNode } from "react";

type BotaoChamadaProps = { href: string; children: ReactNode };

/** A ação principal da tela. Use uma por tela. */
export function BotaoChamada({ href, children }: BotaoChamadaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="chamada inline-flex items-center justify-center rounded-pilula bg-vermelho-beterraba px-4 py-4 md:px-8 text-center text-superficie"
    >
      {children}
    </a>
  );
}
