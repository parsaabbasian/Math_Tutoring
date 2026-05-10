import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={`${styles.badge} fade-in`}>🚀 Personalized Online Math Tutoring</div>
          <h1 className={`${styles.title} fade-in`}>
            Master Mathematics with <br />
            <span className="gradient-text">Confidence & Joy</span>
          </h1>
          <p className={`${styles.description} fade-in`}>
            Experience the power of <strong>Engineering-level analytical thinking</strong> combined with a patient, student-focused approach. From <strong>OSSD preparation</strong> to advanced concepts, I provide expert bilingual guidance in <strong>English & Persian</strong> tailored to the Canadian curriculum.
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
            <span>✓ Ontario Curriculum Expert</span>
            <span>✓ Engineering Student</span>
            <span>✓ Personalized Approach</span>
          </div>
        </div>
      </div>
    </section>
  );
}
