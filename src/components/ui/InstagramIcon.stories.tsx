import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InstagramIcon } from "./InstagramIcon";

const meta = {
  title: "Components/InstagramIcon",
  component: InstagramIcon,
  tags: ["autodocs"],
  args: { className: "size-6" },
} satisfies Meta<typeof InstagramIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LinkColor: Story = {
  args: { className: "size-5 text-leaf-green" },
};
