import { motion } from 'framer-motion';
import { SplitText } from './SplitText';

const certifications = [
  {
    id: 1,
    name: 'Privacy and Security in Social Media',
    issuer: 'NPTEL',
    year: 'Oct 2025',
    verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS117S135870176010512483', // Add your link here
  },
  {
    id: 2,
    name: 'Digital Systems: From Logic Gates to Processors',
    issuer: 'Coursera — Universitat Autònoma de Barcelona',
    year: 'Nov 2024',
    verifyUrl: 'https://www.coursera.org/verify/77OPMQC6WGEN', // Add your link here
  },
  {
    id: 3,
    name: 'The Bits and Bytes of Computer Networking',
    issuer: 'Coursera — Google',
    year: 'Oct 2024',
    verifyUrl: 'https://www.coursera.org/verify/PIJ64Y1R8VLH', // Add your link here
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-light"
      style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ghost CERTIFIED text */}
      <div style={{
        position: 'absolute', right: '-1rem', top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column',
        pointerEvents: 'none', zIndex: 0,
      }}>
        {[0.6, 0.25, 0.07].map((op, i) => (
          <div key={i} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            fontWeight: 700,
            lineHeight: 0.85,
            color: 'transparent',
            WebkitTextStroke: `1.5px rgba(168,85,247,${op})`,
          }}>
            CERTIFIED
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <motion.p className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: '0.5rem', color: 'var(--color-accent)' }}>
          Credentials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, color: 'var(--color-text-dark)', marginBottom: '3.5rem', lineHeight: 1.1 }}>
          <SplitText text="Certifications" delay={0.05} />
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '820px' }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem',
                padding: '1.4rem 1.8rem',
                background: 'white', borderRadius: '14px',
                border: '1px solid rgba(168,85,247,0.15)',
                boxShadow: '0 2px 20px rgba(168,85,247,0.06)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.45)'; e.currentTarget.style.boxShadow = '0 4px 25px rgba(168,85,247,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.15)'; e.currentTarget.style.boxShadow = '0 2px 20px rgba(168,85,247,0.06)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{
                  width: '44px', height: '44px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', color: 'white', fontSize: '0.85rem', fontWeight: 700,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem', fontWeight: 700, color: 'var(--color-text-dark)', marginBottom: '0.15rem' }}>
                    {cert.name}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#5a4d7a' }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                  color: 'var(--color-accent)', background: 'rgba(168,85,247,0.08)',
                  padding: '0.25em 0.7em', borderRadius: '999px',
                  border: '1px solid rgba(168,85,247,0.2)',
                  whiteSpace: 'nowrap',
                }}>
                  {cert.year}
                </span>
                <a
                  href={cert.verifyUrl}
                  target={cert.verifyUrl !== '#' ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                    color: cert.verifyUrl === '#' ? 'rgba(90,77,122,0.35)' : 'var(--color-accent-2)',
                    textDecoration: 'none',
                    cursor: cert.verifyUrl === '#' ? 'not-allowed' : 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    if (cert.verifyUrl !== '#') {
                      e.currentTarget.style.color = 'var(--color-accent)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (cert.verifyUrl !== '#') {
                      e.currentTarget.style.color = 'var(--color-accent-2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {cert.verifyUrl === '#' ? 'add link' : 'Verify ↗'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
