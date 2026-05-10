import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={styles.aboutBg}></div>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={`${styles.aboutContent} fade-in`}>
          <span className={styles.subtitle}>My Journey</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Who I Am</h2>
          <p className={styles.aboutText}>
            Hi! My name is <strong>Avin</strong>, and I am a <strong>Mechanical Engineering student at York University</strong> with a strong passion for mathematics, teaching, and helping students build confidence in their learning journey. 
          </p>
          <p className={styles.aboutText}>
            I graduated from the <strong>OSSD program</strong> in Canada and am highly familiar with the Canadian teaching system, learning expectations, and methods used across different grade levels.
          </p>
          <p className={styles.aboutText}>
            Over the past years, I have worked privately with students from elementary to high school, focusing on making math <strong>simple, understandable, and enjoyable</strong>. My unique <strong>bilingual approach</strong> allows me to teach fluently in both <strong>English and Persian (Farsi)</strong>, which is especially helpful for bilingual families.
          </p>
          <p className={styles.aboutText}>
            As an engineering student, I use <strong>analytical thinking and structured problem-solving</strong> to help students develop strong foundations for long-term academic success.
          </p>

          <p className={styles.aboutText} style={{ marginTop: '16px', marginBottom: 0 }}>
            Whether you need help catching up or advancing ahead, lessons are always <strong>personalized</strong> to your unique learning style.
          </p>
        </div>

        <div className={`${styles.videoWrapper} fade-in`}>
          <div className={styles.videoContainer}>
            <video 
              className={styles.videoPlayer}
              controls
              playsInline
            >
              <source src="/videos/309.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
