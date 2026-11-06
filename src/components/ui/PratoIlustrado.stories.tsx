import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PratoIlustrado } from "./PratoIlustrado";

const meta = {
  title: "Componentes/PratoIlustrado",
  component: PratoIlustrado,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-xl bg-laranja-cenoura p-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PratoIlustrado>;

export default meta;

export const Padrao: StoryObj<typeof meta> = {};
