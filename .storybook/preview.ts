import type { Preview } from "@storybook/nextjs-vite";
import { fontClasses } from "../src/app/fonts";
import "../src/app/globals.css";

// Same starting point as the site layout: the font variables must be on <html>.
document.documentElement.lang = "pt-BR";
document.documentElement.classList.add(...fontClasses);
document.body.classList.add("body-copy");

const preview: Preview = {
  parameters: {
    layout: "padded",
    a11y: { test: "todo" },
    viewport: {
      options: {
        mobile: {
          name: "Mobile (360 px)",
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
        order: ["Foundations", "Components", "Sections", "Page"],
      },
    },
  },
};

export default preview;
