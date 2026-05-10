'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

import { useState, useEffect } from 'react';

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* Decorative Symbols for Header Background */}
      <div className={styles.headerDecor}>
        {/* Delta */}
        <div className={styles.decorSymbol}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4l-9 16h18L12 4z" />
          </svg>
        </div>
        {/* Integral */}
        <div className={styles.decorSymbol}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 19c2 0 3-1 3-3V8c0-2-1-3-3-3m10 0c-2 0-3 1-3 3v8c0 2 1 3 3 3" />
          </svg>
        </div>
        {/* Pi */}
        <div className={styles.decorSymbol}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7h16M7 7v10M17 7v10" /><path d="M17 17c0-2 2-2 2-2" />
          </svg>
        </div>
        {/* Theta */}
        <div className={styles.decorSymbol}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="12" rx="6" ry="8" /><path d="M6 12h12" />
          </svg>
        </div>
      </div>

      <div className={`${styles.containerWide} ${styles.headerContent}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Avin Math Tutoring Logo"
            width={120}
            height={40}
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t.about}</Link>
          <Link href="/#how-it-works" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t.howItWorks}</Link>
          <div className={styles.switcherWrapper}>
            <LanguageSwitcher />
          </div>
          <Link href="/#join" className="btn-primary" onClick={() => setIsMenuOpen(false)}>
            {t.join}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
