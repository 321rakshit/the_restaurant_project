import { useInView } from '../hooks/useInView';
import { contact } from '../contact';

export function Contact() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="block" id="contact">
      <div ref={ref} className={`wrap reveal${inView ? ' in' : ''}`}>
        <span className="kicker">Let's talk</span>
        <h2 className="title">No forms. Just talk to us.</h2>
        <p className="what-body">
          If you run a restaurant, cafe, food business, or resort — or you're just curious about what AI could do
          for you — reach out directly.
        </p>
        <div className="contact-box">
          <a href={contact.phoneHref}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call or WhatsApp: {contact.phoneDisplay}
          </a>
          <a href={contact.emailHref}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
