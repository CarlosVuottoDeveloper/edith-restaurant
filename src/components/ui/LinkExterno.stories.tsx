import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";
import { LinkExterno } from "./LinkExterno";

const meta = {
  title: "Componentes/LinkExterno",
  component: LinkExterno,
  tags: ["autodocs"],
  args: {
    href: site.endereco.mapa.url,
    children: site.endereco.mapa.rotulo,
  },
} satisfies Meta<typeof LinkExterno>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sozinho: Story = {};

export const DentroDoTexto: Story = {
  args: {
    href: site.instagram.url,
    children: site.instagram.rotulo,
  },
  render: (args) => (
    <p>
      Instagram: <LinkExterno {...args} />
    </p>
  ),
};
