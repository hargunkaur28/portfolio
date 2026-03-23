import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TiltCard({ children, className, style }) {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Multipliers (-15 to +15 deg tilt)
    const rX = ((mouseY / height) - 0.5) * -15;
    const rY = ((mouseX / width) - 0.5) * 15;
    
    setRotateX(rX);
    setRotateY(rY);

    // Glare moves exactly with cursor
    setGlare({ 
      x: (mouseX / width) * 100, 
      y: (mouseY / height) * 100, 
      opacity: 0.18 
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare({ ...glare, opacity: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
      className={className}
      style={{
        ...style,
        position: 'relative',
        transformStyle: 'preserve-3d',
        perspective: '1200px',
      }}
    >
      {/* Interactive Glare Layer */}
      <div 
        style={{
          position: 'absolute', 
          inset: 0, 
          zIndex: 10, 
          pointerEvents: 'none',
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
          transition: 'opacity 0.2s',
          borderRadius: 'inherit'
        }} 
      />
      {/* Nested popout container - makes content inside "lift" off the card */}
      <div style={{ transform: 'translateZ(25px)', width: '100%', height: '100%', borderRadius: 'inherit' }}>
        {children}
      </div>
    </motion.div>
  );
}
