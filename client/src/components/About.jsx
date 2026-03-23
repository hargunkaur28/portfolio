import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, Download } from 'lucide-react';
import { SplitText } from './SplitText';
import SpotlightCard from './SpotlightCard';

export default function About() {
  const [flipped, setFlipped] = useState(true);
  return (
    <section id="about" className="section-light" style={{ padding: '6rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

        {/* Left: Bio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 700, color: 'var(--color-text-dark)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            <SplitText text="Hello, I'm Hargun!" delay={0.06} />
          </h2>

          <p style={{ fontFamily: 'var(--font-body)', color: '#3d3456', fontSize: '0.97rem', lineHeight: 1.85, marginBottom: '2rem', maxWidth: '440px' }}>
            I'm a B.Tech Computer Science student at Lovely Professional University, passionate about full-stack development and problem-solving.
            I love building meaningful software — from data-driven platforms to intelligent chatbots — and am constantly expanding my skills through hands-on projects and competitive challenges.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'flex-start' }}>
            <a href="https://www.linkedin.com/in/hargunkaur28/" className="link-bar" target="_blank" rel="noreferrer">
              <Search size={15} />
              linkedin.com/in/hargunkaur28
            </a>
            <a href="https://github.com/hargunkaur28" className="link-bar" target="_blank" rel="noreferrer">
              <Code2 size={15} />
              github.com/hargunkaur28
            </a>
            <a href="/Hargun_Kaur_CV.pdf" download="Hargun_Kaur_CV.pdf" className="btn-violet" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6em 1.5em', fontSize: '0.85rem', marginTop: '0.8rem', boxShadow: '0 4px 15px rgba(168,85,247,0.3)' }}>
              <Download size={14} /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Right: Photo + Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ position: 'relative', paddingBottom: '80px' }}>

          {/* Navy accent rect behind photo */}
          <div style={{
            position: 'absolute', top: '-16px', left: '-16px',
            width: '80%', height: '80%',
            background: 'var(--color-bg-dark)', borderRadius: '12px', zIndex: 0,
          }} />

          {/* 3D FLIP CARD — click to flip, auto-flips once on load */}
          <div
            onClick={() => setFlipped(f => !f)}
            style={{
              position: 'relative', zIndex: 1,
              width: '75%', marginLeft: 'auto',
              perspective: '1200px',
              cursor: 'pointer',
            }}
            title="Click to flip"
          >
            {/* Inner card — rotates */}
            <div style={{
              width: '100%',
              paddingTop: '130%',
              position: 'relative',
              transformStyle: 'preserve-3d',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.75s cubic-bezier(0.4, 0.2, 0.2, 1)',
              borderRadius: '14px',
            }}>

              {/* FRONT — cosmic gradient + Spotlight */}
              <SpotlightCard
                spotlightColor="rgba(168, 85, 247, 0.35)"
                style={{
                  position: 'absolute', inset: 0,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  borderRadius: '14px',
                  background: 'linear-gradient(155deg, #1a1033 0%, #2d1b69 40%, #0f1535 70%, #1a0a2e 100%)',
                  boxShadow: '0 8px 40px rgba(168,85,247,0.2)',
                }}
              >
                {/* Ambient glow */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
                  background: 'radial-gradient(ellipse at bottom, rgba(168,85,247,0.25) 0%, transparent 70%)',
                }} />
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '9rem',
                  color: 'rgba(168,85,247,0.2)',
                  position: 'relative', zIndex: 1,
                  animation: 'sparkle-pulse 3s ease-in-out infinite',
                }}>✦</span>
                {/* Flip hint */}
                <div style={{
                  position: 'absolute', bottom: '1rem',
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  color: 'rgba(168,85,247,0.5)', letterSpacing: '0.08em',
                }}>
                  click to reveal ↺
                </div>
              </SpotlightCard>

              {/* BACK — photo */}
              <div style={{
                position: 'absolute', inset: 0,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 8px 40px rgba(168,85,247,0.35)',
              }}>
                <img
                  src="/portrait.jpg"
                  alt="Hargun Kaur"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={e => {
                    // Fallback if photo not yet added
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1033, #2d1b69)';
                    e.target.parentElement.innerHTML += `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:rgba(168,85,247,0.4);gap:0.5rem"><span style="font-size:4rem">📷</span><span style="font-family:monospace;font-size:0.7rem;letter-spacing:0.1em">add /public/portrait.jpg</span></div>`;
                  }}
                />
                {/* Violet duotone overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.1) 100%)',
                  mixBlendMode: 'color',
                }} />
              </div>
            </div>
          </div>

          {/* Floating badge — University */}
          <div style={{
            position: 'absolute', top: '22%', left: '-5px', zIndex: 2,
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem', padding: '0.4em 1em',
            background: 'var(--color-accent)', color: 'white', borderRadius: '999px',
            boxShadow: '0 4px 15px rgba(168,85,247,0.4)', whiteSpace: 'nowrap',
          }}>
            LPU — CSE
          </div>

          {/* Floating badge — CGPA */}
          <div style={{
            position: 'absolute', top: '40%', right: '-10px', zIndex: 2,
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem', padding: '0.4em 1em',
            background: 'var(--color-accent-2)', color: 'white', borderRadius: '999px',
            boxShadow: '0 4px 15px rgba(99,102,241,0.5)',
          }}>
            CGPA: 8.26
          </div>

          {/* Contact Card */}
          <div style={{
            position: 'absolute', bottom: '0', left: '0', right: '10%',
            zIndex: 2,
            background: 'var(--color-bg-dark)',
            borderRadius: '14px', padding: '1.4rem 1.6rem',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
          }}>
            <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-light)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem' }}>
              Contact
            </p>
            {[
              { icon: '📍', text: 'Jalandhar, Punjab, India' },
              { icon: '✉️', text: 'hargungulati2004@gmail.com' },
              { icon: '📞', text: '+91 8699834174' },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '0.8rem' }}>{icon}</span>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-star)', fontSize: '0.8rem' }}>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
