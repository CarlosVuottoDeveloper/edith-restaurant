import Image from "next/image";

export function StorefrontPhoto() {
  return (
    <Image
      src="/storefront.jpg"
      alt="Fachada azul da cooperativa, com a faixa Mistura & Sabores Edith acima da porta de aço aberta"
      width={1188}
      height={654}
      sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
      className="h-auto w-full rounded-small"
    />
  );
}
