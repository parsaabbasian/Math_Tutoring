'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>

        {/* ── LEFT: Text ── */}
        <div className={styles.textSide}>

          <h1 className={`${styles.headline} fade-in`}>
            {language === 'en'
              ? <>Math tutoring that builds <span className={styles.accent}>confidence</span> and reduces stress.</>
              : <>آموزش ریاضی که <span className={styles.accent}>اعتماد به نفس</span> می‌سازد و استرس را کاهش می‌دهد.</>
            }
          </h1>

          <p className={`${styles.sub} fade-in`}>
            {language === 'en'
              ? 'Personalized one-on-one tutoring for elementary and high school students by a York University Mechanical Engineering student. Lessons are designed to make math easier to understand and more enjoyable to learn.'
              : 'آموزش خصوصی یک‌به‌یک برای دانش‌آموزان ابتدایی و دبیرستان توسط دانشجوی مهندسی مکانیک دانشگاه یورک. جلسات طراحی شده‌اند تا یادگیری ریاضی آسان‌تر و لذت‌بخش‌تر شود.'}
          </p>

          <div className={`${styles.ctaRow} fade-in`}>
            <Link href="/#join" className={styles.ctaPrimary}>
              {language === 'en' ? 'Book a Free Consultation' : 'رزرو مشاوره رایگان'}
            </Link>
            <Link href="/#about" className={styles.ctaSecondary}>
              {language === 'en' ? 'Learn More' : 'بیشتر بدانید'}
            </Link>
          </div>

        </div>

        {/* ── RIGHT: Photo / Video ── */}
        <div className={`${styles.imageSide} fade-in`}>
          <div className={styles.mediaWrap}>
            {showVideo ? (
              <div className={styles.videoFrame}>
                <video
                  src="/videos/309.mp4"
                  controls
                  autoPlay
                  className={styles.video}
                />
                <button
                  className={styles.closeVideo}
                  onClick={() => setShowVideo(false)}
                  aria-label="Close video"
                >✕</button>
              </div>
            ) : (
              <>
                <img
                  src="/images/avin-photo.webp"
                  alt="Avin Mousavi — Math Tutor"
                  className={styles.photo}
                />
                {/* Play button overlay */}
                <button
                  className={styles.playOverlay}
                  onClick={() => setShowVideo(true)}
                  aria-label="Watch introduction video"
                >
                  <span className={styles.playBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </span>
                  <span className={styles.playLabel}>{language === 'en' ? 'Watch Intro' : 'تماشای معرفی'}</span>
                </button>
              </>
            )}
          </div>

          {/* Name tag below */}
          <div className={styles.nameTag}>
            <strong>Avin Mousavi</strong>
            <span>{language === 'en' ? 'Math Tutor · York University Engineering' : 'مدرس ریاضی · مهندسی دانشگاه یورک'}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
