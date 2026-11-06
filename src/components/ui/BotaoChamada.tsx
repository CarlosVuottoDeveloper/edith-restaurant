import type { ReactNode } from "react";

const VARIANTES = {
  principal: "bg-vermelho-beterraba px-4 py-4 md:px-8",
  escuro: "min-h-11 bg-tinta px-4 py-2 md:px-8",
};

type BotaoChamadaProps = {
  href: string;
  variante?: keyof typeof VARIANTES;
  children: ReactNode;
};

/** `principal` é a ação principal da tela: use uma só. `escuro` fica para ações de apoio. */
export function BotaoChamada({
  href,
  variante = "principal",
  children,
}: BotaoChamadaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`chamada inline-flex items-center justify-center rounded-pilula text-center text-superficie ${VARIANTES[variante]}`}
    >
      {children}
    </a>
  );
}
