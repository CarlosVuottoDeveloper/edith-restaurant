import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IconeInstagram } from "./IconeInstagram";

const meta = {
  title: "Componentes/IconeInstagram",
  component: IconeInstagram,
  tags: ["autodocs"],
  args: { className: "size-6" },
} satisfies Meta<typeof IconeInstagram>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};

export const CorDoLink: Story = {
  args: { className: "size-5 text-verde-folha" },
};
