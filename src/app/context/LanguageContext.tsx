'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect the visitor's country via IP. Returns an ISO 3166 alpha-2 code (e.g. "IR"), or null.
async function detectCountry(): Promise<string | null> {
  const sources: Array<() => Promise<string>> = [
    async () => (await (await fetch('https://ipapi.co/country/')).text()).trim(),
    async () => ((await (await fetch('https://ipwho.is/')).json()).country_code as string),
  ];
  for (const get of sources) {
    try {
      const code = await get();
      if (code && /^[A-Za-z]{2}$/.test(code)) return code.toUpperCase();
    } catch {
      // try the next source
    }
  }
  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const applyLanguage = (lang: Language, persist: boolean) => {
    setLanguageState(lang);
    if (persist) localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang === 'en' || savedLang === 'fa') {
      // Respect an explicit choice made previously.
      applyLanguage(savedLang, false);
      return;
    }

    // First visit with no saved choice: default by location — Iran → Persian, elsewhere → English.
    let cancelled = false;
    detectCountry().then((country) => {
      if (cancelled) return;
      applyLanguage(country === 'IR' ? 'fa' : 'en', true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const setLanguage = (lang: Language) => {
    applyLanguage(lang, true);
  };

  const isRTL = language === 'fa';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
