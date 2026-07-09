// Deployment Trigger: 2026-05-10
import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Inter, Vazirmatn } from "next/font/google";

import { LocationProvider } from "./context/LocationContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ModalProvider } from "./context/ModalContext";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Avin Math Tutoring",
  description: "Personalized math tutoring by Avin Mousavi, tailored to the Canadian curriculum.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

import MathBackground from "./components/MathBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${vazir.variable}`}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <LocationProvider>
          <LanguageProvider>
            <ModalProvider>
              <MathBackground />
              <main style={{ position: 'relative', zIndex: 1 }}>
                {children}
              </main>
            </ModalProvider>
          </LanguageProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
