import { Section, Reveal } from './ui';
const focus = ['Gameplay programming', 'AR/XR development', 'AI systems', 'Real-time interactive applications', 'Debugging', 'Optimization', 'Feature integration'];

export function About() {
  return (
    <Section id="about" n={1} title="About">
      <div className="about">
        <Reveal>
          <p>I'm a Unity game developer who works mostly in C#. My work sits across gameplay programming, AR/XR features and the AI behind enemies and NPCs.</p>
          <p>I've built a 2D top-down action game on my own, a mobile 2-player mini-game collection in a group, and worked as an intern on a 3D Snake game and an AR product. Most of the job is the less glamorous part: debugging, optimizing and integrating features so everything plays smoothly.</p>
          <p className="mu">B.Sc.IT, SVKM's Usha Pravin Gandhi College of Arts, Science and Commerce (2023–2026). NSS volunteer 2023–2025, recognized as "Volunteer of the Year".</p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="focus mono" aria-label="Areas of focus">{focus.map((f) => <li key={f}>{f}</li>)}</ul>
        </Reveal>
      </div>
    </Section>
  );
}
