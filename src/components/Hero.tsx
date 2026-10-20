import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { links } from '../data';
import { Icon } from './ui';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.setProperty('--mx', `${x * 100}%`); el.style.setProperty('--my', `${y * 100}%`);
    el.style.setProperty('--rx', `${(x - 0.5) * -10}px`); el.style.setProperty('--ry', `${(y - 0.5) * -10}px`);
  };
  return (
    <section id="top" className="hero" ref={ref} onMouseMove={onMove} aria-label="Introduction">
      <div className="wrap hero-in">
        <div>
          <p className="status mono"><i /> XR/AR Unity Developer Intern · Valkyra Technologies</p>
          <h1>Vansh Pandya</h1>
          <p className="role">Unity Game Developer</p>
          <p className="sub mono">Gameplay Programmer • AR/XR Developer • Interactive Systems</p>
          <p className="intro">I build gameplay systems, AI and AR features in Unity and C#. Hands-on with real-time interactive apps, from enemy AI and combat to AR Foundation and Android builds.</p>
          <div className="btns">
            <a className="btn pri" href="#projects">View Projects <Icon.arrow /></a>
            <a className="btn" href={links.resume} target="_blank" rel="noopener noreferrer">View Resume</a>
            <a className="btn" href="#contact">Contact Me</a>
          </div>
          <div className="soc">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon.linkedin /></a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon.github /></a>
          </div>
        </div>
        <figure className="frame">
          <div className="frame-img"><img src="/vansh.jpg" alt="Portrait of Vansh Pandya, Unity Game Developer" width="720" height="1396" /></div>
          <figcaption className="insp mono" aria-label="Profile summary">
            <b>Inspector</b>
            <span>Name<em>Vansh Pandya</em></span>
            <span>Role<em>Gameplay Programmer</em></span>
            <span>Engine<em>Unity</em></span>
            <span>Language<em>C#</em></span>
            <span>Focus<em>AR/XR · AI</em></span>
            <span>Location<em>Mumbai, IN</em></span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
