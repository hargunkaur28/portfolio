import StarField from './StarField';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section-dark" style={{ padding: '4rem 2rem 2rem', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(168,85,247,0.1)' }}>
      <StarField count={40} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="sparkle" style={{ fontSize: '1.2rem' }}>✦</span>
              <span style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-light)', fontSize: '1.6rem', fontWeight: 600 }}>Hargun Kaur</span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-star)', fontSize: '0.85rem', maxWidth: '280px' }}>
              B.Tech CSE @ LPU — Full-Stack Developer &amp; Problem Solver, building things across the cosmos.
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { label: 'About', href: '#about' },
              { label: 'Education', href: '#education' },
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-star)', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--color-accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--color-star)'}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {[
              { label: 'GH', href: 'https://github.com/hargunkaur28' },
              { label: 'LI', href: 'https://www.linkedin.com/in/hargunkaur28/' },
              { label: 'EM', href: 'mailto:hargungulati2004@gmail.com' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : undefined} rel="noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%',
                border: '1px solid rgba(168,85,247,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'var(--color-star)', textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(168,85,247,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)'; e.currentTarget.style.color = 'var(--color-star)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(168,85,247,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(184,174,232,0.4)' }}>
            © {currentYear} Hargun Kaur — All rights reserved
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(184,174,232,0.4)' }}>
            Designed &amp; built with <span className="sparkle" style={{ fontSize: '0.8em' }}>✦</span> in the cosmos
          </p>
        </div>
      </div>
    </footer>
  );
}
