import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Available for online tutoring</div>
          <h1 className={styles.title}>
            Master Mathematics with <br />
            <span className="gradient-text">Confidence & Joy</span>
          </h1>
          <p className={styles.description}>
            Join personalized, interactive math classes tailored to your learning style. Whether you are aiming for top grades or simply want to understand the fundamentals, I am here to help.
          </p>
          <div className={styles.actions}>
            <Link href="/#join" className="btn-primary">Start Learning Today</Link>
            <Link href="/#how-it-works" className="btn-outline">See How It Works</Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Students</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Years Exp.</span>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/avin_portrait.png" 
              alt="Avin Mosavi - Math Tutor" 
              width={500} 
              height={600} 
              className={styles.image}
              priority
            />
            <div className={styles.decorativeCircle}></div>
            <div className={styles.decorativeDots}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
