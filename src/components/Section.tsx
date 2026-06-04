import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type SectionProps = {
  id: string;
  /** Two-digit index shown as a quiet kicker, e.g. "01". */
  index: string;
  title: string;
  children: ReactNode;
  /** Use a wider container (e.g. for a multi-column grid). */
  wide?: boolean;
  /** Guarantee at least the usable viewport height (minus the navbar). */
  fill?: boolean;
};

/**
 * Shared section shell: a hairline separator, generous vertical
 * rhythm, the narrow reading column, a numbered heading, and a
 * subtle fade-up as it enters the viewport.
 */
export const Section = ({ id, index, title, children, wide = false, fill = true }: SectionProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={`border-t border-[var(--line)] py-16 sm:py-20 scroll-mt-14${
        fill ? ' min-h-[calc(100svh-3.5rem)]' : ''
      }`}
    >
      <motion.div
        className={wide ? 'container-wide' : 'container-page'}
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-baseline gap-4 mb-10">
          <span className="kicker tabular-nums">{index}</span>
          <h2 className="heading-section">{title}</h2>
          <span className="h-px flex-1 bg-[var(--line)]" aria-hidden />
        </div>
        {children}
      </motion.div>
    </section>
  );
};
