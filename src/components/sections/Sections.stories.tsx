import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Contact } from "./Contact";
import { DishGallery } from "./DishGallery";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { History } from "./History";
import { Hours } from "./Hours";

const meta = {
  title: "Sections",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderSection: Story = {
  name: "Header",
  parameters: { layout: "fullscreen" },
  render: () => <Header />,
};

export const HeroSection: Story = {
  name: "Hero",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div className="relative isolate">
      <Hero />
    </div>
  ),
};

export const ContactSection: Story = {
  name: "Contact",
  render: () => <Contact />,
};

export const HoursSection: Story = {
  name: "Hours",
  render: () => <Hours />,
};

export const DishGallerySection: Story = {
  name: "Dish gallery",
  render: () => <DishGallery />,
};

export const HistorySection: Story = {
  name: "History",
  render: () => <History />,
};

export const FooterSection: Story = {
  name: "Footer",
  parameters: { layout: "fullscreen" },
  render: () => <Footer />,
};
