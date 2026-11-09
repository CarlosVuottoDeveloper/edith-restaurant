import type { ReactNode } from "react";

const VARIANTS = {
  primary: "bg-beet-red px-4 py-4 md:px-8",
  dark: "min-h-11 bg-ink px-4 py-2 md:px-8",
};

type CtaButtonProps = {
  href: string;
  variant?: keyof typeof VARIANTS;
  children: ReactNode;
};

/** `primary` is the main action on the screen: use only one. `dark` is for supporting actions. */
export function CtaButton({
  href,
  variant = "primary",
  children,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`label-copy inline-flex items-center justify-center rounded-pill text-center text-surface ${VARIANTS[variant]}`}
    >
      {children}
    </a>
  );
}
