'use client';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;

  const toPersianNumber = (num: number) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
  };

  /* 5 teal-shaded colors for the circle borders */
  const colors = ['#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59'];

  return (
    <section id="how-it-works" className={`section ${styles.howItWorks}`}>
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        {/* ── Connected circles row ── */}
        <div className={styles.circles}>
          {t.steps.map((step, i) => (
            <div key={i} className={styles.item} data-pos={i % 2 === 0 ? 'up' : 'down'}>

              {/* The circle */}
              <div
                className={styles.circle}
                style={{ borderColor: colors[i] }}
              >
                <span className={styles.num} style={{ color: colors[i] }}>
                  {language === 'fa' ? toPersianNumber(i + 1) : `0${i + 1}`}
                </span>
              </div>

              {/* Text content */}
              <div className={styles.text}>
                <h3 className={styles.title} style={{ color: colors[i] }}>{step.title}</h3>
                <p className={styles.desc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
