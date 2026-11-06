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

/** Classes que definem as variáveis de fonte. Ficam no <html>, no site e no Storybook. */
export const classesFontes = [
  amatic.variable,
  reenie.variable,
  sourceSans.variable,
];
