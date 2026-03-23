import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import StarField from './StarField';
import { ExternalLink } from 'lucide-react';

const CATEGORIES = ['All', 'Web App', 'Design', 'Backend', 'Mobile', 'AI/ML'];

const tagColors = {
  'React': '#61dafb', 'Node.js': '#3c873a', 'MongoDB': '#47a248',
  'Figma': '#f24e1e', 'CSS': '#264de4', 'Animation': '#a855f7',
  'Express': '#aaaaaa', 'PostgreSQL': '#336791', 'JWT': '#d63aff',
  'React Native': '#61dafb', 'Expo': '#000020', 'Firebase': '#ffca28',
  'Python': '#3776ab', 'TensorFlow': '#ff6f00', 'Flask': '#000000',
  'Next.js': '#ffffff', 'Sanity': '#f03e2f', 'Tailwind': '#38bdf8',
};

const categoryColors = {
  'Web App': '#a855f7', 'Design': '#6366f1', 'Backend': '#c084fc',
  'Mobile': '#818cf8', 'AI/ML': '#e879f9', 'All': '#a855f7',
};

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => { setProjects(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="section-dark" style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <StarField count={80} />

      {/* Ambient glow blob */}
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3rem' }}
        >
          <p className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>Selected Projects</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-text-light)', fontWeight: 700 }}>
            Work <span className="sparkle" style={{ fontSize: '0.6em' }}>✦</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                padding: '0.4em 1.1em',
                borderRadius: '999px',
                border: `1.5px solid ${activeCategory === cat ? 'var(--color-accent)' : 'rgba(168,85,247,0.25)'}`,
                background: activeCategory === cat ? 'var(--color-accent)' : 'transparent',
                color: activeCategory === cat ? 'white' : 'var(--color-star)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeCategory === cat ? '0 0 12px rgba(168,85,247,0.4)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        {loading ? (
          <div style={{ textAlign: 'center', color: 'var(--color-star)', padding: '4rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            Loading projects...
          </div>
        ) : (
          <motion.div
            layout
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project._id}
                  className="glass-card"
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{ padding: '1.8rem', cursor: 'default' }}
                >
                  {/* Thumbnail area */}
                  <div style={{
                    width: '100%', paddingTop: '55%',
                    background: `linear-gradient(135deg, ${categoryColors[project.category] || '#6366f1'}22, rgba(15,21,53,0.8))`,
                    borderRadius: '10px',
                    marginBottom: '1.2rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {project.thumbnail_url ? (
                      <img src={project.thumbnail_url} alt={project.title}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{
                        position: 'absolute', inset: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: categoryColors[project.category] || 'var(--color-accent)',
                        fontSize: '2.5rem', opacity: 0.4,
                        fontFamily: 'var(--font-display)',
                      }}>
                        ✦
                      </div>
                    )}
                    {/* Year badge */}
                    <span style={{
                      position: 'absolute', top: '0.7rem', right: '0.7rem',
                      fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      background: 'rgba(8,11,26,0.8)', color: 'var(--color-star)',
                      padding: '0.2em 0.6em', borderRadius: '999px',
                    }}>{project.year}</span>
                  </div>

                  {/* Category */}
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    color: categoryColors[project.category] || 'var(--color-accent)',
                    letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem',
                  }}>{project.category}</span>

                  {/* Title */}
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-light)', fontSize: '1.6rem', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.2 }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-star)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                    {(project.tags || []).map(tag => (
                      <span key={tag} className="pill pill-dark" style={{ fontSize: '0.68rem' }}>{tag}</span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--color-accent)',
                        textDecoration: 'none', transition: 'color 0.2s',
                      }}>
                      View project <ExternalLink size={13} />
                    </a>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
