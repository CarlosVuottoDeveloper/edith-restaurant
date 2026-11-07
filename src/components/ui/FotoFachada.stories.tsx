import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FotoFachada } from "./FotoFachada";

const meta = {
  title: "Componentes/FotoFachada",
  component: FotoFachada,
  tags: ["autodocs"],
} satisfies Meta<typeof FotoFachada>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};
