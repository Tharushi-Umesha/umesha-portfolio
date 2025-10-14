import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/AnimatedPracticalBackground';
import { MobileMenu } from './components/MobileMenu';
import { RevealOnScroll } from './components/RevealOnScroll';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { TerminalSection } from './components/sections/Terminal';
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [startMusic, setStartMusic] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(true);
    setStartMusic(true);
  };

  return (
    <>
      <CustomCursor /> {/* Move this outside so it's always visible */}

      {!isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} startMusic={startMusic} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ParticleBackground />

        <RevealOnScroll>
          <Home />
        </RevealOnScroll>

        <RevealOnScroll>
          <About />
        </RevealOnScroll>

        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>

        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </div>
    </>
  );
}

export default App;