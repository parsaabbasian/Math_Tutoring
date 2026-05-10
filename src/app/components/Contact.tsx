'use client';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import styles from './Contact.module.css';

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
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(t.form.success);
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
                <p className={styles.detailValue}>avin.math@gmail.com</p>
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
                  <input type="tel" id="phone" name="phone" className={styles.input} required placeholder={language === 'fa' ? "۰۹۱۲۰۰۰۰۰۰۰" : "(555) 000-0000"} />
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

              <button type="submit" className={`btn-primary ${styles.submitButton}`}>
                {t.form.submit} <span style={{ transform: isRTL ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>→</span>
              </button>
              
              {status && <div className={styles.statusMessage}>{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
