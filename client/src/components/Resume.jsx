import { motion } from 'framer-motion';

const experience = [
  { year: '2022', role: 'Marketing Intern', detail: 'Social media content creator @ Ellinz, Narbonne, France' },
  { year: '2021', role: 'Freelancer', detail: 'Consulted with clients, created logos, posters, presentations based on their requirements' },
  { year: '2020', role: 'Graphic Designer', detail: 'Designed promotional materials for events. Songhan Incubation, Viet Nam' },
];

const softTags = ['#Creativity', '#Communication', '#Detail-oriented', '#Adaptability'];

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="section-light"
      style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ghost RESUME text right side */}
      <div style={{
        position: 'absolute', right: '-1rem', top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column',
        pointerEvents: 'none', zIndex: 0,
      }}>
        {[0.6, 0.25, 0.08].map((op, i) => (
          <div key={i} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 8vw, 7rem)',
            fontWeight: 700,
            lineHeight: 0.85,
            color: 'transparent',
            WebkitTextStroke: `1.5px rgba(168,85,247,${op})`,
          }}>
            RESUME
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section label */}
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '0.5rem', color: 'var(--color-accent)' }}
        >
          Work History
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            color: 'var(--color-text-dark)',
            marginBottom: '3.5rem',
            lineHeight: 1.1,
          }}
        >
          Experience
        </motion.h2>

        {/* Experience card (gradient) + soft tags side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', alignItems: 'start' }}>

          {/* Gradient experience card */}
          <motion.div
            className="exp-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {experience.map((e, i) => (
              <div key={i} style={{
                position: 'relative',
                paddingLeft: '1.8rem',
                paddingBottom: i < experience.length - 1 ? '1.8rem' : 0,
                borderBottom: i < experience.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                marginBottom: i < experience.length - 1 ? '1.8rem' : 0,
              }}>
                <span style={{ position: 'absolute', left: 0, top: '5px', color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem' }}>✦</span>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.2rem' }}>{e.year}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '0.2rem' }}>{e.role}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>{e.detail}</p>
              </div>
            ))}
          </motion.div>

          {/* Skills side panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 700,
              color: 'var(--color-text-dark)',
              marginBottom: '1.2rem',
            }}>
              Soft Skills
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
              {softTags.map(tag => (
                <span key={tag} className="pill pill-dark"
                  style={{ fontSize: '0.75rem', color: 'var(--color-text-dark)', background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(168,85,247,0.35)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(168,85,247,0.06)',
              borderRadius: '12px',
              border: '1px solid rgba(168,85,247,0.2)',
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)', marginBottom: '0.4rem', letterSpacing: '0.08em' }}>
                DOWNLOAD
              </p>
              <a href="#" className="btn-violet" style={{ fontSize: '0.82rem' }}>
                View Full Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
