import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Project from '@/components/Project';
import Investor from '@/components/Investor';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import '../app/globals.css';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Project />
        <Investor />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
