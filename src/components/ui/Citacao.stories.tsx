import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";
import { Citacao } from "./Citacao";

const meta = {
  title: "Componentes/Citacao",
  component: Citacao,
  tags: ["autodocs"],
  args: { citacao: site.citacoes[0] },
} satisfies Meta<typeof Citacao>;

export default meta;

export const Padrao: StoryObj<typeof meta> = {};
