import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";
import { BotaoChamada } from "./BotaoChamada";

const meta = {
  title: "Componentes/BotaoChamada",
  component: BotaoChamada,
  tags: ["autodocs"],
  args: {
    href: site.whatsapp.url,
    children: site.whatsapp.chamada,
  },
} satisfies Meta<typeof BotaoChamada>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Principal: Story = {};

export const Escuro: Story = {
  args: {
    variante: "escuro",
    href: site.endereco.mapa.url,
    children: site.endereco.mapa.rotulo,
  },
};
