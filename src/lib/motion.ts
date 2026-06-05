import type { Variants } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

/** Parent: reveals children one after another as it enters the viewport. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

/** Child: a small fade + rise. Pairs with `staggerContainer`. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/** Shared viewport config so reveals fire a touch before fully in view. */
export const inView = { once: true, margin: '-60px' } as const;
