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

const title = "Macedo & Reis Advocacia | Passos, MG";
const description = "Direito Trabalhista, Família e Consumidor. Advocacia em Passos, Minas Gerais, com atendimento em todo o Brasil. Fale com nossa equipe pelo WhatsApp.";

export const metadata: Metadata = {
  applicationName: "Macedo & Reis Advocacia",
  title, description,
  keywords: ["Macedo & Reis Advocacia", "advocacia em Passos", "Direito Trabalhista", "Direito de Família", "Direito do Consumidor"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "pt_BR", title, description, siteName: "Macedo & Reis Advocacia" },
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
