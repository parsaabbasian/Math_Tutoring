'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: '60px', height: '32px' }} />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle Theme"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: '64px',
        height: '32px',
        borderRadius: '9999px',
        backgroundColor: isDark ? 'var(--border)' : '#e0e0e0',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        padding: '0 4px',
      }}
    >
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '0 4px',
          color: 'var(--text-muted)'
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>

      <span
        style={{
          position: 'absolute',
          left: isDark ? 'calc(100% - 28px)' : '4px',
          width: '24px',
          height: '24px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          transition: 'left 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          zIndex: 1
        }}
      />
    </button>
  );
}
