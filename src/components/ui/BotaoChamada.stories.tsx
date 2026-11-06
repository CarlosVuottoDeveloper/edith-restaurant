import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";
import { BotaoChamada } from "./BotaoChamada";

const meta = {
  title: "Componentes/BotaoChamada",
  component: BotaoChamada,
  tags: ["autodocs"],
  args: {
    href: site.whatsapp.url,
    children: site.whatsapp.chamada,
  },
} satisfies Meta<typeof BotaoChamada>;

export default meta;

export const WhatsApp: StoryObj<typeof meta> = {};
