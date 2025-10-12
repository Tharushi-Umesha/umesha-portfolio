import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { RevealOnScroll } from './components/RevealOnScroll';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Wrap each section with RevealOnScroll */}
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