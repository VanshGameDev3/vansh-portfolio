import { useEffect, useState } from 'react';
const items = [['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'], ['skills', 'Skills'], ['console', 'Console'], ['contact', 'Contact']];

export function Navbar() {
  const [on, setOn] = useState('');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setOn(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    items.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="brand mono" aria-label="Vansh Pandya, home">vansh.pandya<span className="cur">_</span></a>
        <button className="burger" aria-expanded={open} aria-controls="menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        <nav id="menu" aria-label="Primary" className={`nl${open ? ' open' : ''}`}>
          {items.map(([id, label]) => <a key={id} href={`#${id}`} className={on === id ? 'on' : ''} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
