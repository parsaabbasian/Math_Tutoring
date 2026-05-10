'use client';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].footer;
  const nav = translations[language].nav;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <Image
            src="/images/logo.png"
            alt="Avin Math Tutoring Logo"
            width={120}
            height={40}
            className={styles.logoImage}
          />
          <p className={styles.tagline}>{t.tagline}</p>
        </div>
        <div className={styles.links}>
          <h4 className={styles.linksTitle}>{t.quickLinks}</h4>
          <a href="/#how-it-works" className={styles.link}>{nav.howItWorks}</a>
          <a href="/#about" className={styles.link}>{nav.about}</a>
          <a href="/#join" className={styles.link}>{nav.join}</a>
        </div>
        <div className={styles.socials}>
          <h4 className={styles.linksTitle}>{t.connect}</h4>
          {/* ── Update these URLs with Avin's real social profiles ── */}
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <a href="mailto:avin.math@gmail.com" className={styles.link}>Email</a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p style={{ textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} Avin Mousavi. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
