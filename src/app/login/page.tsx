import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

export const metadata: Metadata = {
  title: 'Log In',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main>
      <Header />
      {/* Offset for the fixed header */}
      <div style={{ paddingTop: '75px' }}>
        <LoginForm />
      </div>
      <Footer />
    </main>
  );
}
