import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Section } from '../Section';
import { staggerContainer, fadeUp, inView } from '../../lib/motion';

export const Education = () => {
  const { t } = useLanguage();
  const { degree, certifications } = t.education;

  return (
    <Section id="education" index="04" title={t.education.title} wide>
      {/* Degree */}
      <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-8 gap-y-2 border-y border-[var(--line)] py-6">
        <span className="mono text-xs text-[var(--faint)] whitespace-nowrap sm:pt-1">{degree.period}</span>
        <div>
          <h3 className="text-base font-medium text-[var(--text)]">{degree.title}</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{degree.institution}</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] max-w-prose">{degree.description}</p>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-12">
        <p className="kicker mb-5">{certifications.title}</p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          {certifications.list.map((cert) => {
            const meta = `${cert.provider} · ${cert.year}`;
            const inner = (
              <>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[var(--text)]">{cert.title}</p>
                  <p className="mt-0.5 text-xs text-[var(--faint)]">{meta}</p>
                </div>
                {cert.url && (
                  <ArrowUpRight className="w-4 h-4 mt-0.5 shrink-0 text-[var(--faint)] group-hover:text-[var(--accent)] transition-colors" />
                )}
              </>
            );

            return cert.url ? (
              <motion.a
                key={`${cert.title}-${cert.year}`}
                variants={fadeUp}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-3 py-3 row-hover ring-accent"
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div key={`${cert.title}-${cert.year}`} variants={fadeUp} className="flex items-start justify-between gap-3 py-3">
                {inner}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};
