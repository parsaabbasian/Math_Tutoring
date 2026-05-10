import Link from 'next/link';
import styles from './Hero.module.css';

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={`${styles.badge} fade-in`}>
            <SparkleIcon /> Personalized Online Math Tutoring
          </div>
          <h1 className={`${styles.title} fade-in`}>
            Master Mathematics with <br />
            <span className="gradient-text">Confidence & Joy</span>
          </h1>
          <p className={`${styles.description} fade-in`}>
            Expert math guidance tailored to the <strong>Canadian curriculum</strong>. <strong>Engineering-level thinking</strong> meets personalized teaching in <strong>English & Persian</strong>.
          </p>
          <div className={`${styles.actions} fade-in`}>
            <Link href="/#join" className="btn-primary pulse-btn">Start Learning Today</Link>
            <Link href="/#about" className="btn-outline">Meet Your Tutor</Link>
          </div>
          <div className={`${styles.stats} fade-in`}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Student Satisfaction</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Bilingual</span>
              <span className={styles.statLabel}>English & Persian</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>$20</span>
              <span className={styles.statLabel}>CAD / Hour</span>
            </div>
          </div>
          
          <div className={styles.trustBadges}>
            <span><CheckIcon /> Ontario Curriculum Expert</span>
            <span><CheckIcon /> Engineering Student</span>
            <span><CheckIcon /> Personalized Approach</span>
          </div>
        </div>
      </div>
    </section>
  );
}
