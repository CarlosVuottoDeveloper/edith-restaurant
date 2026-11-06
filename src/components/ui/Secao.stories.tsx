import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";
import { Secao } from "./Secao";

const meta = {
  title: "Componentes/Secao",
  component: Secao,
  tags: ["autodocs"],
  args: {
    id: "exemplo",
    titulo: "Horários",
    children: <p>{site.horarios[0].quando}</p>,
  },
} satisfies Meta<typeof Secao>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Plano: Story = { args: { fundo: "plano" } };

export const Cenoura: Story = { args: { fundo: "cenoura" } };

export const Contorno: Story = { args: { fundo: "contorno" } };
