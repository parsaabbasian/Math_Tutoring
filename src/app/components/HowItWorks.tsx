'use client';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import styles from './HowItWorks.module.css';

const AssessmentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
  </svg>
);

const LessonPlanIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const BilingualIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l6 6"></path>
    <path d="M4 14l6-6 2-3"></path>
    <path d="M2 5h12"></path>
    <path d="M7 2h1"></path>
    <path d="M22 22l-5-10-5 10"></path>
    <path d="M14 18h6"></path>
  </svg>
);

const MethodIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 7v5l3 3"></path>
  </svg>
);

const OnlineIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const icons = [<AssessmentIcon key="a"/>, <LessonPlanIcon key="b"/>, <BilingualIcon key="c"/>, <MethodIcon key="d"/>, <OnlineIcon key="e"/>];

export default function HowItWorks() {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;

  const toPersianNumber = (num: number) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
  };

  return (
    <section id="how-it-works" className={`section ${styles.howItWorks}`}>
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        <div className={styles.timeline}>
          {t.steps.map((step, index) => (
            <div key={index} className={styles.step}>
              {/* Numbered circle */}
              <div className={styles.stepCircle}>
                {language === 'fa' ? toPersianNumber(index + 1) : index + 1}
              </div>

              {/* Card */}
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  {icons[index]}
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDescription}>{step.description}</p>
                <ul className={styles.pointList}>
                  {step.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
