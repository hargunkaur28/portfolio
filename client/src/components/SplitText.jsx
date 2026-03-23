import { motion } from 'framer-motion';

export function SplitText({ text, delay = 0.03, className = '', style }) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.span
      style={{ display: 'inline-flex', flexWrap: 'wrap', ...style }}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span variants={child} key={`${wordIndex}-${letterIndex}`} style={{ position: 'relative', display: 'inline-block' }}>
              {letter}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <motion.span variants={child} style={{ position: 'relative', display: 'inline-block' }}>
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </motion.span>
  );
}
