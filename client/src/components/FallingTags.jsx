import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

const FallingTags = ({ tags }) => {
  const containerRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const wordRefs = useRef([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Ensure the container is rendered and sized before starting physics
    const timeout = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!ready || !containerRef.current) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    if (width === 0 || height === 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = 0.8;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false
      }
    });

    const floor = Bodies.rectangle(width / 2, height + 50, width, 100, { isStatic: true });
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, { isStatic: true });
    const ceiling = Bodies.rectangle(width / 2, -1000, width, 100, { isStatic: true });

    const bodies = wordRefs.current.map((elem, i) => {
      if (!elem) return null;
      const w = elem.offsetWidth;
      const h = elem.offsetHeight;

      const body = Bodies.rectangle(
        Math.random() * (width - 100) + 50,
        -Math.random() * 1000 - 100,
        w,
        h,
        {
          restitution: 0.5,
          frictionAir: 0.03,
          friction: 0.1,
          chamfer: { radius: h / 2 }
        }
      );

      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);
      return { elem, body };
    }).filter(Boolean);

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });
    render.mouse = mouse;

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...bodies.map(b => b.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const update = () => {
      bodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        // Position relative to top-left, then center on the body coordinate
        elem.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${body.angle}rad)`;
        elem.style.visibility = 'visible';
        elem.style.opacity = '1';
      });
      requestAnimationFrame(update);
    };
    const animId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animId);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [ready, tags]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 50, 
        overflow: 'hidden',
        pointerEvents: 'auto'
      }}
    >
      <div ref={canvasContainerRef} style={{ pointerEvents: 'none', position: 'absolute', inset: 0 }} />
      {tags.map((tag, i) => (
        <div
          key={i}
          ref={el => wordRefs.current[i] = el}
          className="glass-pill"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            visibility: 'hidden',
            opacity: 0,
            cursor: 'grab',
            whiteSpace: 'nowrap',
            zIndex: 51,
            pointerEvents: 'auto',
            transition: 'none', // Critical: physics handles the movement
            transformOrigin: 'center center'
          }}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default FallingTags;
