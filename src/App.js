// import './css/styles.css'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Statistics/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
