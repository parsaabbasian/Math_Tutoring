import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language].nav;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Avin <span className={styles.logoAccent}>Math Tutoring</span></span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/#about" className={styles.navLink}>{t.about}</Link>
          <Link href="/#how-it-works" className={styles.navLink}>{t.howItWorks}</Link>
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href="/#join" className="btn-primary">{t.join}</Link>
        </nav>
      </div>
    </header>
  );
}
