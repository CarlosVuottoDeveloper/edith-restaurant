import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaixaLadrilho } from "./FaixaLadrilho";

const meta = {
  title: "Componentes/FaixaLadrilho",
  component: FaixaLadrilho,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FaixaLadrilho>;

export default meta;

export const Padrao: StoryObj<typeof meta> = {};
