import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Page from "./page";

const meta = {
  title: "Página",
  component: Page,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  globals: { viewport: { value: "desktop" } },
};

export const Celular: Story = {
  globals: { viewport: { value: "celular" } },
};
