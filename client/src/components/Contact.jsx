import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import StarField from './StarField';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');

    // Web3Forms Payload
    const payload = {
      // TODO: Replace with your actual Web3Forms Access Key
      access_key: "1c65c289-3407-4f37-8070-b9fab531aec1",
      ...form
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="section-dark" style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <StarField count={60} />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="section-eyebrow" style={{ marginBottom: '0.6rem' }}>Get in touch</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-text-light)', fontWeight: 700 }}>
            Let's Work Together
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-star)', marginTop: '1rem', fontSize: '0.95rem' }}>
            Have a project in mind? Drop me a message and let's create something stellar.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          <div className="responsive-grid-2" style={{ gap: '1.2rem' }}>
            <div>
              <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-star)', display: 'block', marginBottom: '0.4rem' }}>Name</label>
              <input className="cosmic-input" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </div>
            <div>
              <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-star)', display: 'block', marginBottom: '0.4rem' }}>Email</label>
              <input className="cosmic-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
            </div>
          </div>

          <div>
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-star)', display: 'block', marginBottom: '0.4rem' }}>Subject</label>
            <input className="cosmic-input" name="subject" value={form.subject} onChange={handleChange} placeholder="Project inquiry" />
          </div>

          <div>
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-star)', display: 'block', marginBottom: '0.4rem' }}>Message</label>
            <textarea className="cosmic-input" name="message" value={form.message} onChange={handleChange}
              placeholder="Tell me about your project..." required rows={6}
              style={{ resize: 'vertical' }} />
          </div>

          {/* Status messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#4ade80', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
              <CheckCircle size={18} /> Message sent! I'll get back to you soon.
            </motion.div>
          )}
          {status === 'error' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#f87171', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
              <AlertCircle size={18} /> {errorMsg}
            </div>
          )}

          <button type="submit" className="btn-violet btn-pulse" disabled={status === 'loading'}
            style={{ alignSelf: 'center', padding: '0.75em 2.5em', fontSize: '0.95rem', opacity: status === 'loading' ? 0.7 : 1 }}>
            {status === 'loading' ? 'Sending...' : <><Send size={16} /> Send Message</>}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
