import Image from "next/image";

/** Logo provisório, feito de captura de tela: limitado a 480 px até chegar o original. */
export function LogoMarca() {
  return (
    <Image
      src="/mistura-sabores-logo-provisorio.png"
      alt="Logo Mistura & Sabores: uma tigela de legumes e uma beterraba sobre uma bancada de azulejos"
      width={958}
      height={608}
      preload
      sizes="(min-width: 768px) 480px, 100vw"
      className="h-auto w-full max-w-120"
    />
  );
}
