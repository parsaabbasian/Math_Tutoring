import type { Metadata } from "next";
import { Outfit, Inter, Vazirmatn } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";
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
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${inter.variable} ${vazir.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var theme = savedTheme;
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <ThemeProvider>
            <MathBackground />
            <main style={{ position: 'relative', zIndex: 1 }}>
              {children}
            </main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
