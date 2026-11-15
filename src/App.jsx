import About from './components/About';
import BackToTop from './components/BackToTop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GithubStats from './components/GithubStats';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { ThemeProvider } from './theme/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <div className="page-backdrop" aria-hidden="true">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
      </div>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
