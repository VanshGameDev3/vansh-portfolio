import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { experience, links, projects, skills } from '../data';
import { Section } from './ui';

const boot = ['Unity initialized...', 'Gameplay systems loaded...', 'AI modules loaded...', 'AR/XR modules loaded...', 'Portfolio ready.'];
const cmds: Record<string, () => string[]> = {
  help: () => ['commands: ' + [...Object.keys(cmds), 'clear'].join(', ')],
  about: () => ['Unity Game Developer: gameplay programming, AR/XR, AI systems, real-time apps.'],
  skills: () => skills.map((s) => `• ${s.label}`),
  projects: () => projects.map((p) => `• ${p.title}: ${p.kind}`),
  experience: () => experience.map((e) => `• ${e.role} @ ${e.org} (${e.period})`),
  contact: () => [links.emailText, links.linkedin, links.github],
};

export function Console() {
  const box = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [val, setVal] = useState('');
  useEffect(() => {
    const el = box.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { io.disconnect(); boot.forEach((l, i) => setTimeout(() => setLines((p) => [...p, l]), i * 380)); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => { box.current?.scrollTo({ top: 1e5 }); }, [lines]);
  const run = (raw: string) => {
    const c = raw.trim().toLowerCase(); if (!c) return;
    if (c === 'clear') { setLines([]); return; }
    const f = cmds[c];
    setLines((p) => [...p, '> ' + c, ...(f ? f() : [`command not found: ${c} (try "help")`])]);
  };
  const submit = (e: FormEvent) => { e.preventDefault(); run(val); setVal(''); };
  return (
    <Section id="console" n={5} title="Build Console">
      <div className="term-wrap">
        <div className="term" ref={box} role="log" aria-label="Portfolio console output">
          {lines.map((l, i) => <div key={i} className={l.startsWith('>') ? 'cmd' : boot.includes(l) ? 'ok' : ''}>{boot.includes(l) ? '[ok] ' : ''}{l}</div>)}
        </div>
        <form className="term-in mono" onSubmit={submit}>
          <span aria-hidden="true">&gt;</span>
          <input value={val} onChange={(e) => setVal(e.target.value)} placeholder='type "help"' aria-label="Console command" autoComplete="off" spellCheck={false} />
        </form>
        <div className="paths">{Object.keys(cmds).map((c) => <button key={c} className="pbtn mono" onClick={() => run(c)}>{c}</button>)}</div>
      </div>
    </Section>
  );
}
