import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "./hooks/useTranslation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ApplicationHub - Mis Aplicaciones",
    template: "%s | ApplicationHub",
  },
  description: "Portfolio de mis aplicaciones iOS, Mac, juegos y desarrollos",
  icons: {
    icon: "/ApplicationHub.png",
    apple: "/ApplicationHub.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
