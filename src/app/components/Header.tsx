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
        <span className={styles.decorSymbol}>∑</span>
        <span className={styles.decorSymbol}>√</span>
        <span className={styles.decorSymbol}>x</span>
        <span className={styles.decorSymbol}>∞</span>
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
          <Link href="/#join" className="btn-primary" onClick={() => setIsMenuOpen(false)}>{t.join}</Link>
        </nav>
      </div>
    </header>
  );
}
