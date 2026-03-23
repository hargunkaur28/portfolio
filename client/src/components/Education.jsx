import { motion } from 'framer-motion';
import StarField from './StarField';
import { SplitText } from './SplitText';

const education = [
  {
    years: 'Aug 2023 – Present',
    school: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    field: 'B.Tech — Computer Science & Engineering',
    extra: 'CGPA: 8.26',
  },
  {
    years: 'May 2021 – Mar 2023',
    school: 'M.G.N. Public School',
    location: 'Jalandhar, Punjab',
    field: 'Intermediate — PCM',
    extra: 'Percentage: 75%',
  },
  {
    years: 'Mar 2020 – Apr 2021',
    school: 'M.G.N. Public School',
    location: 'Jalandhar, Punjab',
    field: 'Matriculation',
    extra: 'Percentage: 93.2%',
  },
];

export default function Education() {
  return (
    <section
      id="education"
      style={{
        position: 'relative',
        background: 'var(--color-bg-dark)',
        padding: '6rem 2rem',
        overflow: 'hidden',
      }}
    >
      <StarField count={60} />

      <div style={{
        position: 'absolute', top: '20%', left: '-80px', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '0.6rem' }}
        >
          Academic Background
        </motion.p>

        <div style={{ position: 'relative', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 700,
              color: 'var(--color-text-light)',
              lineHeight: 1,
              position: 'relative',
              zIndex: 1,
            }}
          >
            <SplitText text="Education" delay={0.05} />
          </motion.h2>
          <div style={{
            position: 'absolute', top: '-0.3em', left: '-0.05em',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 10vw, 9rem)',
            fontWeight: 700,
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(168,85,247,0.28)',
            lineHeight: 1,
            pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap',
          }}>
            EDUCATION
          </div>
        </div>

        {/* Timeline — horizontal on desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', position: 'relative' }}>
          <div style={{
            position: 'absolute', top: '16px', left: '16px', right: '16px',
            height: '1px',
            background: 'linear-gradient(to right, var(--color-accent), rgba(168,85,247,0.2))',
            zIndex: 0,
          }} />

          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ paddingTop: '2.5rem', paddingRight: '2rem', position: 'relative' }}
            >
              <div style={{
                position: 'absolute', top: '10px', left: 0,
                width: '12px', height: '12px', borderRadius: '50%',
                background: 'var(--color-accent)',
                boxShadow: '0 0 12px rgba(168,85,247,0.6)',
                transform: 'translateX(-50%)', zIndex: 1,
              }} />

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                {e.years}
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-text-light)', marginBottom: '0.15rem', lineHeight: 1.3 }}>
                {e.school}
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-star)', marginBottom: '0.3rem' }}>
                {e.location}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--color-star)', lineHeight: 1.6 }}>
                {e.field}
              </p>
              <span style={{
                display: 'inline-block', marginTop: '0.5rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'var(--color-glow)', background: 'rgba(168,85,247,0.1)',
                padding: '0.2em 0.7em', borderRadius: '999px',
                border: '1px solid rgba(168,85,247,0.25)',
              }}>
                {e.extra}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
