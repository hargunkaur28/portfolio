import { motion } from 'framer-motion';
import StarField from './StarField';
import { SplitText } from './SplitText';

const techSkills = {
  Languages:   ['C/C++', 'JavaScript', 'Python', 'Java'],
  Frameworks:  ['HTML/CSS', 'ReactJs', 'NodeJs', 'ExpressJs'],
  Tools:       ['MySQL', 'MongoDB', 'Git', 'Git Bash'],
};

const softSkills = ['Problem-Solving', 'Teamwork', 'Leadership', 'Adaptability'];

// bar widths (approx proficiency/usage order)
const langBars  = [85, 90, 75, 70];
const frameBars = [92, 88, 85, 82];
const toolBars  = [80, 82, 90, 85];

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      style={{ background: 'var(--color-bg-dark)', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}
    >
      <StarField count={60} />
      <div style={{
        position: 'absolute', top: '-100px', right: '-80px', width: '450px', height: '450px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <motion.p className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: '0.5rem' }}>
          Tools & Abilities
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, color: 'var(--color-text-light)', marginBottom: '3.5rem', lineHeight: 1.1 }}>
          <SplitText text="Technical Skills" delay={0.04} />
        </motion.h2>

        <div className="responsive-grid-3" style={{ marginBottom: '3rem' }}>

          {/* Languages */}
          <SkillColumn
            label="Languages" sub="C/C++, JS, Python, Java"
            accentVar="var(--color-accent)"
            items={techSkills.Languages}
            bars={langBars}
            delay={0}
          />

          {/* Frameworks */}
          <SkillColumn
            label="Frameworks" sub="React, Node, Express"
            accentVar="var(--color-accent-2)"
            items={techSkills.Frameworks}
            bars={frameBars}
            delay={0.12}
          />

          {/* Tools */}
          <SkillColumn
            label="Tools & Platforms" sub="MySQL, MongoDB, Git"
            accentVar="var(--color-glow)"
            items={techSkills.Tools}
            bars={toolBars}
            delay={0.24}
          />
        </div>

        {/* Soft skills row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-star)', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>
            SOFT SKILLS
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {softSkills.map(s => (
              <span key={s} className="pill pill-dark" style={{ fontSize: '0.78rem' }}>{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillColumn({ label, sub, accentVar, items, bars, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div style={{ borderLeft: `2px solid ${accentVar}`, paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-light)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.15rem' }}>{label}</p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-star)' }}>{sub}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {items.map((s, i) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-glow)', fontWeight: 600, minWidth: '90px' }}>{s}</span>
            <div style={{ flex: 1, height: '3px', background: 'rgba(168,85,247,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${bars[i]}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: delay + 0.3 + i * 0.08 }}
                style={{ height: '100%', background: `linear-gradient(to right, var(--color-accent-2), ${accentVar})`, borderRadius: '3px' }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
