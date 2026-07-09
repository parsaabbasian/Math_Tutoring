'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from './LocationContext';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { geo, loading } = useLocation();
  const [language, setLanguageState] = useState<Language>('en');
  const [decided, setDecided] = useState(false);

  const applyLanguage = (lang: Language, persist: boolean) => {
    setLanguageState(lang);
    if (persist) localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    if (decided) return;

    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang === 'en' || savedLang === 'fa') {
      // Respect an explicit choice made previously.
      applyLanguage(savedLang, false);
      setDecided(true);
      return;
    }

    // First visit with no saved choice: default by location — Iran → Persian, elsewhere → English.
    // Wait for the shared IP lookup to finish before deciding.
    if (loading) return;
    applyLanguage(geo?.country === 'IR' ? 'fa' : 'en', true);
    setDecided(true);
  }, [decided, loading, geo]);

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
