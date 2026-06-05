import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Network, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState, lazy, Suspense } from 'react';
import { Section } from '../Section';
import { staggerContainer, fadeUp, inView } from '../../lib/motion';

const MiroEmbedLazy = lazy(() => import('../MiroEmbed').then(mod => ({ default: mod.MiroEmbed })));

type ExperienceItem = {
  index: number;
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  miro?: string;
};

const isCurrent = (period: string) => /presente|present/i.test(period);
const byIndexDesc = (a: ExperienceItem, b: ExperienceItem) => b.index - a.index;

type RowProps = {
  exp: ExperienceItem;
  id: string;
  isExpanded: boolean;
  onToggle: () => void;
  onOpenDiagram: () => void;
  viewDiagramLabel: string;
  reduceMotion: boolean;
};

const ExperienceRow = ({ exp, id, isExpanded, onToggle, onOpenDiagram, viewDiagramLabel, reduceMotion }: RowProps) => {
  const current = isCurrent(exp.period);

  return (
    <motion.li variants={fadeUp} className="border-b border-[var(--line)]">
      <button
        onClick={onToggle}
        className="group w-full text-left py-6 row-hover ring-accent"
        aria-expanded={isExpanded}
        aria-controls={`${id}-panel`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-8 gap-y-2">
          <span className="mono text-xs text-[var(--faint)] whitespace-nowrap sm:pt-1">{exp.period}</span>

          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                {current && (
                  <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden>
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  </span>
                )}
                <h4 className="text-base font-medium text-[var(--text)]">{exp.company}</h4>
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">{exp.role}</p>
            </div>
            <span className="mt-0.5 shrink-0 text-[var(--faint)] transition-colors group-hover:text-[var(--muted)]" aria-hidden>
              <Plus className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} />
            </span>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            id={`${id}-panel`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-8 pb-7">
              <div className="hidden sm:block" aria-hidden />
              <div className="max-w-prose">
                <p className="text-sm leading-relaxed text-[var(--text)]">{exp.summary}</p>
                <ul className="mt-3 space-y-2">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                      <span className="mt-[0.6rem] h-px w-3 shrink-0 bg-[var(--line-strong)]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>
                {exp.miro && (
                  <button
                    onClick={onOpenDiagram}
                    className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline underline-offset-4 ring-accent"
                    aria-haspopup="dialog"
                    aria-controls="experience-diagram-modal"
                  >
                    <Network className="w-4 h-4" />
                    {viewDiagramLabel}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export const Experience = () => {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showDiagram, setShowDiagram] = useState<string | null>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const employment = ([...t.experience.employment] as ExperienceItem[]).sort(byIndexDesc);
  const freelance = ([...t.experience.freelance] as ExperienceItem[]).sort(byIndexDesc);

  const selectedMiro = showDiagram
    ? [...employment, ...freelance].find((exp) => exp.miro && showDiagram.endsWith(`-${exp.index}`))?.miro
    : undefined;

  const toggle = (id: string) => setExpandedId(prev => (prev === id ? null : id));

  const groups = [
    { key: 'employment', label: t.experience.employmentTitle, items: employment },
    { key: 'freelance', label: t.experience.freelanceTitle, items: freelance },
  ];

  return (
    <>
      <AnimatePresence>
        {showDiagram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.1 : 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setShowDiagram(null)}
          >
            <div
              className="relative w-full max-w-5xl max-h-[90vh] bg-[var(--surface)] border border-[var(--line)] rounded-lg overflow-auto p-6"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={t.experience.viewDiagram}
              id="experience-diagram-modal"
            >
              <button
                onClick={() => setShowDiagram(null)}
                className="absolute top-4 right-4 p-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors z-10 ring-accent"
                aria-label={t.experience.closeDiagram}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center min-h-[400px]">
                {selectedMiro && (
                  <Suspense fallback={<div className="text-sm text-[var(--muted)]">Carregando diagrama…</div>}>
                    <MiroEmbedLazy boardId={selectedMiro} className="w-full" />
                  </Suspense>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Section id="experience" index="01" title={t.experience.title} wide>
        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.key}>
              <p className="kicker mb-4">{group.label}</p>
              <motion.ul
                className="border-t border-[var(--line)]"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={inView}
              >
                {group.items.map((exp) => {
                  const id = `${group.key}-${exp.index}`;
                  return (
                    <ExperienceRow
                      key={id}
                      exp={exp}
                      id={id}
                      isExpanded={expandedId === id}
                      onToggle={() => toggle(id)}
                      onOpenDiagram={() => exp.miro && setShowDiagram(id)}
                      viewDiagramLabel={t.experience.viewDiagram}
                      reduceMotion={reduceMotion}
                    />
                  );
                })}
              </motion.ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};
