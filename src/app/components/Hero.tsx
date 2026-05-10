'use client';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>

        {/* ── LEFT: Text ── */}
        <div className={styles.textSide}>
          <p className={`${styles.eyebrow} fade-in`}>
            {language === 'en'
              ? '⭐ Personalized · OSSD · Bilingual (EN & FA)'
              : '⭐ شخصی‌سازی شده · OSSD · دوزبانه (FA & EN)'}
          </p>

          <h1 className={`${styles.headline} fade-in`}>
            {language === 'en' ? (
              <>Private Math Tutoring <br /><span className={styles.accent}>That Actually Works.</span></>
            ) : (
              <>آموزش خصوصی ریاضی <br /><span className={styles.accent}>که واقعاً جواب میده.</span></>
            )}
          </h1>

          <p className={`${styles.sub} fade-in`}>
            {language === 'en'
              ? 'Achieve your goals with personalized, one-on-one math sessions — taught by a York University engineering student, in English or Persian.'
              : 'با جلسات خصوصی یک‌به‌یک ریاضی به اهدافت برس — تدریس شده توسط دانشجوی مهندسی یورک، به انگلیسی یا فارسی.'}
          </p>

          <div className={`${styles.ctaRow} fade-in`}>
            <Link href="/#join" className={styles.ctaPrimary}>
              {t.ctaStart}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/#about" className={styles.ctaSecondary}>{t.ctaMeet}</Link>
          </div>

          {/* Grade pills */}
          <div className={`${styles.grades} fade-in`}>
            <span className={styles.gradesLabel}>{language === 'en' ? 'Grades:' : 'پایه‌ها:'}</span>
            {['9', '10', '11', '12', 'Uni'].map(g => (
              <span key={g} className={styles.gradePill}>{g}</span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Circle + Photo + Chips ── */}
        <div className={`${styles.imageSide} fade-in`}>
          <div className={styles.circleWrap}>
            {/* Background circle */}
            <div className={styles.circle}></div>

            {/* Photo placeholder — replace src with Avin's actual photo */}
            <div className={styles.photoFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* ─────────────────────────────────────────
                  TO ADD AVIN'S PHOTO:
                  Place the image file at:
                    /public/avin-photo.webp
                  It will automatically appear here.
              ───────────────────────────────────────── */}
              <img
                src="/images/avin-photo.webp"
                alt="Avin Mousavi — Math Tutor"
                className={styles.photo}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const fallback = (e.target as HTMLElement).nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Placeholder shown until real photo is added */}
              <div className={styles.photoPlaceholder}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                <p className={styles.placeholderText}>Add your photo</p>
                <p className={styles.placeholderHint}>/public/images/avin-photo.webp</p>
              </div>
            </div>
            {/* Name & title — always visible below the circle */}
            <div className={styles.tutorInfo}>
              <p className={styles.tutorName}>Avin Mousavi</p>
              <p className={styles.tutorTitle}>{language === 'en' ? 'Math Tutor · York Eng.' : 'مدرس ریاضی · مهندسی یورک'}</p>
            </div>

            {/* Floating info chips */}
            <div className={`${styles.chip} ${styles.chip1}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              {language === 'en' ? 'Bilingual Sessions' : 'جلسات دوزبانه'}
            </div>

            <div className={`${styles.chip} ${styles.chip2}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {language === 'en' ? 'Flexible Schedule' : 'برنامه منعطف'}
            </div>

            <div className={`${styles.chip} ${styles.chip3}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              OSSD Expert
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
