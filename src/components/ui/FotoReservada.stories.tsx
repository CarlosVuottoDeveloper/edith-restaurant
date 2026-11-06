import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FotoReservada } from "./FotoReservada";

const meta = {
  title: "Componentes/FotoReservada",
  component: FotoReservada,
  tags: ["autodocs"],
} satisfies Meta<typeof FotoReservada>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Larga: Story = {
  args: { rotulo: "a cozinha da cooperativa", proporcao: "21 / 9" },
};

export const Media: Story = {
  args: { rotulo: "as pessoas da cooperativa", proporcao: "4 / 3" },
};
