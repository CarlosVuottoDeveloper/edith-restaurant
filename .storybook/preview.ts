import type { Preview } from "@storybook/nextjs-vite";
import { classesFontes } from "../src/app/fontes";
import "../src/app/globals.css";

// Mesmo ponto de partida do layout do site: as variáveis de fonte precisam estar no <html>.
document.documentElement.lang = "pt-BR";
document.documentElement.classList.add(...classesFontes);
document.body.classList.add("corpo");

const preview: Preview = {
  parameters: {
    layout: "padded",
    a11y: { test: "todo" },
    viewport: {
      options: {
        celular: {
          name: "Celular (360 px)",
          styles: { width: "360px", height: "740px" },
          type: "mobile",
        },
        desktop: {
          name: "Desktop (1280 px)",
          styles: { width: "1280px", height: "800px" },
          type: "desktop",
        },
      },
    },
    options: {
      storySort: {
        order: ["Fundamentos", "Componentes", "Seções", "Página"],
      },
    },
  },
};

export default preview;
