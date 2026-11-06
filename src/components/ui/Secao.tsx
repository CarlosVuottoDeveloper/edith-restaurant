import type { ReactNode } from "react";

const FUNDOS = {
  plano: "",
  cenoura: "h-full rounded-pequeno bg-laranja-cenoura p-4 md:p-8",
  contorno: "h-full rounded-pequeno border-2 border-azul-panela p-4 md:p-8",
};

type SecaoProps = {
  id: string;
  titulo: string;
  fundo?: keyof typeof FUNDOS;
  children: ReactNode;
};

export function Secao({ id, titulo, fundo = "plano", children }: SecaoProps) {
  return (
    <section id={id} className={`flex flex-col gap-4 ${FUNDOS[fundo]}`}>
      <h2 className="titulo-secao">{titulo}</h2>
      {children}
    </section>
  );
}
