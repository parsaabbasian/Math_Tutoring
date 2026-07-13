'use client';
import Link from 'next/link';
import { useActionState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { signup, type AuthFormState } from '../actions/auth';
import styles from './AuthForm.module.css';

export default function SignupForm() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].auth;
  const [state, action, pending] = useActionState<AuthFormState, FormData>(signup, undefined);

  const err = (key?: string) =>
    key ? t.errors[key as keyof typeof t.errors] ?? t.errors.generic : undefined;

  return (
    <section className={styles.authSection} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`${styles.card} fade-in`}>
        <h1 className={styles.title}>{t.signupTitle}</h1>
        <p className={styles.subtitle}>{t.signupSubtitle}</p>

        {state?.errors?.form && (
          <div className={styles.formError} role="alert">{err(state.errors.form)}</div>
        )}

        <form action={action}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>{t.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              required
              autoComplete="name"
            />
            {state?.errors?.name && (
              <span className={styles.fieldError}>{err(state.errors.name)}</span>
            )}
          </div>

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
            {state?.errors?.email && (
              <span className={styles.fieldError}>{err(state.errors.email)}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>{t.password}</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              required
              minLength={8}
              autoComplete="new-password"
              dir="ltr"
            />
            <span className={styles.hint}>{t.passwordHint}</span>
            {state?.errors?.password && (
              <span className={styles.fieldError}>{err(state.errors.password)}</span>
            )}
          </div>

          <button type="submit" className={`btn-primary ${styles.submit}`} disabled={pending}>
            {t.signupButton}
          </button>
        </form>

        <p className={styles.switchText}>
          {t.haveAccount} <Link href="/login">{t.loginLink}</Link>
        </p>
      </div>
    </section>
  );
}
