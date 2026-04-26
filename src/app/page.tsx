import CustomLoader from '@/components/CustomLoader';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <CustomLoader />
      <Navbar />
      <main className="bg-black min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
