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

const title = "Reis e Borges Advocacia | Araxá, MG";
const description = "Direito Trabalhista e Cível. Advocacia em Araxá, Minas Gerais, com atuação em Araxá e região. Fale com nossa equipe pelo WhatsApp.";

export const metadata: Metadata = {
  applicationName: "Reis e Borges Advocacia",
  title, description,
  keywords: ["Reis e Borges Advocacia", "advocacia em Araxá", "Direito Trabalhista", "Direito Cível", "advogado em Araxá"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "pt_BR", title, description, siteName: "Reis e Borges Advocacia" },
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
