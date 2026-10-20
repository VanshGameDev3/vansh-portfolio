import { links } from '../data';
import { Section, Reveal, Icon } from './ui';

export function Contact() {
  return (
    <Section id="contact" n={6} title="Contact">
      <Reveal>
        <p className="ask">Interested in building interactive experiences together?</p>
        <ul className="clist">
          <li><a href={links.email}><Icon.mail /> {links.emailText}</a></li>
          <li><a href={links.linkedin} target="_blank" rel="noopener noreferrer"><Icon.linkedin /> LinkedIn</a></li>
          <li><a href={links.github} target="_blank" rel="noopener noreferrer"><Icon.github /> GitHub</a></li>
        </ul>
        <a className="btn pri" href={links.resume} download="Vansh_Pandya_CV.pdf"><Icon.download /> Download Resume</a>
      </Reveal>
    </Section>
  );
}
