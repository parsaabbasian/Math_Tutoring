'use client';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 8px' }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 6px' }}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className={styles.hero}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={`${styles.badge} fade-in`}>
            <SparkleIcon /> {t.badge}
          </div>
          <h1 className={`${styles.title} fade-in`}>
            {language === 'fa' ? (
               <>ریاضی را با <br /><span className="gradient-text">اعتماد به نفس و لذت</span> بیاموزید</>
            ) : (
              <>Master Mathematics with <br /><span className="gradient-text">Confidence & Joy</span></>
            )}
          </h1>
          <p className={`${styles.description} fade-in`}>
            {t.description}
          </p>
          <div className={`${styles.actions} fade-in`}>
            <Link href="/#join" className="btn-primary pulse-btn">{t.ctaStart}</Link>
            <Link href="/#about" className="btn-outline">{t.ctaMeet}</Link>
          </div>
          
          <div className={styles.trustBadges}>
            <span><CheckIcon /> {t.trust.ontario}</span>
            <span><CheckIcon /> {t.trust.engineering}</span>
            <span><CheckIcon /> {t.trust.personalized}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
