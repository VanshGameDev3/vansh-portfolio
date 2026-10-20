import type { CSSProperties, MouseEvent } from 'react';
import { links, projects } from '../data';
import type { Project } from '../data';
import { Section, Reveal, Icon } from './ui';

function Media({ p }: { p: Project }) {
  if (p.media?.type === 'video') return <video className="media" src={p.media.src} autoPlay muted loop playsInline aria-label={`${p.title} gameplay`} />;
  if (p.media?.type === 'image') {
    const m = p.media;
    const tint = { '--art': m.tint ?? '#8a909a', '--art2': m.tint2 ?? m.tint ?? '#8a909a' } as CSSProperties;
    return (
      <div className="media art" style={tint}>
        <div className="art-in"><img src={m.src} alt={m.alt ?? `${p.title} cover art`} width={m.w} height={m.h} loading="lazy" decoding="async" /></div>
      </div>
    );
  }
  return <div className="media" role="img" aria-label={`${p.title} gameplay capture placeholder`}><span className="mono">viewport · capture pending</span></div>;
}
const spot = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--cx', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--cy', `${e.clientY - r.top}px`);
};

export function Projects({ linked }: { linked: Set<string> }) {
  return (
    <Section id="projects" n={3} title="Projects">
      <div className="grid2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 120}>
            <article className={`card${linked.has(p.id) ? ' linked' : ''}`} onMouseMove={spot}>
              <Media p={p} />
              <div className="card-b">
                <p className="mono mu sm">{p.period} · {p.kind}</p>
                <h3>{p.title}</h3>
                <p className="mu sm">{p.role}</p>
                <p>{p.desc}</p>
                <ol className="sys mono">{p.systems.map((s) => <li key={s}>{s}</li>)}</ol>
                <div className="tags">{p.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">{p.cta ? <Icon.arrow /> : <Icon.github />} {p.cta ?? 'View Project'}</a>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mu sm more">More code on <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></p>
    </Section>
  );
}
