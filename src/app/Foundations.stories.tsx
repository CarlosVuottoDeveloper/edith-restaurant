import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { site } from "@/content/site";

const COLORS = [
  {
    token: "surface",
    className: "bg-surface",
    usage: "Page background and text on the primary call to action.",
  },
  {
    token: "ink",
    className: "bg-ink",
    usage: "Text. Also works on carrot-orange and pot-blue.",
  },
  {
    token: "leaf-green",
    className: "bg-leaf-green",
    usage: "Links and the keyboard focus ring.",
  },
  {
    token: "beet-red",
    className: "bg-beet-red",
    usage: "Only on the primary call to action, with surface text.",
  },
  {
    token: "brand-green",
    className: "bg-brand-green",
    usage: "Text at 24 px or larger, icons and borders.",
  },
  {
    token: "pot-blue",
    className: "bg-pot-blue",
    usage: "Background with ink text, and borders. Never as text on surface.",
  },
  {
    token: "carrot-orange",
    className: "bg-carrot-orange",
    usage: "Background with ink text. Never as text on surface.",
  },
];

// Samples are real site copy, so they stay in Portuguese.
const TEXT_STYLES = [
  {
    className: "page-title",
    usage: "Once per page, on the h1.",
    sample: site.name,
  },
  {
    className: "section-title",
    usage: "On h2 headings.",
    sample: "Endereço e contato",
  },
  {
    className: "tagline text-brand-green",
    usage: "A few words, never below 32 px.",
    sample: site.tagline,
  },
  {
    className: "body-copy",
    usage: "Running text, up to about 65 characters per line.",
    sample: site.address.text,
  },
  {
    className: "label-copy",
    usage: "Buttons, action links and labels.",
    sample: site.whatsapp.cta,
  },
  {
    className: "caption",
    usage: "Attributions, captions and the footer.",
    sample: site.quotes[1].attribution,
  },
];

const SPACING = [
  { className: "w-2", value: "2 (8 px)", usage: "Inside a small group." },
  {
    className: "w-4",
    value: "4 (16 px)",
    usage: "Between paragraphs, and the side margin on mobile.",
  },
  { className: "w-8", value: "8 (32 px)", usage: "Between blocks." },
  { className: "w-16", value: "16 (64 px)", usage: "Between sections." },
];

const RADII = [
  { className: "rounded-none", token: "none", usage: "Unused for now." },
  { className: "rounded-small", token: "small", usage: "Photos and focus ring." },
  {
    className: "rounded-large",
    token: "large",
    usage: "Cards and blocks on the organic background.",
  },
  {
    className: "rounded-pill",
    token: "pill",
    usage: "Call-to-action buttons and the address pill.",
  },
];

// Reads the value published by the CSS, so this page does not repeat the tokens from globals.css.
function tokenValue(variable: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
}

const meta = {
  title: "Foundations",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => (
    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {COLORS.map(({ token, className, usage }) => (
        <li key={token} className="flex flex-col gap-2">
          <div
            className={`h-16 rounded-small border-2 border-ink ${className}`}
          />
          <p className="label-copy">{token}</p>
          <p className="caption">{tokenValue(`--color-${token}`)}</p>
          <p className="caption">{usage}</p>
        </li>
      ))}
    </ul>
  ),
};

export const Typography: Story = {
  render: () => (
    <ul className="flex flex-col gap-8">
      {TEXT_STYLES.map(({ className, usage, sample }) => (
        <li key={className} className="flex flex-col gap-2">
          <p className={className}>{sample}</p>
          <p className="caption">
            {className.split(" ")[0]}: {usage}
          </p>
        </li>
      ))}
    </ul>
  ),
};

export const Spacing: Story = {
  render: () => (
    <ul className="flex flex-col gap-4">
      {SPACING.map(({ className, value, usage }) => (
        <li key={className} className="flex items-center gap-4">
          <div className={`h-8 shrink-0 bg-pot-blue ${className}`} />
          <p>
            <span className="label-copy">{value}.</span> {usage}
          </p>
        </li>
      ))}
    </ul>
  ),
};

export const Radii: Story = {
  render: () => (
    <ul className="flex flex-wrap gap-8">
      {RADII.map(({ className, token, usage }) => (
        <li key={token} className="flex w-48 flex-col gap-2">
          <div className={`h-16 bg-pot-blue ${className}`} />
          <p className="label-copy">{token}</p>
          <p className="caption">{usage}</p>
        </li>
      ))}
    </ul>
  ),
};
