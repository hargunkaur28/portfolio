import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StarField from './StarField';
import SpotlightCard from './SpotlightCard';

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } },
  item: { hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } },
};

const portfolioLayers = [
  { opacity: 1, outlined: false, scale: 1    },
  { opacity: 0.55, outlined: true,  scale: 1 },
  { opacity: 0.28, outlined: true,  scale: 1 },
  { opacity: 0.10, outlined: true,  scale: 1 },
];

export default function Hero() {
  const [flipped, setFlipped] = useState(true);
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-dark)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <StarField count={140} />

      {/* Ambient glow blobs */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />

      {/* Main hero content */}
      <div className="hero-container" style={{ position: 'relative', zIndex: 1, flex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 2rem' }}>
        
        {/* Tagline top-left */}
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          style={{
            position: 'absolute',
            left: '2rem',
            top: '38%',
            maxWidth: '200px',
            fontSize: '0.75rem',
            lineHeight: 1.7,
            color: 'rgba(226,217,243,0.6)',
            fontFamily: 'var(--font-body)',
          }}
        >
          B.Tech CSE student at LPU. I build full-stack apps, crack DSA problems, and love turning complex problems into clean, functional solutions.
        </motion.p>

        {/* PORTFOLIO stacked text — left/center */}
        <div className="hero-title-container" style={{
          position: 'absolute',
          left: '50%', top: '50%',
          transform: 'translate(-40%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          userSelect: 'none',
          zIndex: 0,
        }}>
          {portfolioLayers.map((layer, i) => (
            <motion.div
              className="hero-title-layer"
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: layer.opacity }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 10vw, 9rem)',
                fontWeight: 700,
                lineHeight: 0.85,
                letterSpacing: '-0.02em',
                color: layer.outlined ? 'transparent' : 'var(--color-text-light)',
                WebkitTextStroke: layer.outlined ? '1.5px var(--color-accent)' : 'none',
              }}
            >
              PORTFOLIO
            </motion.div>
          ))}
        </div>

        {/* Portrait — 3D flip card */}
        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          style={{
            position: 'absolute',
            left: '28%',
            top: '52px',
            width: 'clamp(220px, 28vw, 360px)',
            zIndex: 2,
            perspective: '1200px',
            cursor: 'pointer',
          }}
          onClick={() => setFlipped(f => !f)}
          title="Click to flip"
        >
          {/* Inner rotating card */}
          <div style={{
            width: '100%',
            paddingTop: '140%',
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
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
                background: 'radial-gradient(ellipse at bottom, rgba(168,85,247,0.25) 0%, transparent 70%)',
              }} />
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(168,85,247,0.2)', fontFamily: 'var(--font-display)', fontSize: '8rem',
                animation: 'sparkle-pulse 3s ease-in-out infinite',
              }}>✦</div>
              <div style={{
                position: 'absolute', bottom: '1rem', left: 0, right: 0, textAlign: 'center',
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                color: 'rgba(168,85,247,0.45)', letterSpacing: '0.08em',
              }}>click to reveal ↺</div>
            </SpotlightCard>

            {/* BACK — photo */}
            <div style={{
              position: 'absolute', inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(168,85,247,0.4)',
            }}>
              <img
                src="/portrait.jpg"
                alt="Hargun Kaur"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1033, #2d1b69)';
                  e.target.parentElement.innerHTML += `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:rgba(168,85,247,0.4);gap:0.5rem"><span style="font-size:4rem">📷</span><span style="font-family:monospace;font-size:0.65rem;letter-spacing:0.1em">add /public/portrait.jpg</span></div>`;
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, rgba(99,102,241,0.15), rgba(168,85,247,0.1))',
                mixBlendMode: 'color',
              }} />
            </div>
          </div>
        </motion.div>

        {/* Social links — right side */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          style={{
            position: 'absolute',
            right: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            alignItems: 'flex-end',
          }}
        >
          {[
            { label: 'GH: /hargunkaur28', href: 'https://github.com/hargunkaur28' },
            { label: 'LI: /hargunkaur28', href: 'https://www.linkedin.com/in/hargunkaur28/' },
            { label: 'EM: hargungulati2004@gmail.com', href: 'mailto:hargungulati2004@gmail.com' },
          ].map(({ label, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + i * 0.1 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'rgba(184,174,232,0.7)',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(184,174,232,0.7)'}
            >
              {label}
            </motion.a>
          ))}
          <span className="sparkle" style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>✦</span>
        </motion.div>

        {/* Decorative sparkles */}
        <motion.span
          className="sparkle"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ position: 'absolute', top: '15%', left: '22%', fontSize: '1.4rem', zIndex: 3 }}
        >✦</motion.span>
        <motion.span
          className="sparkle"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ position: 'absolute', bottom: '20%', left: '35%', fontSize: '0.8rem', zIndex: 3 }}
        >✦</motion.span>
      </div>

      {/* Scroll down button */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.7 }}
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '3rem',
        }}
      >
        <button
          onClick={scrollToAbout}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: 'var(--color-accent)',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            lineHeight: 1.3,
            boxShadow: '0 0 18px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.2)',
            transition: 'box-shadow 0.3s ease',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }}
        >
          Scroll<br />down
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" style={{ marginTop: '2px' }}>
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>
      </motion.div>
    </section>
  );
}
