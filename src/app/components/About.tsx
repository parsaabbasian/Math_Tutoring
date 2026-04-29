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
            Hi, I'm <strong>Avin Mousavi</strong>. I am a graduate of the Canadian education system and currently a bachelor's degree student in engineering. With a strong foundation in the Ontario Curriculum, I am fully familiar with the Canadian method of teaching mathematics, which emphasizes conceptual understanding, problem-solving, and analytical thinking.
          </p>
          <p className={styles.aboutText}>
            I have experience teaching students from elementary to high school. My teaching method is based on conceptual education, proceeding step-by-step with examples and targeted practice. I first assess the student's level and then tailor my approach to their specific needs. My goal is to strengthen your deep understanding of mathematics, increase self-confidence, and ensure academic success. I am fluent in both Persian and English, and I can teach in whichever language you prefer.
          </p>
          <div className={styles.portfolio}>
            <h3 className={styles.portfolioTitle}>Experience & Qualifications</h3>
            <ul className={styles.portfolioList}>
              <li>🎓 Bachelor of Engineering student</li>
              <li>📜 Diploma from the Canadian education system (Ontario Curriculum)</li>
              <li>🌟 Experience teaching mathematics from elementary to high school</li>
              <li>💻 Private math tutoring in a university environment</li>
              <li>🗣️ Full fluency in English and Persian</li>
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
