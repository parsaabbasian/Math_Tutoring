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

const SITE_URL = "https://avinmath.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Avin Math Tutoring",
    template: "%s | Avin Math Tutoring",
  },
  description:
    "Personalized 1-on-1 math tutoring for elementary and high school students by Avin Mousavi, a York University engineering student. Bilingual English & Persian (Farsi). Online worldwide, in-person in North York, Vaughan, Richmond Hill & Scarborough.",
  keywords: [
    "math tutor Toronto",
    "math tutoring North York",
    "math tutor Vaughan",
    "math tutor Scarborough",
    "math tutor Richmond Hill",
    "Persian math tutor",
    "Farsi math tutor",
    "bilingual math tutor",
    "OSSD math help",
    "online math tutoring",
    "high school math tutor",
    "elementary math tutor",
    "معلم ریاضی",
    "تدریس خصوصی ریاضی",
  ],
  authors: [{ name: "Avin Mousavi" }],
  creator: "Avin Mousavi",
  alternates: {
    canonical: "/",
    languages: {
      "en-CA": "/",
      "fa-IR": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Avin Math Tutoring",
    title: "Avin Math Tutoring",
    description:
      "Personalized bilingual (English & Persian) math tutoring for elementary and high school students. Online worldwide, in-person in North York, Vaughan, Richmond Hill & Scarborough.",
    url: "/",
    locale: "en_CA",
    alternateLocale: ["fa_IR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avin Math Tutoring",
    description:
      "Personalized bilingual math tutoring for elementary and high school students. Online & in-person (North York, Vaughan, Richmond Hill & Scarborough).",
  },
  robots: {
    index: true,
    follow: true,
  },
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
              <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
              </div>
            </ModalProvider>
          </LanguageProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
