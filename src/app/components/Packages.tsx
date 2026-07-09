'use client';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import styles from './Packages.module.css';

export default function Packages() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].packages;

  return (
    <section id="packages" className={`section ${styles.packages}`}>
      <div className="container" dir={isRTL ? 'rtl' : 'ltr'}>
        <span className={styles.eyebrow}>{t.subtitle}</span>
        <h2 className="section-title">{t.title}</h2>
        <p className={`${styles.intro} fade-in`}>{t.intro}</p>

        <div className={styles.grid}>
          {t.options.map((option, i) => (
            <div key={i} className={`${styles.card} fade-in`}>
              <h3 className={styles.cardTitle}>{option.title}</h3>
              <p className={styles.cardDesc}>{option.desc}</p>
            </div>
          ))}
        </div>

        <p className={styles.outro}>{t.outro}</p>
      </div>
    </section>
  );
}
