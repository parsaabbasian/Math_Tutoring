'use client';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './FAQ.module.css';

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = language === 'en' ? [
    {
      q: "What are your qualifications?",
      a: "I'm an engineering student at York University and a graduate of the Ontario Secondary School Diploma (OSSD) program, so I'm fully familiar with the Canadian math curriculum and how it's taught at every grade level. I have hands-on experience tutoring students privately from elementary through high school."
    },
    {
      q: "How long before I see improvement?",
      a: "Every student is different, but most families notice a shift in confidence and comprehension within the first few sessions. Real, lasting improvement (better grades and less anxiety around math) typically builds over 4 to 6 weeks of consistent lessons."
    },
    {
      q: "What grades do you tutor?",
      a: "I work with students from elementary school through high school, covering the full range of the Ontario math curriculum."
    },
    {
      q: "How does online tutoring work?",
      a: "Lessons take place over video call using a shared digital whiteboard, so your child can follow along, ask questions, and work through problems in real time, just like an in-person lesson."
    },
    {
      q: "Do you offer a free trial?",
      a: "Every new student starts with a free 15 minute introduction meeting (a chance for me to meet your child, learn about their current level and goals, and for us to see if the connection feels right). If you'd like to continue after that, the first full session is just $15, so your child can experience a real lesson before you commit to anything further."
    },
    {
      q: "What if I'm not happy with the lessons?",
      a: "Your satisfaction matters to me. If a lesson isn't the right fit, tell me and we'll adjust the approach (pacing, style, or focus) together. There's no long-term contract, so you're never locked in."
    },
    {
      q: "Do you provide homework help?",
      a: "Yes. In addition to core lessons, I can help your child work through school assignments and prepare for upcoming tests and exams."
    },
    {
      q: "What about lesson cancellations?",
      a: "I understand plans change. Please give at least 24 hours' notice to reschedule or cancel a lesson at no charge. Late cancellations may be subject to the full lesson fee."
    },
  ] : [
    {
      q: "مدارک و سوابق شما چیست؟",
      a: "من دانشجوی مهندسی در دانشگاه یورک و فارغ‌التحصیل برنامه دیپلم متوسطه انتاریو (OSSD) هستم، بنابراین با برنامه درسی ریاضی کانادا و نحوه تدریس آن در همه پایه‌ها کاملاً آشنا هستم. تجربه عملی تدریس خصوصی به دانش‌آموزان از دبستان تا دبیرستان را دارم."
    },
    {
      q: "چقدر طول می‌کشد تا بهبود را ببینم؟",
      a: "هر دانش‌آموزی متفاوت است، اما بیشتر خانواده‌ها در همان چند جلسه اول تغییری در اعتماد به نفس و درک مطلب احساس می‌کنند. بهبود واقعی و ماندگار (نمرات بهتر و اضطراب کمتر نسبت به ریاضی) معمولاً طی ۴ تا ۶ هفته کلاس منظم شکل می‌گیرد."
    },
    {
      q: "با چه پایه‌هایی کار می‌کنید؟",
      a: "با دانش‌آموزان از دبستان تا دبیرستان کار می‌کنم و کل برنامه درسی ریاضی انتاریو را پوشش می‌دهم."
    },
    {
      q: "تدریس آنلاین چگونه کار می‌کند؟",
      a: "کلاس‌ها از طریق تماس ویدیویی و با استفاده از تخته دیجیتال مشترک برگزار می‌شوند، بنابراین فرزند شما می‌تواند همراهی کند، سؤال بپرسد و مسائل را به‌صورت زنده حل کند، درست مثل کلاس حضوری."
    },
    {
      q: "آیا جلسه آزمایشی رایگان دارید؟",
      a: "هر دانش‌آموز جدید با یک جلسه آشنایی رایگان ۱۵ دقیقه‌ای شروع می‌کند (فرصتی برای آشنایی من با فرزند شما، شناخت سطح و اهداف فعلی او، و اینکه ببینیم ارتباط مناسبی شکل می‌گیرد یا نه). اگر بعد از آن بخواهید ادامه دهید، اولین جلسه کامل فقط ۱۵ دلار است تا فرزندتان پیش از هر تعهدی، یک درس واقعی را تجربه کند."
    },
    {
      q: "اگر از کلاس‌ها راضی نباشم چه؟",
      a: "رضایت شما برای من مهم است. اگر کلاس مناسب نبود، به من بگویید تا رویکرد را با هم تنظیم کنیم (سرعت، سبک یا تمرکز). قرارداد بلندمدتی وجود ندارد، بنابراین هرگز مقید نیستید."
    },
    {
      q: "آیا در انجام تکالیف هم کمک می‌کنید؟",
      a: "بله. علاوه بر کلاس‌های اصلی، می‌توانم به فرزند شما در انجام تکالیف مدرسه و آمادگی برای امتحان‌ها و آزمون‌های پیش رو کمک کنم."
    },
    {
      q: "لغو کلاس‌ها چگونه است؟",
      a: "می‌دانم که برنامه‌ها تغییر می‌کنند. لطفاً برای تغییر زمان یا لغو رایگان کلاس، حداقل ۲۴ ساعت قبل اطلاع دهید. لغوهای دیرهنگام ممکن است مشمول هزینه کامل جلسه شوند."
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
