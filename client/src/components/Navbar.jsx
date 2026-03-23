import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-glass py-3' : 'py-5'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}
        className="flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span className="sparkle" style={{ fontSize: '1.1rem' }}>✦</span>
          <span style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-light)', fontSize: '1.2rem', fontWeight: 600 }}>
            Hargun Kaur
          </span>
        </a>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-star)',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--color-accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--color-star)'}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-violet" style={{ fontSize: '0.85rem', padding: '0.5em 1.3em' }}>
            Get in touch!
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
