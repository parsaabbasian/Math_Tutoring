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
            Hi! My name is <strong>Avin</strong>, and I am a <strong>Mechanical Engineering student at York University</strong> with a strong passion for mathematics, teaching, and helping students build confidence in their learning journey.
          </p>
          <p className={styles.aboutText}>
            I graduated from the Ontario Secondary School Diploma (OSSD) program in Canada and completed my high school education under the Canadian curriculum. Because of this, I am highly familiar with the Canadian teaching system, learning expectations, and the methods schools use to teach mathematics across different grade levels.
          </p>
          <p className={styles.aboutText}>
            Over the past years, I have worked privately with students from elementary school to high school, helping them improve not only their grades but also their understanding of mathematics and problem-solving skills. My teaching style focuses on making math simple, understandable, and enjoyable rather than stressful or overwhelming.
          </p>
          <p className={styles.aboutText}>
            One of the unique parts of my tutoring is my <strong>bilingual teaching approach</strong>. I teach mathematics fluently in both <strong>English and Persian (Farsi)</strong>, allowing students and parents to choose the language they feel most comfortable learning in. This has been especially helpful for bilingual families and students who recently moved to Canada and are adapting to the Canadian education system.
          </p>
          <p className={styles.aboutText}>
            As an engineering student, I use analytical thinking and structured problem-solving techniques in my teaching to help students develop strong mathematical foundations that support long-term academic success.
          </p>
          
          <div className={styles.portfolio}>
            <h3 className={styles.portfolioTitle}>My Goal is to help students:</h3>
            <ul className={styles.portfolioList}>
              <li>✨ Build confidence in mathematics</li>
              <li>🧠 Improve critical thinking skills</li>
              <li>🛠️ Develop strong problem-solving abilities</li>
              <li>🎓 Prepare for future academic success</li>
              <li>💬 Feel comfortable asking questions and learning at their own pace</li>
            </ul>
          </div>

          <p className={styles.aboutText} style={{ marginTop: '24px' }}>
            Whether a student needs help catching up, improving grades, preparing for tests, or advancing ahead of their class level, lessons are always personalized based on the student’s needs and learning style.
          </p>
        </div>
      </div>
    </section>
  );
}
