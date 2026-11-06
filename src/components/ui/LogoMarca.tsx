import Image from "next/image";

/** Logo provisório, feito de captura de tela: fica pequeno no cabeçalho até chegar o original. */
export function LogoMarca() {
  return (
    <Image
      src="/mistura-sabores-logo-provisorio.png"
      alt="Logo Mistura & Sabores: uma tigela de legumes e uma beterraba sobre uma bancada de azulejos"
      width={958}
      height={608}
      preload
      sizes="(min-width: 768px) 192px, 144px"
      className="h-auto w-36 md:w-48"
    />
  );
}
