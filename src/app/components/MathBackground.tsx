'use client';
import React from 'react';
import styles from './MathBackground.module.css';

const MathBackground = () => {
  return (
    <div className={styles.mathBg}>
      {/* Top Left - Summation */}
      <div className={`${styles.symbol} ${styles.symbol1}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 7H6l6 5-6 5h12" />
        </svg>
      </div>

      {/* Top Right - Pi */}
      <div className={`${styles.symbol} ${styles.symbol2}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5v14M15 5v14M18 5H6" />
        </svg>
      </div>

      {/* Bottom Left - Infinity */}
      <div className={`${styles.symbol} ${styles.symbol3}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12c-2-2-5-2-7 0a5 5 0 0 0 0 7c2 2 5 2 7 0 2 2 5 2 7 0a5 5 0 0 0 0-7c-2-2-5-2-7 0z" />
        </svg>
      </div>

      {/* Bottom Right - Integral */}
      <div className={`${styles.symbol} ${styles.symbol4}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 5c0-1.66-1.34-3-3-3s-3 1.34-3 3v14c0 1.66-1.34 3-3 3s-3-1.34-3-3" />
        </svg>
      </div>

      {/* Middle Center - Delta */}
      <div className={`${styles.symbol} ${styles.symbol5}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3L2 21h20L12 3z" />
        </svg>
      </div>

      {/* Middle Left - Omega */}
      <div className={`${styles.symbol} ${styles.symbol6}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18h3c.5-2 1.5-3.5 3-4.5 1.5-1 3-1 4.5 0 1.5 1 2.5 2.5 3 4.5h3" />
          <path d="M12 13.5V4a2 2 0 1 0-4 0v9.5" />
          <path d="M12 13.5V4a2 2 0 1 1 4 0v9.5" />
        </svg>
      </div>
    </div>
  );
};

export default MathBackground;
