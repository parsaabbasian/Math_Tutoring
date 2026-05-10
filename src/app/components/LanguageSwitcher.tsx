'use client';

import { useLanguage } from '../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button 
        onClick={() => setLanguage('en')} 
        className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
      >
        EN
      </button>
      <span className={styles.divider}>/</span>
      <button 
        onClick={() => setLanguage('fa')} 
        className={`${styles.button} ${language === 'fa' ? styles.active : ''}`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        FA
      </button>
    </div>
  );
}
