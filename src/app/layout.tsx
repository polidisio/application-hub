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
    default: "ApplicationHub",
    template: "%s | ApplicationHub",
  },
  description: "Apps iOS, Mac, juegos y desarrollos: fichas, manuales y políticas de privacidad",
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
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.dataset.theme="light"}catch(e){}` }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
