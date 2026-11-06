import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LogoMarca } from "./LogoMarca";

const meta = {
  title: "Componentes/LogoMarca",
  component: LogoMarca,
  tags: ["autodocs"],
} satisfies Meta<typeof LogoMarca>;

export default meta;

export const Provisorio: StoryObj<typeof meta> = {};
