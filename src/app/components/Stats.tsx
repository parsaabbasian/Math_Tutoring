'use client';
import React from 'react';
import styles from './Stats.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Stats() {
  const { language } = useLanguage();
  const t = translations[language].stats;

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {t.items.map((item, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.value}>{item.value}</div>
              <div className={styles.label}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
