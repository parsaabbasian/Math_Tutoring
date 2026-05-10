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
            ✨ {language === 'en' ? 'Top-Rated Canadian Math Tutoring' : 'برترین آموزش ریاضی در کانادا'}
          </div>
          <h1 className={`${styles.title} fade-in`}>
            {language === 'en' ? (
              <>Crush Your Math Goals <br /><span className="gradient-text">Without the Stress.</span></>
            ) : (
              <>ریاضی رو بترکون، <br /><span className="gradient-text">بدون استرس!</span></>
            )}
          </h1>
          <p className={`${styles.description} fade-in`}>
            {language === 'en' 
              ? "Expert guidance for OSSD & University levels. We don't just teach math; we build the confidence to solve anything. English & Persian supported."
              : "آموزش تخصصی منطبق با برنامه درسی کانادا (OSSD). ما فقط ریاضی درس نمیدیم؛ ما اعتماد به نفس حل هر مسئله‌ای رو در تو می‌سازیم."}
          </p>
          <div className={`${styles.actions} fade-in`}>
            <Link href="/#join" className="btn-primary" style={{ padding: '18px 44px', fontSize: '1.2rem', borderRadius: '16px' }}>{t.ctaStart}</Link>
            <Link href="/#about" className="btn-outline" style={{ padding: '16px 36px', borderRadius: '16px' }}>{t.ctaMeet}</Link>
          </div>
        </div>

        <div className={`${styles.visualContent} fade-in`}>
          <div className={styles.collageContainer}>
            {/* The "Notebook" Element */}
            <div className={styles.paperPiece}>
              <div className={styles.paperHeader}>Lesson Snapshot</div>
              <div className={styles.paperBody}>
                <div className={styles.handwriting}>f(x) = sin(x)</div>
                <div className={styles.graphSketch}>
                  <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 30 Q 30 10 50 30 T 90 30" stroke="var(--primary)" strokeWidth="2" />
                    <line x1="10" y1="30" x2="90" y2="30" stroke="#eee" />
                    <line x1="50" y1="10" x2="50" y2="50" stroke="#eee" />
                  </svg>
                </div>
              </div>
            </div>

            {/* The "Polaroid" Photo */}
            <div className={styles.polaroid}>
              <div className={styles.photoPlaceholder}>
                <svg viewBox="0 0 100 100" fill="none" stroke="var(--primary-light)">
                  <circle cx="50" cy="50" r="30" fill="var(--primary-light)" opacity="0.2" />
                  <path d="M30 70 L50 30 L70 70" stroke="var(--primary)" strokeWidth="2" />
                </svg>
              </div>
              <div className={styles.photoCaption}>{language === 'en' ? 'Study Mode' : 'وقت مطالعه'}</div>
            </div>

            {/* The "Goal" Sticky Note */}
            <div className={styles.stickyNote}>
              <div className={styles.stickyText}>
                <strong>Goal:</strong> <br /> 
                Next Exam: A+ 🚀
              </div>
            </div>

            {/* Floating "Stickers" & Decor */}
            <div className={styles.mathSticker} style={{ top: '-10px', left: '20%' }}>∑</div>
            <div className={styles.mathSticker} style={{ bottom: '20px', right: '10%', background: 'var(--accent)', color: 'white' }}>π</div>
            <div className={styles.ruler}></div>
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
