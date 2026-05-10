import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const LogoA = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }}>
    <path d="M50 10L12 90H32L50 45L68 90H88L50 10Z" fill="#005B5B" />
    <path d="M30 65C30 55 38 55 46 65C54 75 62 75 70 65C70 55 62 55 54 65C46 75 38 75 30 65Z" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <line x1="62" y1="52" x2="68" y2="50" stroke="white" strokeWidth="2.5" />
    <line x1="67" y1="62" x2="73" y2="60" stroke="white" strokeWidth="2.5" />
    <line x1="72" y1="72" x2="78" y2="70" stroke="white" strokeWidth="2.5" />
    <line x1="77" y1="82" x2="83" y2="80" stroke="white" strokeWidth="2.5" />
  </svg>
);

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo}>
          <LogoA />
          <span className={styles.logoText}>vin <span className={styles.logoAccent}>Math Tutoring</span></span>
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
