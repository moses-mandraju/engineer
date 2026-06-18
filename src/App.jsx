import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import Background from "./components/Background";

function App() {

  return (

    <div className="text-white background-glow">

   
      <ParticlesBackground />
      <Background />
      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Experience />

      <Skills />

      <Projects />

      <Achievements />

      <Contact />

      <Footer />

    </div>

  );

}

export default App;