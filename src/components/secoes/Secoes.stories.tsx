import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Abertura } from "./Abertura";
import { Cabecalho } from "./Cabecalho";
import { Contato } from "./Contato";
import { Historia } from "./Historia";
import { Horarios } from "./Horarios";
import { Rodape } from "./Rodape";

const meta = {
  title: "Seções",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const SecaoCabecalho: Story = {
  name: "Cabeçalho",
  parameters: { layout: "fullscreen" },
  render: () => <Cabecalho />,
};

export const SecaoAbertura: Story = {
  name: "Abertura",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div className="relative isolate">
      <Abertura />
    </div>
  ),
};

export const SecaoContato: Story = {
  name: "Contato",
  render: () => <Contato />,
};

export const SecaoHorarios: Story = {
  name: "Horários",
  render: () => <Horarios />,
};

export const SecaoHistoria: Story = {
  name: "História",
  render: () => <Historia />,
};

export const SecaoRodape: Story = {
  name: "Rodapé",
  parameters: { layout: "fullscreen" },
  render: () => <Rodape />,
};
