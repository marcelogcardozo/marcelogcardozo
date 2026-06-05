import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin accent bar pinned to the top, tracking scroll progress. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 h-0.5 origin-left bg-[var(--accent)] z-50"
      aria-hidden
    />
  );
};
