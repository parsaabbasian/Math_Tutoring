'use client';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import styles from './Contact.module.css';

// ─────────────────────────────────────────────────────────────────────────────
// TO RECEIVE EMAILS:
//   1. Go to https://formspree.io and sign up (free)
//   2. Create a new form, copy your Form ID
//   3. Replace "YOUR_FORM_ID" below with it, e.g. "xpwzgkla"
// ─────────────────────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const LaptopIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="2" y1="20" x2="22" y2="20"></line>
  </svg>
);

export default function Contact() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].contact;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="join" className={`section ${styles.contact}`}>
      <div className={styles.contactBg}></div>
      <div className={`container ${styles.contactContainer}`}>
        <div className={`${styles.infoSection} fade-in`}>
          <span className={styles.subtitle}>{t.subtitle}</span>
          <h2 className="section-title" style={{ textAlign: isRTL ? 'right' : 'left', marginBottom: '24px' }}>{t.title}</h2>
          <p className={styles.infoDescription}>{t.description}</p>
          
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><MailIcon /></div>
              <div>
                <h4 className={styles.detailTitle}>{t.info.email}</h4>
                <p className={styles.detailValue}>
                  <a href="mailto:avin.math@gmail.com" style={{ color: 'inherit' }}>avin.math@gmail.com</a>
                </p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><GlobeIcon /></div>
              <div>
                <h4 className={styles.detailTitle}>{t.info.bilingual}</h4>
                <p className={styles.detailValue}>{t.info.bilingualDesc}</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><LaptopIcon /></div>
              <div>
                <h4 className={styles.detailTitle}>{t.info.location}</h4>
                <p className={styles.detailValue}>{t.info.locationDesc}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.formWrapper} fade-in`}>
          <div className={styles.formContainer}>
            {status === 'success' ? (
              <div className={styles.successState}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>{language === 'en' ? 'Request Sent!' : 'درخواست ارسال شد!'}</h3>
                <p>{t.form.success}</p>
                <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
                  {language === 'en' ? 'Send Another' : 'ارسال مجدد'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="studentName" className={styles.label}>{t.form.studentName}</label>
                  <input type="text" id="studentName" name="studentName" className={styles.input} required placeholder={language === 'fa' ? "نام و نام خانوادگی" : "Full Name"} />
                </div>
                
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>{t.form.email}</label>
                    <input type="email" id="email" name="email" className={styles.input} required placeholder="email@example.com" />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="phone" className={styles.label}>{t.form.phone}</label>
                    <input type="tel" id="phone" name="phone" className={styles.input} placeholder={language === 'fa' ? "۰۹۱۲۰۰۰۰۰۰۰" : "(555) 000-0000"} />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>{t.form.grade}</label>
                  <div className={styles.gradeGrid}>
                    {t.form.grades.map((grade) => (
                      <label key={grade} className={styles.gradeCard}>
                        <input type="radio" name="grade" value={grade} required className={styles.radioInput} />
                        <span className={styles.gradeName}>{grade}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>{t.form.message}</label>
                  <textarea id="message" name="message" className={styles.textarea} placeholder={language === 'fa' ? "هرگونه هدف یا موضوع خاصی که می‌خواهید روی آن تمرکز کنید..." : "Any specific goals or topics you want to focus on?"}></textarea>
                </div>

                {status === 'error' && (
                  <p className={styles.errorMessage}>
                    {language === 'en'
                      ? 'Something went wrong. Please try emailing directly: avin.math@gmail.com'
                      : 'مشکلی پیش آمد. لطفاً مستقیماً ایمیل بزنید: avin.math@gmail.com'}
                  </p>
                )}

                <button
                  type="submit"
                  className={`btn-primary ${styles.submitButton}`}
                  disabled={status === 'loading'}
                >
                  {status === 'loading'
                    ? (language === 'en' ? 'Sending...' : 'در حال ارسال...')
                    : t.form.submit}
                  {status !== 'loading' && (
                    <span style={{ transform: isRTL ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>→</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
