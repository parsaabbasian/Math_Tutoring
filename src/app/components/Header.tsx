'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import styles from './Header.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language].nav;

  return (
    <header className={styles.header}>
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
