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
      <div className={wide ? 'container-wide' : 'container-page'}>
        <motion.div
          className="flex items-baseline gap-4 mb-10"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="kicker tabular-nums">{index}</span>
          <h2 className="heading-section">{title}</h2>
          <motion.span
            className="h-px flex-1 origin-left bg-[var(--line)]"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            aria-hidden
          />
        </motion.div>
        {children}
      </div>
    </section>
  );
};
