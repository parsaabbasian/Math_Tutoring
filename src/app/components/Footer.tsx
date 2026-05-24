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
          <a href="mailto:avin.math@gmail.com" title="Email" className={`${styles.link} ${styles.socialLink}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Email</span>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram" className={`${styles.link} ${styles.socialLink}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
            <span>Instagram</span>
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className={`${styles.link} ${styles.socialLink}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </a>
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
