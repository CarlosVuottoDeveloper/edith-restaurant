import type { ReactNode } from "react";

const BACKGROUNDS = {
  plain: "",
  carrot: "h-full rounded-large bg-carrot-orange p-4 md:p-8",
};

type SectionProps = {
  id: string;
  title: string;
  background?: keyof typeof BACKGROUNDS;
  children: ReactNode;
};

export function Section({
  id,
  title,
  background = "plain",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`flex flex-col gap-4 ${BACKGROUNDS[background]}`}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
