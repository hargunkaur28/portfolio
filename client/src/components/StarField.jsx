import { useEffect, useRef } from 'react';

export default function StarField({ count = 120 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 2.5 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const dur = (Math.random() * 4 + 2).toFixed(1);
      const minOp = (Math.random() * 0.2 + 0.05).toFixed(2);
      const maxOp = (Math.random() * 0.6 + 0.3).toFixed(2);
      const delay = (Math.random() * 4).toFixed(1);

      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        --dur: ${dur}s;
        --min-op: ${minOp};
        --max-op: ${maxOp};
        animation-delay: ${delay}s;
        animation-name: twinkle;
        animation-duration: ${dur}s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      `;
      container.appendChild(star);
    }
  }, [count]);

  return <div ref={containerRef} className="starfield" />;
}
