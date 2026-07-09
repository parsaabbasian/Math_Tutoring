'use client';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import styles from './GlobalTutoring.module.css';

function WorksheetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="8" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="8" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BlocksIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="4" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9" y="13" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function GlobeIconSmall() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 5h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="10" r="0.8" fill="currentColor" />
      <circle cx="12" cy="10" r="0.8" fill="currentColor" />
      <circle cx="15" cy="10" r="0.8" fill="currentColor" />
    </svg>
  );
}

export default function GlobalTutoring() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].global;

  return (
    <section id="global" className={`section ${styles.global}`}>
      <div className="container" dir={isRTL ? 'rtl' : 'ltr'}>
        <span className={styles.eyebrow}>{t.subtitle}</span>
        <h2 className="section-title">{t.title}</h2>

        <div className={`${styles.intro} fade-in`}>
          <p className={styles.paragraph}>{t.p1}</p>
          <p className={styles.paragraph}>{t.p2}</p>
          <p className={styles.paragraph}>{t.p3}</p>
        </div>

        <div className={styles.features}>
          {t.features.map((feature, i) => (
            <div key={i} className={`${styles.featureCard} fade-in`}>
              <div className={styles.featureIcon}>
                {i === 0 && <WorksheetIcon />}
                {i === 1 && <BlocksIcon />}
                {i === 2 && <GlobeIconSmall />}
                {i === 3 && <ChatIcon />}
              </div>
              <div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
