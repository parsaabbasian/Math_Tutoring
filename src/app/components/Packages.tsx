'use client';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import styles from './Packages.module.css';

const LaptopIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="2" y1="20" x2="22" y2="20"></line>
  </svg>
);

const SessionsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

export default function Packages() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].packages;
  const plan = t.plan;

  return (
    <section id="packages" className={`section ${styles.packages}`}>
      <div className="container" dir={isRTL ? 'rtl' : 'ltr'}>
        <span className={styles.eyebrow}>{t.subtitle}</span>
        <h2 className="section-title">{t.title}</h2>
        <p className={`${styles.intro} fade-in`}>{t.intro}</p>

        <div className={styles.cardWrapper}>
          <div className={`${styles.card} fade-in`}>
            <h3 className={styles.cardTitle}>{plan.title}</h3>

            <div className={styles.priceBlock}>
              <span className={styles.price}>{plan.price}</span>
              <span className={styles.priceUnit}>/ {t.perSession}</span>
            </div>
            <p className={styles.priceSub}>
              <span className={styles.priceMode}><LaptopIcon /> {t.onlineLabel}</span>
              <span className={styles.priceDot}>·</span>
              <span>{t.inPersonRate}</span>
            </p>

            <span className={styles.sessionsTag}>
              <SessionsIcon />
              {plan.sessions}
            </span>

            <p className={styles.cardDesc}>{plan.desc}</p>
          </div>
        </div>

        <p className={styles.outro}>{t.outro}</p>
      </div>
    </section>
  );
}
