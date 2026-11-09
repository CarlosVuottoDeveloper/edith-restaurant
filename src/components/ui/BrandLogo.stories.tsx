import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BrandLogo } from "./BrandLogo";

const meta = {
  title: "Components/BrandLogo",
  component: BrandLogo,
  tags: ["autodocs"],
} satisfies Meta<typeof BrandLogo>;

export default meta;

export const Temporary: StoryObj<typeof meta> = {};
