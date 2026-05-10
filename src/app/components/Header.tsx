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
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) { // Only hide after some scrolling
        if (currentScrollY > lastScrollY) {
          setIsHidden(true); // Scrolling down
        } else {
          setIsHidden(false); // Scrolling up
        }
      } else {
        setIsHidden(false); // At the top
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${isHidden ? styles.headerHidden : ''}`}>
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
          <Link href="/#join" className="btn-primary">{t.join}</Link>
        </nav>
      </div>
    </header>
  );
}
