'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Request sent successfully! Avin will contact you soon.');
    // In a real application, this would send an API request.
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
              <div className={styles.detailIcon}>✉</div>
              <div>
                <h4 className={styles.detailTitle}>Email</h4>
                <p className={styles.detailValue}>avin.math@gmail.com</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>🌍</div>
              <div>
                <h4 className={styles.detailTitle}>Bilingual Support</h4>
                <p className={styles.detailValue}>English & Persian (Farsi)</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>💻</div>
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
                <label htmlFor="grade" className={styles.label}>Current Grade / Level</label>
                <select id="grade" name="grade" className={styles.select} required>
                  <option value="" disabled selected>Select Grade</option>
                  <option value="middle_school">Middle School</option>
                  <option value="high_school">High School (Grade 9-12)</option>
                  <option value="college">College / University</option>
                  <option value="other">Other</option>
                </select>
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
