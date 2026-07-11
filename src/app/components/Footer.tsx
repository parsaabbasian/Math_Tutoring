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
          <a href="/#about" className={styles.link}>{nav.about}</a>
          <a href="/#how-it-works" className={styles.link}>{nav.howItWorks}</a>
          <a href="/global" className={styles.link}>{nav.global}</a>
          <a href="/#packages" className={styles.link}>{nav.packages}</a>
          <a href="/faq" className={styles.link}>{nav.faq}</a>
          <a href="/#join" className={styles.link}>{nav.join}</a>
        </div>
        <div className={styles.socials}>
          <h4 className={styles.linksTitle}>{t.connect}</h4>
          <a href="https://wa.me/16479977324" target="_blank" rel="noopener noreferrer" title={t.whatsapp} className={`${styles.link} ${styles.socialLink}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span>{t.whatsapp}</span>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" title={t.instagram} className={`${styles.link} ${styles.socialLink}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
            <span>{t.instagram}</span>
          </a>
          <a href="mailto:avin.math@gmail.com" title={t.email} className={`${styles.link} ${styles.socialLink}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>{t.email}</span>
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
