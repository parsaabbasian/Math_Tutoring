'use client';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const SparkleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className={styles.hero}>
      <div className={styles.mathSymbols}></div>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.textContent}>
          <div className={`${styles.badge} fade-in`}>
            <SparkleIcon /> {t.badge}
          </div>
          <h1 className={`${styles.title} fade-in`}>
            {language === 'en' ? (
              <>Master Mathematics with <br /><span className="gradient-text">Confidence & Joy</span></>
            ) : (
              <>ریاضی را با <br /><span className="gradient-text">اعتماد به نفس و لذت</span> بیاموزید</>
            )}
          </h1>
          <p className={`${styles.description} fade-in`}>
            {t.description}
          </p>
          <div className={`${styles.actions} fade-in`}>
            <Link href="/#join" className="btn-primary">{t.ctaStart}</Link>
            <Link href="/#about" className="btn-outline">{t.ctaMeet}</Link>
          </div>
        </div>

        <div className={`${styles.visualContent} fade-in`}>
          <div className={styles.workspaceCard}>
            <div className={styles.notebookHeader}>
              <div className={styles.dots}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.subject}>{language === 'en' ? 'Personalized Session' : 'جلسه شخصی‌سازی شده'}</div>
            </div>
            <div className={styles.notebookBody}>
              <div className={styles.mathLine}>f(x) = ax² + bx + c</div>
              <div className={styles.mathLine}>Δ = b² - 4ac</div>
              <div className={styles.sketch}>
                <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6">
                  <path d="M10 50 L50 10 L90 50 Z" strokeDasharray="4 2" />
                  <circle cx="50" cy="35" r="15" stroke="var(--primary)" />
                  <path d="M10 50 Q 50 20 90 50" stroke="var(--accent)" />
                </svg>
              </div>
              <div className={styles.mathLine} style={{ opacity: 0.5 }}>sin²θ + cos²θ = 1</div>
            </div>
            <div className={styles.floatingTag}>{language === 'en' ? 'Bilingual' : 'دوزبانه'}</div>
            <div className={styles.floatingTag2}>{language === 'en' ? 'Interactive' : 'تعاملی'}</div>
          </div>
          
          <div className={styles.experienceCard}>
            <div className={styles.expNumber}>OSSD</div>
            <div className={styles.expLabel}>{language === 'en' ? 'Curriculum Expert' : 'متخصص برنامه آموزشی'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
