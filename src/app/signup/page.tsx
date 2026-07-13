import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';

export const metadata: Metadata = {
  title: 'Sign Up',
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <main>
      <Header />
      {/* Offset for the fixed header */}
      <div style={{ paddingTop: '75px' }}>
        <SignupForm />
      </div>
      <Footer />
    </main>
  );
}
