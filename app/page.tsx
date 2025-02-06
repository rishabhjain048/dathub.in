
import Hero from '@/components/Hero';
import About from '@/components/About';
import Project from '@/components/Project';
// import Investor from '@/components/Investor';
import Contact from '@/components/Contact';

import '../app/globals.css';
import CustomerReviews from '@/components/CustomerReviews';


export default function Home() {
  return (
    <>
      
      <main>
        <Hero />
        <About />
        <Project />
        {/* <Investor /> */}
        <CustomerReviews/>
        <Contact />
      </main>
      
    </>
  );
}
