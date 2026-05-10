'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

import { useState } from 'react';

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Decorative Symbols for Header Background */}
      <div className={styles.headerDecor}>
        {/* Sigma */}
        <div className={styles.decorSymbol}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6H6l7 6-7 6h12" /><path d="M6 6v1M6 17v1" />
          </svg>
        </div>
        {/* Square Root */}
        <div className={styles.decorSymbol}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 14.5h2.5l3 7L15.5 3H21" />
          </svg>
        </div>
        {/* Algebra x */}
        <div className={styles.decorSymbol}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 8c0 0 3 4 3 8 0 4-3 4-3 4M16 8c0 0-3 4-3 8 0 4 3 4 3 4" />
          </svg>
        </div>
        {/* Infinity */}
        <div className={styles.decorSymbol}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 9c-3 0-4 3-4 3s1 3 4 3 5-3 5-3 2-3 5-3 4 3 4 3-1 3-4 3-5-3-5-3-2-3-5-3z" />
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
