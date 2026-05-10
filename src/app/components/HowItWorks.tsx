import styles from './HowItWorks.module.css';

const AssessmentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
  </svg>
);

const LessonPlanIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const BilingualIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l6 6"></path>
    <path d="M4 14l6-6 2-3"></path>
    <path d="M2 5h12"></path>
    <path d="M7 2h1"></path>
    <path d="M22 22l-5-10-5 10"></path>
    <path d="M14 18h6"></path>
  </svg>
);

const MethodIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
    <path d="M12 7v5l3 3"></path>
  </svg>
);

const OnlineIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const steps = [
  {
    id: 1,
    title: "Free Initial Assessment",
    description: "Every student begins with a short assessment or discussion session to help identify your current level and goals.",
    points: ["Current academic level", "Strengths and weaknesses", "School curriculum expectations", "Learning style and goals"],
    icon: <AssessmentIcon />
  },
  {
    id: 2,
    title: "Personalized Lesson Plans",
    description: "Each lesson is customized specifically for the student. Teaching is adjusted based on your individual needs.",
    points: ["Grade level & School curriculum", "Pace of learning", "Areas needing improvement", "Homework and test preparation"],
    icon: <LessonPlanIcon />
  },
  {
    id: 3,
    title: "Bilingual Environment",
    description: "Lessons are available in both English and Persian (Farsi) for maximum comfort and understanding.",
    points: ["English instruction", "Persian (Farsi) instruction", "Switch between languages", "Comfortable for bilingual families"],
    icon: <BilingualIcon />
  },
  {
    id: 4,
    title: "Conceptual Teaching",
    description: "Instead of memorization, lessons focus on understanding concepts deeply and building strong foundations.",
    points: ["Understanding concepts deeply", "Logical thinking", "Analytical problem solving", "Future-ready foundations"],
    icon: <MethodIcon />
  },
  {
    id: 5,
    title: "Online & Flexible",
    description: "Classes are conducted online, allowing you to learn comfortably from home with flexible scheduling.",
    points: ["Homework support", "Test and exam preparation", "Weekly tutoring", "Advanced learning support"],
    icon: <OnlineIcon />
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.howItWorks}`}>
      <div className="container">
        <h2 className="section-title">How Classes Work</h2>
        <p className="section-subtitle">A personalized, effective process designed to help you achieve your academic goals with confidence.</p>
        
        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.id} className={`${styles.card} fade-in`}>
              <div className={styles.stepNumber}>{step.id}</div>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{step.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
              <ul className={styles.pointList}>
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.extraInfo}>
          <div className={`${styles.infoBlock} fade-in`} style={{ gridColumn: '1 / -1' }}>
            <h3 className={styles.infoTitle}>Why Choose Avin Math Tutoring</h3>
            <ul className={styles.infoList} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
              <li>✨ Personalized one-on-one attention</li>
              <li>🌍 Bilingual teaching support</li>
              <li>📚 Canadian curriculum expertise</li>
              <li>🎯 Step-by-step explanations</li>
              <li>🤝 Friendly and supportive environment</li>
              <li>🧠 Focus on long-term understanding</li>
              <li>💻 Flexible online classes</li>
            </ul>
          </div>
        </div>

        <p className={styles.finalNote + " fade-in"}>
          Mathematics becomes much easier when students are taught in a way that matches how they learn. 
          My goal is to create a positive learning experience where students feel comfortable, motivated, and capable of succeeding.
        </p>
      </div>
    </section>
  );
}
