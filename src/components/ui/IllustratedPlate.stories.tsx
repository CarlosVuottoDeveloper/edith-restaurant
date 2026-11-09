import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IllustratedPlate } from "./IllustratedPlate";

const meta = {
  title: "Components/IllustratedPlate",
  component: IllustratedPlate,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-xl bg-carrot-orange p-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IllustratedPlate>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
