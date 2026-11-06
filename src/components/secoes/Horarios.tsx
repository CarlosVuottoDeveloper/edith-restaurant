import { site } from "@/content/site";

export function Horarios() {
  return (
    <section id="horarios" className="space-y-4">
      <h2 className="text-2xl font-bold">Horários</h2>
      <ul className="space-y-2">
        {site.horarios.map((turno) => (
          <li key={turno.nome}>
            <strong>{turno.nome}:</strong> {turno.quando}
          </li>
        ))}
      </ul>
    </section>
  );
}
