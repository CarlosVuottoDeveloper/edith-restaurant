import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";
import { CapsulaEndereco } from "./CapsulaEndereco";

const meta = {
  title: "Componentes/CapsulaEndereco",
  component: CapsulaEndereco,
  tags: ["autodocs"],
  args: {
    endereco: site.endereco.texto,
    rotuloMapa: site.endereco.mapa.rotulo,
    urlMapa: site.endereco.mapa.url,
  },
} satisfies Meta<typeof CapsulaEndereco>;

export default meta;

export const Padrao: StoryObj<typeof meta> = {};
