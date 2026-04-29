'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login request
    setTimeout(() => {
      setIsLoading(false);
      alert('Login functionality would be implemented here!');
    }, 1000);
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.backButton}>
        <Link href="/" className="btn-outline">
          &larr; Back to Home
        </Link>
      </div>
      
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <div className={styles.brand}>
            <span className={styles.logo}>Avin <span className="gradient-text">Math</span></span>
            <p className={styles.subtitle}>Welcome back! Please login to your account.</p>
          </div>

          <form onSubmit={handleLogin} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input} 
                required 
                placeholder="student@example.com" 
              />
            </div>
            
            <div className={styles.inputGroup}>
              <div className={styles.passwordLabelRow}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
              </div>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input} 
                required 
                placeholder="••••••••" 
              />
            </div>

            <button type="submit" className={`btn-primary ${styles.submitButton}`} disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className={styles.footer}>
            <p className={styles.signupText}>
              Don't have an account? <Link href="/#join" className={styles.signupLink}>Sign up here</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
