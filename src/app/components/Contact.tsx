'use client';
import { useState } from 'react';
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
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Request sent successfully! Avin will contact you soon.');
  };

  return (
    <section id="join" className={`section ${styles.contact}`}>
      <div className={styles.contactBg}></div>
      <div className={`container ${styles.contactContainer}`}>
        <div className={`${styles.infoSection} fade-in`}>
          <span className={styles.subtitle}>Get in Touch</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Join The Classes</h2>
          <p className={styles.infoDescription}>
            Take the first step towards math excellence. Fill out the form, and I will get back to you within 24 hours to schedule your free initial assessment.
          </p>
          
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><MailIcon /></div>
              <div>
                <h4 className={styles.detailTitle}>Email</h4>
                <p className={styles.detailValue}>avin.math@gmail.com</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><GlobeIcon /></div>
              <div>
                <h4 className={styles.detailTitle}>Bilingual Support</h4>
                <p className={styles.detailValue}>English & Persian (Farsi)</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><LaptopIcon /></div>
              <div>
                <h4 className={styles.detailTitle}>Location</h4>
                <p className={styles.detailValue}>100% Online & Flexible</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.formWrapper} fade-in`}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="studentName" className={styles.label}>Student Name</label>
                <input type="text" id="studentName" name="studentName" className={styles.input} required placeholder="Full Name" />
              </div>
              
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input type="email" id="email" name="email" className={styles.input} required placeholder="email@example.com" />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number</label>
                  <input type="tel" id="phone" name="phone" className={styles.input} required placeholder="(555) 000-0000" />
                </div>
              </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Current Grade / Level</label>
              <div className={styles.gradeGrid}>
                {['Middle School', 'High School (Grade 9-12)', 'College / University', 'Other'].map((grade) => (
                  <label key={grade} className={styles.gradeCard}>
                    <input type="radio" name="grade" value={grade} required className={styles.radioInput} />
                    <span className={styles.gradeName}>{grade}</span>
                  </label>
                ))}
              </div>
            </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Additional Info (Optional)</label>
                <textarea id="message" name="message" className={styles.textarea} placeholder="Any specific goals or topics you want to focus on?"></textarea>
              </div>

              <button type="submit" className={`btn-primary ${styles.submitButton}`}>
                Send Request <span>→</span>
              </button>
              
              {status && <div className={styles.statusMessage}>{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
