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
  applicationName: "Vinícius Bengtson Advocacia",
  title: "Vinícius Bengtson Advocacia | Direito Penal em Poços de Caldas",
  description:
    "Atuação em Direito Penal e Processo Penal, com sede em Poços de Caldas e atendimento remoto em todo o Brasil.",
  keywords: [
    "Vinícius Bengtson Advocacia",
    "advogado criminal em Poços de Caldas",
    "advocacia criminal em Poços de Caldas",
    "direito penal",
    "processo penal",
    "audiência de custódia",
    "execução penal",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Vinícius Bengtson Advocacia | Direito Penal",
    description:
      "Atuação em Direito Penal e Processo Penal. Sede em Poços de Caldas, com atendimento remoto em todo o Brasil.",
    siteName: "Vinícius Bengtson Advocacia",
  },
  twitter: {
    card: "summary",
    title: "Vinícius Bengtson Advocacia | Direito Penal",
    description:
      "Atuação em Direito Penal e Processo Penal, com sede em Poços de Caldas e atendimento remoto em todo o Brasil.",
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
