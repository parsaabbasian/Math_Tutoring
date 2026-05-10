'use client';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import styles from './About.module.css';

export default function About() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].about;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={styles.aboutBg}></div>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={`${styles.aboutContent} fade-in`}>
          <span className={styles.subtitle}>{t.subtitle}</span>
          <h2 className="section-title" style={{ textAlign: isRTL ? 'right' : 'left', marginBottom: '24px' }}>{t.title}</h2>
          
          <div className={styles.textContent}>
            <p className={styles.aboutText} dangerouslySetInnerHTML={{ __html: t.p1 }}></p>
            
            <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
              <p className={styles.aboutText} dangerouslySetInnerHTML={{ __html: t.p2 }}></p>
              <p className={styles.aboutText} dangerouslySetInnerHTML={{ __html: t.p3 }}></p>
              <p className={styles.aboutText} dangerouslySetInnerHTML={{ __html: t.p4 }}></p>
              <p className={styles.aboutText} style={{ marginTop: '16px', marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: t.p5 }}></p>
            </div>

            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className={styles.readMoreBtn}
            >
              {isExpanded ? t.showLess : t.readMore}
              <span className={isExpanded ? styles.arrowUp : styles.arrowDown}>→</span>
            </button>
          </div>
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
