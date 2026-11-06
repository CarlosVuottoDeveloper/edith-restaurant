import { Abertura } from "@/components/secoes/Abertura";
import { Contato } from "@/components/secoes/Contato";
import { Historia } from "@/components/secoes/Historia";
import { Horarios } from "@/components/secoes/Horarios";
import { Rodape } from "@/components/secoes/Rodape";

export default function Page() {
  return (
    <>
      <main className="mx-auto max-w-2xl space-y-10 px-4 py-8">
        <Abertura />
        <Historia />
        <Horarios />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
