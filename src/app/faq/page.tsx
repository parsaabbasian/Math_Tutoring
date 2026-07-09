import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions from parents and students about Avin Math Tutoring — qualifications, pricing, online and in-person lessons, scheduling, and more.',
};

export default function FaqPage() {
  return (
    <main>
      <Header />
      {/* Offset for the fixed header */}
      <div style={{ paddingTop: '75px' }}>
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
