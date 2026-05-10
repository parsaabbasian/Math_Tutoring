'use client';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import styles from './HowItWorks.module.css';

const AssessmentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
  </svg>
);

const LessonPlanIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const BilingualIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l6 6"></path>
    <path d="M4 14l6-6 2-3"></path>
    <path d="M2 5h12"></path>
    <path d="M7 2h1"></path>
    <path d="M22 22l-5-10-5 10"></path>
    <path d="M14 18h6"></path>
  </svg>
);

const MethodIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
    <path d="M12 7v5l3 3"></path>
  </svg>
);

const OnlineIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

export default function HowItWorks() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].howItWorks;

  const icons = [<AssessmentIcon />, <LessonPlanIcon />, <BilingualIcon />, <MethodIcon />, <OnlineIcon />];

  return (
    <section id="how-it-works" className={`section ${styles.howItWorks}`}>
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div className={styles.grid}>
          {t.steps.map((step, index) => (
            <div key={index} className={`${styles.card} fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{icons[index]}</span>
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
              <ul className={styles.pointList}>
                {step.points.map((point, i) => (
                  <li key={i} style={{ paddingLeft: isRTL ? '0' : '20px', paddingRight: isRTL ? '20px' : '0' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
