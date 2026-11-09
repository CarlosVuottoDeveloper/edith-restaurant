import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";
import { Quote } from "./Quote";

const meta = {
  title: "Components/Quote",
  component: Quote,
  tags: ["autodocs"],
  args: { quote: site.quotes[0] },
} satisfies Meta<typeof Quote>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
