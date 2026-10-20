import { useState } from 'react';
import { skills } from './data';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Console } from './components/Console';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [active, setActive] = useState<string[]>([]);
  const linked = new Set(skills.filter((s) => active.includes(s.id)).flatMap((s) => s.used));
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><About /><Experience linked={linked} /><Projects linked={linked} />
        <Skills active={active} setActive={setActive} /><Console /><Contact />
      </main>
      <Footer />
    </>
  );
}
