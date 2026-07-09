'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { faqs } from '../data/faqs';
import styles from './FAQ.module.css';

// `limit` shows only the first N questions plus a "See all" link (landing-page preview).
// Omit it to render the full list (the dedicated /faq page).
export default function FAQ({ limit }: { limit?: number }) {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const allFaqs = faqs[language];
  const visibleFaqs = limit ? allFaqs.slice(0, limit) : allFaqs;
  const showSeeAll = typeof limit === 'number' && allFaqs.length > limit;

  return (
    <section id="faq" className={`section ${styles.faq}`}>
      <div className="container">
        <h2 className="section-title">{language === 'en' ? 'Frequently Asked Questions' : 'سوالات متداول'}</h2>
        <p className="section-subtitle">
          {language === 'en'
            ? "Got questions? We've got answers. Here are the most common questions parents and students ask."
            : "سوال دارید؟ ما پاسخ داریم. اینجا رایج‌ترین سوالات والدین و دانش‌آموزان است."}
        </p>

        <div className={styles.faqList}>
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
              dir={language === 'fa' ? 'rtl' : 'ltr'}
            >
              <button
                className={`${styles.faqQuestion} ${language === 'fa' ? styles.rtl : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>{faq.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={styles.chevron}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {openIndex === index && (
                <div className={`${styles.faqAnswer} fade-in`}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {showSeeAll && (
          <div className={styles.seeAllWrap}>
            <Link href="/faq" className={styles.seeAllBtn}>
              {language === 'en' ? 'See all FAQs' : 'مشاهده همه سوالات'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.seeAllArrow}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
