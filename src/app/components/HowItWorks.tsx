import styles from './HowItWorks.module.css';

const steps = [
  {
    id: 1,
    title: "Reach Out",
    description: "Fill out the contact form with your details, grade level, and specific goals. I will get back to you within 24 hours.",
    icon: "📝"
  },
  {
    id: 2,
    title: "Free Evaluation",
    description: "We'll schedule a quick introductory call to discuss your current level, learning style, and create a custom plan.",
    icon: "🎯"
  },
  {
    id: 3,
    title: "Start Learning",
    description: "Begin your personalized online sessions. Interactive whiteboard and shared materials ensure you grasp every concept.",
    icon: "🚀"
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
            <div key={step.id} className={styles.card}>
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
