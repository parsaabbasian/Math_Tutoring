import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const metadata = {
  title: 'Avin Math Tutoring',
  description: 'Personalized online math tutoring with Avin Mousavi.',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
