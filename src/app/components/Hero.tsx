'use client';

import Link from 'next/link';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useModal } from '../context/ModalContext';

export default function Hero() {
  const { language } = useLanguage();
  const { openBooking } = useModal();

  return (
    <section className={styles.hero}>
      <div className={`${styles.containerWide} ${styles.heroGrid}`}>

        {/* ── LEFT: Text ── */}
        <div className={styles.textSide}>

          <h1 className={`${styles.headline} fade-in`}>
            {language === 'en'
              ? <>Math tutoring that builds <span className={styles.accent}>confidence</span> — not just grades.</>
              : <>آموزش ریاضی که <span className={styles.accent}>اعتماد به نفس</span> می‌سازد — نه فقط نمره.</>
            }
          </h1>

          <p className={`${styles.sub} fade-in`}>
            {language === 'en'
              ? 'Personalized one-on-one lessons for elementary and high school students, taught by a bilingual (English/Persian) engineering student who makes math simple, structured, and actually enjoyable.'
              : 'کلاس‌های خصوصی یک‌به‌یک برای دانش‌آموزان ابتدایی و دبیرستان، با تدریس دانشجوی مهندسی دوزبانه (انگلیسی/فارسی) که ریاضی را ساده، ساختارمند و واقعاً لذت‌بخش می‌کند.'}
          </p>

          <div className={`${styles.ctaRow} fade-in`}>
            <button
              onClick={openBooking}
              className={styles.ctaPrimary}
              type="button"
            >
              {translations[language].hero.ctaBook}
            </button>
            <a
              href="/#join"
              className={styles.ctaSecondary}
            >
              {language === 'en' ? 'Learn More' : 'اطلاعات بیشتر'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>

        </div>

        {/* ── RIGHT: Photo / Video ── */}
        <div className={`${styles.imageSide} fade-in`}>
          <div className={styles.mediaWrap}>
            <img
              src="/images/avin-photo.webp"
              alt="Avin Mousavi, Math Tutor"
              className={styles.photo}
            />
          </div>

          {/* Name tag below */}
          <div className={styles.nameTag}>
            <strong>Avin Mousavi</strong>
            <span>{language === 'en' ? 'Math Tutor · Engineering Student, York University' : 'مدرس ریاضی · دانشجوی مهندسی، دانشگاه یورک'}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
