import { Abertura } from "@/components/secoes/Abertura";
import { Cabecalho } from "@/components/secoes/Cabecalho";
import { Contato } from "@/components/secoes/Contato";
import { Historia } from "@/components/secoes/Historia";
import { Horarios } from "@/components/secoes/Horarios";
import { Rodape } from "@/components/secoes/Rodape";
import { FundoOrganico } from "@/components/ui/FundoOrganico";

export default function Page() {
  return (
    <>
      <Cabecalho />
      <main>
        {/* Sobe a altura do cabeçalho para o fundo começar no topo da tela. */}
        <div className="relative isolate -mt-28 overflow-hidden pt-28 md:-mt-36 md:pt-36">
          <FundoOrganico />
          <Abertura />
          <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 md:pt-0">
            <div className="grid gap-8 rounded-grande bg-superficie p-4 shadow-cartao md:grid-cols-5 md:p-8">
              <div className="md:col-span-3">
                <Contato />
              </div>
              <div className="md:col-span-2">
                <Horarios />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Historia />
        </div>
      </main>
      <Rodape />
    </>
  );
}
