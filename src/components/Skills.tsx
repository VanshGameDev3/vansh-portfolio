import { useState } from 'react';
import { names, paths, skills } from '../data';
import { Section, Reveal } from './ui';

export function Skills({ active, setActive }: { active: string[]; setActive: (a: string[] | ((p: string[]) => string[])) => void }) {
  const [hover, setHover] = useState<string | null>(null);
  const shown = skills.find((s) => s.id === (hover ?? active[active.length - 1]));
  const toggle = (id: string) => setActive((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));
  const groups = [...new Set(skills.map((s) => s.group))];
  return (
    <Section id="skills" n={4} title="Skills">
      <Reveal>
        <p className="mu sm">Hover or tap a skill to see where I've used it. Selecting highlights the linked experience and projects above.</p>
        <div className="paths">
          {paths.map((p) => <button key={p.label} className="pbtn mono" onClick={() => setActive(p.skills)}>{p.label}</button>)}
          {active.length > 0 && <button className="pbtn mono" onClick={() => setActive([])}>clear</button>}
        </div>
        {groups.map((g) => (
          <div className="grp" key={g}>
            <h3 className="mono">{g}</h3>
            <div className="nodes">
              {skills.filter((s) => s.group === g).map((s) => (
                <button key={s.id} className={`node${active.includes(s.id) ? ' on' : ''}`} aria-pressed={active.includes(s.id)}
                  onMouseEnter={() => setHover(s.id)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(s.id)} onBlur={() => setHover(null)} onClick={() => toggle(s.id)}>{s.label}</button>
              ))}
            </div>
          </div>
        ))}
        <div className="detail" aria-live="polite">
          {shown ? (<><p className="mono acc">{shown.label}</p><p>{shown.note}</p>{shown.used.length > 0 && <div className="tags">{shown.used.map((u) => <span className="tag" key={u}>{names[u]}</span>)}</div>}</>) : <p className="mu">Select a skill.</p>}
        </div>
      </Reveal>
    </Section>
  );
}
