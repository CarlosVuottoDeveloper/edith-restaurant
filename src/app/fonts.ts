import { Amatic_SC, Reenie_Beanie, Source_Sans_3 } from "next/font/google";

const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-amatic",
});

const reenie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-reenie",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

/** Classes that define the font variables. They go on <html>, in the site and in Storybook. */
export const fontClasses = [
  amatic.variable,
  reenie.variable,
  sourceSans.variable,
];
