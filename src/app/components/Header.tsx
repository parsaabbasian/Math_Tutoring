'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 100 100">
              <path d="M50 15 L85 85 L70 85 L60 62 L40 62 L30 85 L15 85 Z" fill="currentColor" />
              <path d="M35 55 C 20 55, 20 75, 35 75 C 50 75, 50 55, 65 55 C 80 55, 80 75, 65 75 C 50 75, 50 55, 35 55" 
                    fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>
          <span className={styles.logoText}>Avin <span className={styles.logoAccent}>Math Tutoring</span></span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/#about" className={styles.navLink}>{t.about}</Link>
          <Link href="/#how-it-works" className={styles.navLink}>{t.howItWorks}</Link>
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href="/#join" className="btn-primary">{t.join}</Link>
        </nav>
      </div>
    </header>
  );
}
