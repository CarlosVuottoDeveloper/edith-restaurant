import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TileStrip } from "./TileStrip";

const meta = {
  title: "Components/TileStrip",
  component: TileStrip,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TileStrip>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
