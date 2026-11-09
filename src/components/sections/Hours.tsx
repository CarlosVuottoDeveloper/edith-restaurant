import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function Hours() {
  return (
    <Section id="hours" title="Horários" background="carrot">
      <dl className="flex flex-col gap-4">
        {site.hours.map((shift) => (
          <div key={shift.name}>
            <dt className="label-copy">{shift.name}</dt>
            <dd>{shift.when}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
