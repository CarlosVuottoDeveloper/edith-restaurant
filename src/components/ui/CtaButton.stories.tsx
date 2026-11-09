import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";
import { CtaButton } from "./CtaButton";

const meta = {
  title: "Components/CtaButton",
  component: CtaButton,
  tags: ["autodocs"],
  args: {
    href: site.whatsapp.url,
    children: site.whatsapp.cta,
  },
} satisfies Meta<typeof CtaButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = {
  args: {
    variant: "dark",
    href: site.address.map.url,
    children: site.address.map.label,
  },
};
