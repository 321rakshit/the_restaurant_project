import { contact } from '../contact';
import { HeroMark } from './HeroMark';

export function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" />
            An AI &amp; tech enablement company for the food business
          </span>
          <h1 className="hero-title display">
            We bring AI and modern tech to the{' '}
            <span className="underline-word">food business.</span>
          </h1>
          <p className="lead">
            We're the AI and tech team that food businesses don't have in-house — but should. Platofy builds simple,
            practical AI products, and translates the technology so you don't have to.
          </p>
          <div className="cta-row">
            <a href={contact.phoneHref} className="btn btn-call">Call us</a>
            <a
              href={contact.whatsappHref}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
            <a href={contact.emailHref} className="btn btn-ghost">Email us</a>
          </div>
          <p className="hero-caption">
            <span className="live" />
            Two products in development. More on the way.
          </p>
        </div>

        <HeroMark />
      </div>
    </header>
  );
}
