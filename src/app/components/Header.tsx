import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Avin <span className={styles.logoAccent}>Math Tutoring</span></span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/#about" className={styles.navLink}>Who I Am</Link>
          <Link href="/#how-it-works" className={styles.navLink}>How it Works</Link>
          <Link href="/login" className={styles.navLink}>Login</Link>
          <ThemeToggle />
          <Link href="/#join" className="btn-primary">Join Classes</Link>
        </nav>
      </div>
    </header>
  );
}
