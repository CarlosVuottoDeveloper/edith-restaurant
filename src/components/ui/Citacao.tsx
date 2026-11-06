import type { Citacao as CitacaoConteudo } from "@/content/site";

type CitacaoProps = { citacao: CitacaoConteudo };

export function Citacao({ citacao }: CitacaoProps) {
  return (
    <figure className="flex flex-col gap-2 border-t-2 border-azul-panela pt-4">
      <blockquote>“{citacao.texto}”</blockquote>
      <figcaption className="legenda">{citacao.autoria}</figcaption>
    </figure>
  );
}
