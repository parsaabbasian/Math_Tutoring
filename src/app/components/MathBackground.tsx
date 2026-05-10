'use client';
import React from 'react';
import styles from './MathBackground.module.css';

const MathBackground = () => {
  return (
    <div className={styles.mathBg}>
      {/* 1. Square Root */}
      <div className={`${styles.symbol} ${styles.symbol1}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 14.5h2.5l3 7L15.5 3H21" />
        </svg>
      </div>

      {/* 2. Sigma */}
      <div className={`${styles.symbol} ${styles.symbol2}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6H6l7 6-7 6h12" />
          <path d="M6 6v1M6 17v1" />
        </svg>
      </div>

      {/* 3. X */}
      <div className={`${styles.symbol} ${styles.symbol3}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20L20 4M4 4l16 16" />
        </svg>
      </div>

      {/* 4. Infinity */}
      <div className={`${styles.symbol} ${styles.symbol4}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 9c-3 0-4 3-4 3s1 3 4 3 5-3 5-3 2-3 5-3 4 3 4 3-1 3-4 3-5-3-5-3-2-3-5-3z" />
        </svg>
      </div>

      {/* 5. Sigma (Duplicate) */}
      <div className={`${styles.symbol} ${styles.symbol5}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6H6l7 6-7 6h12" />
          <path d="M6 6v1M6 17v1" />
        </svg>
      </div>
    </div>
  );
};

export default MathBackground;
