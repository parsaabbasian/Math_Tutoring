'use client';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import styles from './About.module.css';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={styles.aboutBg}></div>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={`${styles.aboutContent} fade-in`}>
          <span className={styles.subtitle}>{t.subtitle}</span>
          <h2 className="section-title" style={{ textAlign: language === 'fa' ? 'right' : 'left', marginBottom: '24px' }}>{t.title}</h2>
          <p className={styles.aboutText}>{t.p1}</p>
          <p className={styles.aboutText}>{t.p2}</p>
          <p className={styles.aboutText}>{t.p3}</p>
          <p className={styles.aboutText}>{t.p4}</p>

          <p className={styles.aboutText} style={{ marginTop: '16px', marginBottom: 0 }}>{t.p5}</p>
        </div>

        <div className={`${styles.videoWrapper} fade-in`}>
          <div className={styles.videoContainer}>
            <video 
              className={styles.videoPlayer}
              controls
              playsInline
            >
              <source src="/videos/309.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
