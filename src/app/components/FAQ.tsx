'use client';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './FAQ.module.css';

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = language === 'en' ? [
    {
      q: "What are your qualifications?",
      a: "I'm a Mechanical Engineering student at York University and OSSD graduate. I've worked privately with 50+ students from elementary through high school, and I'm fluent in both English and Persian."
    },
    {
      q: "How long before I see improvement?",
      a: "Most students notice improvement in 2-3 weeks. However, it depends on their starting point and consistency. We focus on building confidence and understanding, not just grades."
    },
    {
      q: "What grades do you tutor?",
      a: "I work with elementary through high school students (Grades 1-12). I also help with college-level Calculus. Subject areas include all math topics aligned with Canadian and international curricula."
    },
    {
      q: "How does online tutoring work?",
      a: "We use video calls with a digital whiteboard where I can write, draw, and solve problems in real-time. You'll have the same personalized experience as in-person, just from home."
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes! The first 30-minute intro call is completely free. We'll assess your current level, discuss goals, and make sure we're a good fit before you commit to paid lessons."
    },
    {
      q: "What if I'm not happy with the lessons?",
      a: "If you're not satisfied after the first lesson, we can discuss what would work better. I'm flexible and adjust my teaching style to match how each student learns best."
    },
    {
      q: "Do you provide homework help?",
      a: "Yes! I help with understanding concepts and working through problems. My focus is on teaching you how to solve problems, not just giving answers."
    },
    {
      q: "What about lesson cancellations?",
      a: "Give 24 hours notice for cancellations. Life happens, and I'm flexible with rescheduling within reason."
    },
  ] : [
    {
      q: "شما چه مدارکی دارید؟",
      a: "من دانشجوی مهندسی مکانیک در دانشگاه یورک و فارغ‌التحصیل OSSD هستم. من با بیش از ۵۰ دانش‌آموز از دبستان تا دبیرستان کار کرده‌ام و به انگلیسی و فارسی روان صحبت می‌کنم."
    },
    {
      q: "چقدر طول می‌کشد تا بهبود را ببینم؟",
      a: "اکثر دانش‌آموزان در ۲-۳ هفته بهبود می‌بینند. البته این به نقطه شروع و سازگاری بستگی دارد. ما بر روی ایجاد اعتماد به نفس و درک، نه فقط نمرات تمرکز می‌کنیم."
    },
    {
      q: "شما با چه پایه‌هایی کار می‌کنید؟",
      a: "من با دانش‌آموزان دبستان تا دبیرستان (پایه ۱-۱۲) کار می‌کنم. من همچنین با Calculus سطح کالج کمک می‌کنم. موضوعات شامل تمام مباحث ریاضی هستند."
    },
    {
      q: "تدریس آنلاین چگونه کار می‌کند؟",
      a: "ما از ویدئو کال با تخته سفید دیجیتالی استفاده می‌کنیم. همان تجربه شخصی‌سازی شده‌ای که در حضوری دارید، اما از خانه."
    },
    {
      q: "آیا یک جلسه رایگان وجود دارد؟",
      a: "بله! اولین جلسه ۳۰ دقیقه‌ای کاملاً رایگان است. ما سطح فعلی شما را بررسی می‌کنیم و در مورد اهداف صحبت می‌کنیم."
    },
    {
      q: "اگر از درس‌ها راضی نباشم چه؟",
      a: "اگر بعد از اولین درس راضی نباشید، می‌توانیم در مورد بهتری صحبت کنیم. من انعطاف‌پذیر هستم و سبک تدریس خود را متناسب با یادگیری هر دانش‌آموز تنظیم می‌کنم."
    },
    {
      q: "آیا شما کمک تکلیف می‌کنید؟",
      a: "بله! من با درک مفاهیم و کار کردن مسائل کمک می‌کنم. تمرکز من بر تدریس نحوه حل مسائل است، نه فقط دادن پاسخ."
    },
    {
      q: "درباره لغو درس‌ها چه می‌دانید؟",
      a: "۲۴ ساعت قبل اطلاع دهید. زندگی پیش می‌آید و من انعطاف‌پذیر هستم."
    },
  ];

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
          {faqs.map((faq, index) => (
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
      </div>
    </section>
  );
}
