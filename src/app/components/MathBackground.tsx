'use client';
import React from 'react';
import styles from './MathBackground.module.css';

const MathBackground = () => {
  return (
    <div className={styles.mathBg}>
      {/* Top Left - Square Root */}
      <div className={`${styles.symbol} ${styles.symbol1}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h2l4 8 7-16h5" />
        </svg>
      </div>

      {/* Top Right - X Squared */}
      <div className={`${styles.symbol} ${styles.symbol2}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17l10-10M7 7l10 10" />
          <path d="M19 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
        </svg>
      </div>

      {/* Bottom Left - Theta */}
      <div className={`${styles.symbol} ${styles.symbol3}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
        </svg>
      </div>

      {/* Bottom Right - Pi */}
      <div className={`${styles.symbol} ${styles.symbol4}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5v14M15 5v14M18 5H6" />
        </svg>
      </div>

      {/* Middle Center - Sigma */}
      <div className={`${styles.symbol} ${styles.symbol5}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 7H6l6 5-6 5h12" />
        </svg>
      </div>

      {/* Middle Left - Infinity */}
      <div className={`${styles.symbol} ${styles.symbol6}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12c-2-2-5-2-7 0a5 5 0 0 0 0 7c2 2 5 2 7 0 2 2 5 2 7 0a5 5 0 0 0 0-7c-2-2-5-2-7 0z" />
        </svg>
      </div>

      {/* Center Top - Integral */}
      <div className={`${styles.symbol} ${styles.symbol7}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 5c0-1.66-1.34-3-3-3s-3 1.34-3 3v14c0 1.66-1.34 3-3 3s-3-1.34-3-3" />
        </svg>
      </div>
    </div>
  );
};

export default MathBackground;
