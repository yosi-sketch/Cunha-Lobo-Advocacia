import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = "Cunha & Lobo Advocacia | Conselheiro Lafaiete, MG";
const description = "Cunha & Lobo Advocacia. Orientação em Direito de Trânsito, suspensão de CNH, multas e infrações. Atendimento digital em todo o Brasil e sede em Conselheiro Lafaiete, MG.";

export const metadata: Metadata = {
  applicationName: "Cunha & Lobo Advocacia",
  title, description,
  keywords: ["Cunha & Lobo Advocacia", "advocacia em Conselheiro Lafaiete", "Direito de Trânsito", "suspensão de CNH", "recursos de multas", "advocacia digital", "advogado em Conselheiro Lafaiete"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "pt_BR", title, description, siteName: "Cunha & Lobo Advocacia" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable + " scroll-smooth"}>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
