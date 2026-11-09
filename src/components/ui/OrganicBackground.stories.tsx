import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { OrganicBackground } from "./OrganicBackground";

const meta = {
  title: "Components/OrganicBackground",
  component: OrganicBackground,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="relative isolate h-[620px] overflow-hidden">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OrganicBackground>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
