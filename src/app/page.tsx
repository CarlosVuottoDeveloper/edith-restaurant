import { Abertura } from "@/components/secoes/Abertura";
import { Contato } from "@/components/secoes/Contato";
import { Historia } from "@/components/secoes/Historia";
import { Horarios } from "@/components/secoes/Horarios";
import { Rodape } from "@/components/secoes/Rodape";
import { FaixaLadrilho } from "@/components/ui/FaixaLadrilho";
import { FotoReservada } from "@/components/ui/FotoReservada";

export default function Page() {
  return (
    <>
      <FaixaLadrilho />
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-8 md:py-16">
        <Abertura />
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <Contato />
          </div>
          <div className="md:col-span-2">
            <Horarios />
          </div>
        </div>
        <FotoReservada rotulo="a cozinha da cooperativa" proporcao="21 / 9" />
        <Historia />
      </main>
      <Rodape />
    </>
  );
}
