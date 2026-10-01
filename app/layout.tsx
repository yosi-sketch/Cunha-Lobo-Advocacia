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

export const metadata: Metadata = {
  applicationName: "Advocacia Elder Martins Advogados Associados",
  title: "Elder Martins Advogados Associados | Alfenas, MG",
  description:
    "Advocacia Elder Martins Advogados Associados, em Alfenas, Minas Gerais. Conheça a equipe e as áreas de atuação do escritório.",
  keywords: [
    "Advocacia Elder Martins",
    "Elder Martins Advogados Associados",
    "advocacia em Alfenas",
    "Direito do Trabalho",
    "Direito Empresarial",
    "Direito de Família",
    "Sucessões",
    "Direito Civil",
    "Direito Previdenciário",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Elder Martins Advogados Associados | Alfenas, MG",
    description:
      "Conheça a equipe e as áreas de atuação da Advocacia Elder Martins, em Alfenas, Minas Gerais.",
    siteName: "Advocacia Elder Martins Advogados Associados",
  },
  twitter: {
    card: "summary",
    title: "Elder Martins Advogados Associados | Alfenas, MG",
    description:
      "Conheça a equipe e as áreas de atuação da Advocacia Elder Martins, em Alfenas, Minas Gerais.",
  },
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
