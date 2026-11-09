import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StorefrontPhoto } from "./StorefrontPhoto";

const meta = {
  title: "Components/StorefrontPhoto",
  component: StorefrontPhoto,
  tags: ["autodocs"],
} satisfies Meta<typeof StorefrontPhoto>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
