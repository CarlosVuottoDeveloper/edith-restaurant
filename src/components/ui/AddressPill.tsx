import { CtaButton } from "./CtaButton";

type AddressPillProps = {
  address: string;
  mapLabel: string;
  mapUrl: string;
};

/** The address in plain sight in the hero, with a direct path to the map. */
export function AddressPill({ address, mapLabel, mapUrl }: AddressPillProps) {
  return (
    <div className="flex flex-col gap-2 rounded-large bg-surface p-2 shadow-card lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:rounded-pill">
      <address className="px-4 py-2 text-balance not-italic lg:py-0">
        {address}
      </address>
      <div className="flex shrink-0 flex-col lg:block">
        <CtaButton href={mapUrl} variant="dark">
          {mapLabel}
        </CtaButton>
      </div>
    </div>
  );
}
