import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarField from './StarField';
import { ExternalLink, Code2 } from 'lucide-react';
import TiltCard from './TiltCard';
import { SplitText } from './SplitText';

const CATEGORIES = ['All', 'Web App', 'Full Stack', 'AI/Chatbot'];

const PROJECTS = [
  {
    _id: '1',
    title: 'Student Dropout Analysis',
    category: 'Full Stack',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Chart.js', 'JWT', 'Nodemailer', 'Twilio API'],
    description: 'Full-stack platform evaluating student attrition risks by correlating academic performance, attendance patterns, and socio-economic factors. Features an interactive dashboard with Chart.js for real-time trend analysis.',
    githubUrl: 'https://github.com/Harleen3108/Student-analysis', // Add specific repo URL
    liveUrl: null,
    year: 'Dec 2025',
  },
  {
    _id: '2',
    title: 'TrackWise',
    category: 'Web App',
    tags: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'PHP', 'SQL', 'Leaflet.js'],
    description: 'Railway rake scheduling & forecasting system that predicts delays using historical patterns and real-time operational data. Features live train tracking and route visualization with Leaflet.js.',
    githubUrl: 'https://github.com/hargunkaur28/Trackwise',
    liveUrl: 'https://track-wise-train-scheduling.vercel.app/', // Add your live link here
    year: 'April 2025',
  },
  {
    _id: '3',
    title: 'Pairfect',
    category: 'AI/Chatbot',
    tags: ['JavaScript', 'HTML', 'CSS', 'Spoonacular API'],
    description: 'Personality-based food pairing chatbot that maps user personality traits and flavor preferences to personalized meal suggestions. Integrates Spoonacular API for real-time recipe retrieval.',
    githubUrl: 'https://github.com/hargunkaur28/Food_pairing_chatbot', // Add specific repo URL
    liveUrl: null,
    year: 'March 2025',
  },
];

const categoryAccent = {
  'Full Stack': '#a855f7',
  'Web App': '#6366f1',
  'AI/Chatbot': '#c084fc',
};

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <section id="projects" style={{ background: 'var(--color-bg-dark)', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <StarField count={80} />

      <div style={{
        position: 'absolute', bottom: '-5%', right: '-80px', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <motion.p className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: '0.5rem' }}>
          Selected Work
        </motion.p>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, color: 'var(--color-text-light)', lineHeight: 1.1 }}>
            <SplitText text="Projects" delay={0.05} /> <span className="sparkle" style={{ fontSize: '0.6em' }}>✦</span>
          </motion.h2>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                  padding: '0.4em 1.1em', borderRadius: '999px',
                  border: `1.5px solid ${active === cat ? 'var(--color-accent)' : 'rgba(168,85,247,0.25)'}`,
                  background: active === cat ? 'var(--color-accent)' : 'transparent',
                  color: active === cat ? 'white' : 'var(--color-star)',
                  cursor: 'pointer', transition: 'all 0.25s ease',
                  boxShadow: active === cat ? '0 0 14px rgba(168,85,247,0.5)' : 'none',
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="responsive-grid-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project._id}
                className="glass-card"
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ padding: '0', overflow: 'hidden' }}
              >
                <TiltCard style={{ height: '100%', borderRadius: 'inherit' }}>
                  {/* Color band top */}
                  <div style={{
                    height: '5px',
                    borderRadius: '16px 16px 0 0',
                    background: `linear-gradient(to right, ${categoryAccent[project.category] || '#a855f7'}, rgba(168,85,247,0.25))`,
                  }} />

                  <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', height: 'calc(100% - 5px)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.9rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: categoryAccent[project.category] || 'var(--color-accent)', letterSpacing: '0.1em' }}>
                        {project.category}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(184,174,232,0.4)' }}>
                        {project.year}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 700, color: 'var(--color-text-light)', marginBottom: '0.7rem', lineHeight: 1.15 }}>
                      {project.title}
                    </h3>

                    <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-star)', fontSize: '0.84rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.3rem', marginTop: 'auto' }}>
                      {project.tags.map(tag => (
                        <span key={tag} className="pill pill-dark" style={{ fontSize: '0.66rem' }}>{tag}</span>
                      ))}
                    </div>

                    {/* Links row */}
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-star)', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--color-star)'}
                        >
                          <Code2 size={13} /> GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target={project.liveUrl !== '#' ? '_blank' : undefined} rel="noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 600, color: categoryAccent[project.category] || 'var(--color-accent)', textDecoration: 'none', opacity: project.liveUrl === '#' ? 0.45 : 1 }}
                        >
                          <ExternalLink size={13} /> {project.liveUrl === '#' ? 'Live (add link)' : 'Live Demo'}
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
