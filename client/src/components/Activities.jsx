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

const experience = {
  title: 'Web Developer Intern',
  org: 'Avani Enterprises',
  url: 'https://www.avanienterprises.in/',
  duration: 'Mar 2026 – Present',
  stack: 'React.js, Node.js, MongoDB, Express.js, Tailwind CSS',
  detail: 'Contributing to the full-lifecycle design, development, and deployment of dynamic web applications using React.js, Node.js, and MongoDB. Collaborating closely with UI/UX designers and project managers to translate requirements into responsive, cross-browser compatible interfaces. Responsible for troubleshooting technical issues, optimizing application performance, and writing clean, structured, reusable code following strict version control standards. Actively participating in code reviews, testing, and team sprint meetings to ensure high-quality software delivery.',
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

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>

          <p className="section-eyebrow" style={{ marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Professional Profile</p>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-dark)', fontSize: '2.8rem', fontWeight: 700, marginBottom: '2rem' }}>
            <SplitText text="Experience" delay={0.05} />
          </h2>

          {/* Experience card */}
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
                  {experience.stack}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#a09dbf' }}>
                  {experience.duration}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#1a1033', marginBottom: '0.3rem' }}>
                {experience.title}
              </h3>
              <a 
                href={experience.url}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-glow)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-accent)'}
              >
                {experience.org} ↗
              </a>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.84rem', color: '#3d3456', lineHeight: 1.7 }}>
                {experience.detail}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
