'use client';
import React from 'react';
import styles from './Testimonials.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <div className={styles.testimonialGrid}>
          {t.items.map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6m12 15c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6" />
                </svg>
              </div>
              <p className={styles.quote}>{item.quote}</p>
              <div className={styles.author}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.role}>{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
