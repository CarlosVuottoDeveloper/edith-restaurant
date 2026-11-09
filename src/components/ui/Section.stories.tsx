import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";
import { Section } from "./Section";

const meta = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  args: {
    id: "example",
    title: "Horários",
    children: <p>{site.hours[0].when}</p>,
  },
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Plain: Story = { args: { background: "plain" } };

export const Carrot: Story = { args: { background: "carrot" } };
