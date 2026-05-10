'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

const Logo = () => (
  <div className={styles.logoWrapper}>
    <svg width="40" height="40" viewBox="0 0 100 100" className={styles.logoIcon}>
      {/* Stylized A from the logo */}
      <path d="M50 10 L85 90 L70 90 L60 65 L40 65 L30 90 L15 90 Z" fill="currentColor" />
      <path d="M45 50 L55 50 L50 35 Z" fill="white" />
      {/* Ruler edge details */}
      <rect x="52" y="30" width="8" height="2" fill="white" transform="rotate(-68 52 30)" />
      <rect x="55" y="38" width="8" height="2" fill="white" transform="rotate(-68 55 38)" />
      <rect x="58" y="46" width="8" height="2" fill="white" transform="rotate(-68 58 46)" />
      <rect x="61" y="54" width="8" height="2" fill="white" transform="rotate(-68 61 54)" />
      {/* Infinity loop part */}
      <path d="M35 55 C 20 55, 20 75, 35 75 C 50 75, 50 55, 65 55 C 80 55, 80 75, 65 75 C 50 75, 50 55, 35 55" 
            fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
    </svg>
    <div className={styles.logoText}>
      <span className={styles.brandName}>vin Math Tutoring</span>
    </div>
  </div>
);

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language].nav;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo}>
          <Logo />
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
