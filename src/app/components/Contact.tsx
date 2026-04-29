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
      <div className="container">
        <h2 className="section-title">Join The Classes</h2>
        <p className="section-subtitle">Take the first step towards math excellence. Fill out the form below and I will get back to you with available times and pricing.</p>
        
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="studentName" className={styles.label}>Student Name</label>
              <input type="text" id="studentName" name="studentName" className={styles.input} required placeholder="E.g. John Doe" />
            </div>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" name="email" className={styles.input} required placeholder="john@example.com" />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input type="tel" id="phone" name="phone" className={styles.input} required placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="grade" className={styles.label}>Current Grade / Level</label>
              <select id="grade" name="grade" className={styles.select} required>
                <option value="" disabled selected>Select Grade</option>
                <option value="middle_school">Middle School</option>
                <option value="high_school">High School</option>
                <option value="college">College / University</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Additional Info (Optional)</label>
              <textarea id="message" name="message" className={styles.textarea} placeholder="Any specific goals or topics you want to focus on?"></textarea>
            </div>

            <button type="submit" className={`btn-primary ${styles.submitButton}`}>Submit Request</button>
            
            {status && <div className={styles.statusMessage}>{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
