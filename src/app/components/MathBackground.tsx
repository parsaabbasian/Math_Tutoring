'use client';
import React from 'react';
import styles from './MathBackground.module.css';

const MathBackground = () => {
  return (
    <div className={styles.mathBg}>
      {/* Top Left - Square Root */}
      <div className={`${styles.symbol} ${styles.symbol1}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 14.5h2.5l3 7L15.5 3H21" />
        </svg>
      </div>

      {/* Top Right - X Squared */}
      <div className={`${styles.symbol} ${styles.symbol2}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20L12 4M4 4l8 16" />
          <path d="M16 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M18 6h2" />
        </svg>
      </div>

      {/* Bottom Left - Theta */}
      <div className={`${styles.symbol} ${styles.symbol3}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="7" ry="9" />
          <path d="M5.5 12h13" />
        </svg>
      </div>

      {/* Bottom Right - Pi */}
      <div className={`${styles.symbol} ${styles.symbol4}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 7v12M17 7v12M5 7h14c-1 0-2 .5-2 2M5 7c1 0 2 .5 2 2" />
        </svg>
      </div>

      {/* Middle Center - Sigma (Summation) */}
      <div className={`${styles.symbol} ${styles.symbol5}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6H6l7 6-7 6h12" />
          <path d="M6 6v1M6 17v1" />
        </svg>
      </div>

      {/* Middle Left - Infinity */}
      <div className={`${styles.symbol} ${styles.symbol6}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 9c-3 0-4 3-4 3s1 3 4 3 5-3 5-3 2-3 5-3 4 3 4 3-1 3-4 3-5-3-5-3-2-3-5-3z" />
        </svg>
      </div>

      {/* Center Top - Integral */}
      <div className={`${styles.symbol} ${styles.symbol7}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 3c0 1.5-1 2.5-2.5 2.5S9.5 4.5 9.5 3s1-2.5 2.5-2.5 2.5 1 2.5 2.5zM12 5.5v13M14.5 21c0-1.5-1-2.5-2.5-2.5s-2.5 1-2.5 2.5 1 2.5 2.5 2.5 2.5-1 2.5-2.5z" />
        </svg>
      </div>
    </div>
  );
};

export default MathBackground;
