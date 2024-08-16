// app/page.js

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Statistics />
      <Contact />
      <Footer />
    </>
  );
}

