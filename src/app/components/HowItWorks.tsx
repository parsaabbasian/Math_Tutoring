import styles from './HowItWorks.module.css';

const ReachOutIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    <line x1="9" y1="10" x2="15" y2="10"></line>
    <line x1="12" y1="7" x2="12" y2="13"></line>
  </svg>
);

const EvaluationIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
  </svg>
);

const LearningIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const steps = [
  {
    id: 1,
    title: "Reach Out",
    description: "Fill out the contact form with your details, grade level, and specific goals. I will get back to you within 24 hours.",
    icon: <ReachOutIcon />
  },
  {
    id: 2,
    title: "Free Evaluation",
    description: "We'll schedule a quick introductory call to discuss your current level, learning style, and create a custom plan.",
    icon: <EvaluationIcon />
  },
  {
    id: 3,
    title: "Start Learning",
    description: "Begin your personalized online sessions. Interactive whiteboard and shared materials ensure you grasp every concept.",
    icon: <LearningIcon />
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.howItWorks}`}>
      <div className="container">
        <h2 className="section-title">How Classes Work</h2>
        <p className="section-subtitle">A simple, effective process designed to help you achieve your academic goals without the stress.</p>
        
        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.id} className={`${styles.card} fade-in`}>
              <div className={styles.stepNumber}>{step.id}</div>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{step.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
