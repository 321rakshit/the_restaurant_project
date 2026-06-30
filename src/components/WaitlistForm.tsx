import { useState, type FormEvent } from 'react';
import { colors, layout } from '../tokens';
import { CheckIcon } from './icons';

type Role = '' | 'cafe' | 'hotel' | 'other';

type WaitlistEntry = {
  name: string;
  email: string;
  business: string;
  role: Role;
  city: string;
  pilot: boolean;
};

const initialEntry: WaitlistEntry = {
  name: '',
  email: '',
  business: '',
  role: '',
  city: '',
  pilot: true,
};

const fieldStyle = {
  width: '100%',
  background: colors.bgWhite,
  border: `1.5px solid ${colors.inputBorder}`,
  borderRadius: 9,
  padding: '11px 14px',
  fontSize: 15,
} as const;

const labelStyle = {
  fontSize: 13,
  fontWeight: 600,
  color: colors.textSecondary,
  display: 'block',
  marginBottom: 7,
} as const;

export function WaitlistForm() {
  const [entry, setEntry] = useState<WaitlistEntry>(initialEntry);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof WaitlistEntry>(key: K, value: WaitlistEntry[K]) =>
    setEntry((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="waitlist" style={{ background: colors.bgCream, padding: '96px 32px' }}>
      <div style={{ maxWidth: layout.maxWidthForm, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(28px,3.5vw,38px)',
            fontWeight: 800,
            letterSpacing: '-.025em',
            color: colors.textPrimary,
            marginBottom: 10,
          }}
        >
          Join the waitlist.
        </h2>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: colors.textMuted, marginBottom: 40 }}>
          We'll email you when we're ready for pilots — and only then. No newsletter, no spam.
        </p>

        {submitted ? (
          <div
            role="status"
            style={{
              background: colors.bgWhite,
              border: `1px solid ${colors.successBorder}`,
              borderRadius: 14,
              padding: 32,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: colors.successBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <CheckIcon />
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: colors.textPrimary, marginBottom: 6 }}>
              You're on the list.
            </div>
            <p style={{ fontSize: 14.5, color: colors.textMuted }}>
              We'll be in touch when we're ready for pilots.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="g-2form">
              <div>
                <label htmlFor="wl-name" style={labelStyle}>
                  Name
                </label>
                <input
                  id="wl-name"
                  className="field"
                  type="text"
                  required
                  value={entry.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Your name"
                  style={fieldStyle}
                />
              </div>
              <div>
                <label htmlFor="wl-email" style={labelStyle}>
                  Email
                </label>
                <input
                  id="wl-email"
                  className="field"
                  type="email"
                  required
                  value={entry.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@example.com"
                  style={fieldStyle}
                />
              </div>
            </div>

            <div>
              <label htmlFor="wl-business" style={labelStyle}>
                Business name <span style={{ color: colors.textFaint, fontWeight: 400 }}>(optional)</span>
              </label>
              <input
                id="wl-business"
                className="field"
                type="text"
                value={entry.business}
                onChange={(e) => update('business', e.target.value)}
                placeholder="e.g. Café Aroha"
                style={fieldStyle}
              />
            </div>

            <div className="g-2form">
              <div>
                <label htmlFor="wl-role" style={labelStyle}>
                  Role
                </label>
                <select
                  id="wl-role"
                  className="field role-option"
                  value={entry.role}
                  onChange={(e) => update('role', e.target.value as Role)}
                  style={fieldStyle}
                >
                  <option value="">Select role</option>
                  <option value="cafe">Cafe / Restaurant owner</option>
                  <option value="hotel">Hotel / Resort manager</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="wl-city" style={labelStyle}>
                  City
                </label>
                <input
                  id="wl-city"
                  className="field"
                  type="text"
                  required
                  value={entry.city}
                  onChange={(e) => update('city', e.target.value)}
                  placeholder="e.g. Mumbai"
                  style={fieldStyle}
                />
              </div>
            </div>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', marginTop: 6 }}>
              <input
                type="checkbox"
                checked={entry.pilot}
                onChange={(e) => update('pilot', e.target.checked)}
                style={{ marginTop: 3, width: 16, height: 16, accentColor: colors.accent, flexShrink: 0 }}
              />
              <span style={{ fontSize: 14, lineHeight: 1.55, color: colors.textSecondary }}>
                I'd be open to being a design partner / pilot restaurant
              </span>
            </label>

            <button
              type="submit"
              className="btn-primary"
              style={{
                marginTop: 8,
                background: colors.accent,
                color: colors.bgWhite,
                fontSize: 15,
                fontWeight: 700,
                padding: 14,
                borderRadius: 10,
              }}
            >
              Join waitlist
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
