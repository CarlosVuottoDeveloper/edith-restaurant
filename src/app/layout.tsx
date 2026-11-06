import type { Metadata } from "next";
import { site } from "@/content/site";
import { classesFontes } from "./fontes";
import "./globals.css";

export const metadata: Metadata = {
  title: site.nome,
  description: site.descricao,
  robots: { index: site.indexavel, follow: site.indexavel },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={classesFontes.join(" ")}>
      <body className="corpo">{children}</body>
    </html>
  );
}
