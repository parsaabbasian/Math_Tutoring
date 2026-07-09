import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import GlobalTutoring from './components/GlobalTutoring';
import Packages from './components/Packages';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <GlobalTutoring />
      <Packages />
      <FAQ limit={4} />
      <Contact />
      <Footer />
    </main>
  );
}
