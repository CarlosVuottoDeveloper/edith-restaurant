import Image from "next/image";

/** Temporary logo, made from a screenshot: it stays small in the header until the original arrives. */
export function BrandLogo() {
  return (
    <Image
      src="/brand-logo-temporary.png"
      alt="Logo Mistura & Sabores: uma tigela de legumes e uma beterraba sobre uma bancada de azulejos"
      width={958}
      height={608}
      preload
      sizes="(min-width: 768px) 192px, 144px"
      className="h-auto w-36 min-w-0 md:w-48"
    />
  );
}
