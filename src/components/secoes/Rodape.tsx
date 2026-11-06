import { site } from "@/content/site";

export function Rodape() {
  const { materia, desenvolvimento } = site.creditos;

  return (
    <footer className="mx-auto max-w-2xl space-y-1 px-4 pb-8 text-sm">
      <p>
        História baseada na matéria “
        {materia.url ? (
          <a
            href={materia.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {materia.titulo}
          </a>
        ) : (
          materia.titulo
        )}
        ”, de {materia.autora}
        {materia.veiculo ? ` (${materia.veiculo})` : ""}.
      </p>
      <p>Desenvolvimento do site: {desenvolvimento}.</p>
    </footer>
  );
}
