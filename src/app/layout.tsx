import type { Metadata } from "next";
import { site } from "@/content/site";
import { fontClasses } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  robots: { index: site.indexable, follow: site.indexable },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={fontClasses.join(" ")}>
      <body className="body-copy">{children}</body>
    </html>
  );
}
