import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";
import { ExternalLink } from "./ExternalLink";

const meta = {
  title: "Components/ExternalLink",
  component: ExternalLink,
  tags: ["autodocs"],
  args: {
    href: site.address.map.url,
    children: site.address.map.label,
  },
} satisfies Meta<typeof ExternalLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standalone: Story = {};

export const InlineWithText: Story = {
  args: {
    href: site.instagram.url,
    children: site.instagram.label,
  },
  render: (args) => (
    <p>
      Instagram: <ExternalLink {...args} />
    </p>
  ),
};
