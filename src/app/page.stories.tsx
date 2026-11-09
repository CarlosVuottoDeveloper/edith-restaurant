import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Page from "./page";

const meta = {
  title: "Page",
  component: Page,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  globals: { viewport: { value: "desktop" } },
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile" } },
};
