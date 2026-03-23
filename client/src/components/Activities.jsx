import { motion } from 'framer-motion';
import StarField from './StarField';
import { SplitText } from './SplitText';

const achievements = [
  {
    year: 'Jul 2025',
    title: 'Solved 100+ DSA Problems on LeetCode',
    detail: 'Strengthened logical reasoning with a focus on Arrays, Recursion, and Dynamic Programming.',
  },
  {
    year: 'Apr 2025',
    title: '50-Days LeetCode Challenge 2025',
    detail: 'Demonstrated consistency and strong commitment to algorithmic practice through daily problem-solving.',
  },
  {
    year: 'Mar 2025',
    title: 'Cash Prize — Top 20, CTF Competition',
    detail: 'Demonstrated skills in Cryptography to solve complex security challenges.',
  },
];

const training = {
  title: 'DSA Training Program',
  org: 'Lovely Professional University',
  duration: 'Jun 2025 – Jul 2025',
  stack: 'C++',
  detail: 'Intensive DSA program taught by industry professional Manit Saharan. Solved structured problem sets mapped to real-world engineering workflows.',
};

export default function Activities() {
  return (
    <section id="activities" className="section-light" style={{ padding: '5rem 2rem 6rem' }}>
      <div className="responsive-grid-2" style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>

          <p className="section-eyebrow" style={{ marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Milestones</p>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-dark)', fontSize: '2.8rem', fontWeight: 700, marginBottom: '2rem' }}>
            <SplitText text="Achievements" delay={0.05} />
          </h2>

          <div className="timeline-line">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.13 }}
                style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '1.8rem' }}
              >
                <span className="timeline-dot">✦</span>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.2rem' }}>{a.year}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#1a1033', fontWeight: 700 }}>{a.title}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#3d3456', lineHeight: 1.6 }}>{a.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>

          <p className="section-eyebrow" style={{ marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Industry Training</p>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-dark)', fontSize: '2.8rem', fontWeight: 700, marginBottom: '2rem' }}>
            <SplitText text="Training" delay={0.05} />
          </h2>

          {/* Training card */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid rgba(168,85,247,0.2)',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(168,85,247,0.07)',
          }}>
            {/* Card top band */}
            <div style={{ height: '5px', background: 'linear-gradient(to right, #6366f1, #a855f7)' }} />
            <div style={{ padding: '1.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-accent-2)', letterSpacing: '0.08em' }}>
                  {training.stack}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#a09dbf' }}>
                  {training.duration}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#1a1033', marginBottom: '0.3rem' }}>
                {training.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.8rem' }}>
                {training.org}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.84rem', color: '#3d3456', lineHeight: 1.7 }}>
                {training.detail}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
