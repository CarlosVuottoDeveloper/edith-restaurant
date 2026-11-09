import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";
import { AddressPill } from "./AddressPill";

const meta = {
  title: "Components/AddressPill",
  component: AddressPill,
  tags: ["autodocs"],
  args: {
    address: site.address.text,
    mapLabel: site.address.map.label,
    mapUrl: site.address.map.url,
  },
} satisfies Meta<typeof AddressPill>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
