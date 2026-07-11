import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalTutoring from '../components/GlobalTutoring';

export const metadata: Metadata = {
  title: 'Global Tutoring',
  description:
    'Bilingual online math tutoring for students in the United States, United Kingdom, Australia, and Iran, built around your child\'s own school curriculum.',
};

export default function GlobalTutoringPage() {
  return (
    <main>
      <Header />
      {/* Offset for the fixed header */}
      <div style={{ paddingTop: '75px' }}>
        <GlobalTutoring />
      </div>
      <Footer />
    </main>
  );
}
