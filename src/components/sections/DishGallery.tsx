import Image from "next/image";
import { site } from "@/content/site";

/** Untitled photo strip: on mobile the first photo spans the full width and the other two share a row. */
export function DishGallery() {
  return (
    <section
      aria-label="Fotos de pratos"
      className="grid grid-cols-2 gap-4 md:grid-cols-3"
    >
      {site.dishes.map(({ src, alt }, index) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          width={1600}
          height={1600}
          sizes={
            index === 0
              ? "(min-width: 1152px) 368px, (min-width: 768px) 33vw, 100vw"
              : "(min-width: 1152px) 368px, (min-width: 768px) 33vw, 50vw"
          }
          className={`h-auto w-full rounded-small ${index === 0 ? "col-span-2 md:col-span-1" : ""}`}
        />
      ))}
    </section>
  );
}
