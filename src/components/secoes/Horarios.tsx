import { Secao } from "@/components/ui/Secao";
import { site } from "@/content/site";

export function Horarios() {
  return (
    <Secao id="horarios" titulo="Horários" fundo="cenoura">
      <dl className="flex flex-col gap-4">
        {site.horarios.map((turno) => (
          <div key={turno.nome}>
            <dt className="chamada">{turno.nome}</dt>
            <dd>{turno.quando}</dd>
          </div>
        ))}
      </dl>
    </Secao>
  );
}
