import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>Avin <span className="gradient-text">Math</span></span>
          <p className={styles.tagline}>Empowering students through personalized mathematics education.</p>
        </div>
        <div className={styles.links}>
          <h4 className={styles.linksTitle}>Quick Links</h4>
          <a href="/#how-it-works" className={styles.link}>How It Works</a>
          <a href="/#about" className={styles.link}>Who I Am</a>
          <a href="/#join" className={styles.link}>Join Classes</a>
        </div>
        <div className={styles.socials}>
          <h4 className={styles.linksTitle}>Connect</h4>
          <a href="#" className={styles.link}>Instagram</a>
          <a href="#" className={styles.link}>LinkedIn</a>
          <a href="mailto:contact@avinmath.com" className={styles.link}>Email</a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Avin Mosavi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
