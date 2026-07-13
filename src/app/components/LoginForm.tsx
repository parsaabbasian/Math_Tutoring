'use client';
import Link from 'next/link';
import { useActionState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { login, type AuthFormState } from '../actions/auth';
import styles from './AuthForm.module.css';

export default function LoginForm() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].auth;
  const [state, action, pending] = useActionState<AuthFormState, FormData>(login, undefined);

  const err = (key?: string) =>
    key ? t.errors[key as keyof typeof t.errors] ?? t.errors.generic : undefined;

  return (
    <section className={styles.authSection} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`${styles.card} fade-in`}>
        <h1 className={styles.title}>{t.loginTitle}</h1>
        <p className={styles.subtitle}>{t.loginSubtitle}</p>

        {state?.errors?.form && (
          <div className={styles.formError} role="alert">{err(state.errors.form)}</div>
        )}

        <form action={action}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>{t.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              required
              autoComplete="email"
              placeholder="email@example.com"
              dir="ltr"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>{t.password}</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              required
              autoComplete="current-password"
              dir="ltr"
            />
          </div>

          <button type="submit" className={`btn-primary ${styles.submit}`} disabled={pending}>
            {t.loginButton}
          </button>
        </form>

        <p className={styles.switchText}>
          {t.noAccount} <Link href="/signup">{t.signupLink}</Link>
        </p>
      </div>
    </section>
  );
}
