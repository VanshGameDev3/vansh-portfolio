import { experience } from '../data';
import { Section, Reveal } from './ui';

export function Experience({ linked }: { linked: Set<string> }) {
  return (
    <Section id="experience" n={2} title="Experience">
      <div className="tl">
        {experience.map((e, i) => (
          <Reveal key={e.id} className={`tl-item${linked.has(e.id) ? ' linked' : ''}`} delay={i * 120}>
            <div className="row"><h3>{e.role}</h3><span className="mono mu">{e.period}</span></div>
            <p className="org">{e.org} · {e.place}</p>
            <p>{e.summary}</p>
            <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <div className="tags">{e.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
