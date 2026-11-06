import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FundoOrganico } from "./FundoOrganico";

const meta = {
  title: "Componentes/FundoOrganico",
  component: FundoOrganico,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="relative isolate h-[620px] overflow-hidden">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FundoOrganico>;

export default meta;

export const Padrao: StoryObj<typeof meta> = {};
