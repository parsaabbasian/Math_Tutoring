import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.videoPlaceholder}>
          <div className={styles.playButton}>▶</div>
          <p className={styles.videoText}>Watch Introduction Video</p>
        </div>
        <div className={styles.aboutContent}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Who I Am</h2>
          <p className={styles.aboutText}>
            Hi, I'm <strong>Avin Mosavi</strong>. With a deep passion for mathematics and over a decade of experience, I've dedicated my career to making math accessible, engaging, and genuinely enjoyable for students of all levels.
          </p>
          <p className={styles.aboutText}>
            My teaching philosophy revolves around building a strong foundation. I believe that once a student truly understands the "why" behind the numbers, the "how" becomes second nature. Whether it's algebra, calculus, or basic arithmetic, I tailor my approach to fit your unique learning style.
          </p>
          <div className={styles.portfolio}>
            <h3 className={styles.portfolioTitle}>My Qualifications</h3>
            <ul className={styles.portfolioList}>
              <li>🎓 M.Sc. in Mathematics</li>
              <li>🏆 10+ Years of Tutoring Experience</li>
              <li>🌟 Expert in High School and College Level Math</li>
              <li>💻 Seamless Online Teaching Environment</li>
            </ul>
          </div>
          <div className={styles.contactInfo}>
            <a href="mailto:contact@avinmath.com" className={styles.contactLink}>
              📧 contact@avinmath.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
