import { FaixaLadrilho } from "@/components/ui/FaixaLadrilho";
import { LinkExterno } from "@/components/ui/LinkExterno";
import { site } from "@/content/site";

export function Rodape() {
  const { materia, desenvolvimento } = site.creditos;

  return (
    <footer>
      <div className="legenda mx-auto flex max-w-5xl flex-col gap-2 px-4 pb-8">
        <p>
          História baseada na matéria “
          {materia.url ? (
            <LinkExterno href={materia.url}>{materia.titulo}</LinkExterno>
          ) : (
            materia.titulo
          )}
          ”, de {materia.autora}
          {materia.veiculo ? ` (${materia.veiculo})` : ""}.
        </p>
        <p>Desenvolvimento do site: {desenvolvimento}.</p>
      </div>
      <FaixaLadrilho />
    </footer>
  );
}
