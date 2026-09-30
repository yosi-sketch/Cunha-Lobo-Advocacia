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
  applicationName: "Victor Campos Advocacia",
  title: "Victor Campos Advocacia | Defesa Criminal em Barbacena",
  description:
    "Defesa criminal e assessoria jurídica em Barbacena, com atendimento presencial e on-line, escuta cuidadosa e comunicação clara.",
  keywords: [
    "Victor Campos Advocacia",
    "advogado criminal em Barbacena",
    "defesa criminal em Barbacena",
    "direito penal",
    "processo penal",
    "assessoria jurídica em Barbacena",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Victor Campos Advocacia | Defesa Criminal em Barbacena",
    description:
      "Defesa criminal e assessoria jurídica em Barbacena, com atendimento presencial e on-line.",
    siteName: "Victor Campos Advocacia e Assessoria Jurídica",
  },
  twitter: {
    card: "summary",
    title: "Victor Campos Advocacia | Defesa Criminal em Barbacena",
    description:
      "Defesa criminal e assessoria jurídica em Barbacena, com atendimento presencial e on-line.",
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
