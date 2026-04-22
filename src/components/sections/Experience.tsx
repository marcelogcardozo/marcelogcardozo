import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, Network, X, Briefcase, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState, lazy, Suspense } from 'react';

const MiroEmbedLazy = lazy(() => import('../MiroEmbed').then(mod => ({ default: mod.MiroEmbed })));

type ExperienceItem = {
  index: number;
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  type: 'employment' | 'freelance';
  miro?: string;
};

type ExperienceCardProps = {
  exp: ExperienceItem;
  id: string;
  isExpanded: boolean;
  align: 'left' | 'right';
  onToggle: () => void;
  onOpenDiagram: () => void;
  labels: {
    employment: string;
    freelance: string;
    viewDiagram: string;
  };
  reduceMotion: boolean;
};

const ExperienceCard = ({
  exp,
  id,
  isExpanded,
  align,
  onToggle,
  onOpenDiagram,
  labels,
  reduceMotion,
}: ExperienceCardProps) => {
  const isEmployment = exp.type === 'employment';
  const wrapperClass = align === 'left' ? 'md:text-left md:pr-8' : 'md:pl-8';
  const chevronJustify = align === 'left' ? 'justify-end' : 'justify-start';
  const headerJustify = align === 'left' ? 'md:justify-between' : 'md:justify-start';
  const tagsJustify = align === 'left' ? 'justify-end' : '';

  return (
    <div className={wrapperClass}>
      <motion.button
        onClick={onToggle}
        className="w-full card-section p-4 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
        whileHover={reduceMotion ? {} : { scale: 1.02 }}
        whileTap={reduceMotion ? {} : { scale: 0.98 }}
        type="button"
        aria-expanded={isExpanded}
        aria-controls={`${id}-panel`}
      >
        <div className={`flex items-center justify-between ${headerJustify} gap-2`}>
          <div className="flex items-center gap-2">
            <h4 className="heading-card mb-1 text-left" id={`${id}-title`}>
              {exp.company}
            </h4>
          </div>
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${
              isEmployment
                ? 'bg-[var(--badge-employment-bg)] text-[var(--badge-employment-text)] border-[var(--badge-employment-border)]'
                : 'bg-[var(--badge-freelance-bg)] text-[var(--badge-freelance-text)] border-[var(--badge-freelance-border)]'
            }`}
          >
            {isEmployment ? <Briefcase className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
            {isEmployment ? labels.employment : labels.freelance}
          </span>
        </div>
        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium mb-1">
          {exp.role}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
        <div className={`flex ${chevronJustify}`}>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.3 }}
            className="mt-3 card-secondary p-5 md:p-6"
            id={`${id}-panel`}
            aria-labelledby={`${id}-title`}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm [text-align:justify]">
              {exp.description}
            </p>
            <div className={`flex flex-wrap gap-3 mb-4 ${tagsJustify}`}>
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs bg-[var(--tag-bg)] text-[var(--tag-text)] border border-[var(--tag-border)] rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            {exp.miro && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={onOpenDiagram}
                  className="flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors w-full justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] bg-[var(--accent-strong)] hover:brightness-95 text-white cursor-pointer"
                  aria-haspopup="dialog"
                  aria-controls="experience-diagram-modal"
                >
                  <Network className="w-4 h-4" />
                  {labels.viewDiagram}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Experience = () => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);
  const [showDiagram, setShowDiagram] = useState<string | null>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const toggleExpanded = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
    if (expandedIndex !== id) {
      setShowDiagram(null);
    }
  };

  const allExperiences: ExperienceItem[] = [
    ...t.experience.employment.map(exp => ({ ...exp, type: 'employment' as const })),
    ...t.experience.freelance.map(exp => ({ ...exp, type: 'freelance' as const })),
  ].sort((a, b) => b.index - a.index);

  const selectedExperience = showDiagram
    ? allExperiences.find((exp) => `exp-${exp.index}` === showDiagram)
    : undefined;

  const selectedMiro = selectedExperience?.miro;

  const labels = {
    employment: t.experience.employmentLabel,
    freelance: t.experience.freelanceLabel,
    viewDiagram: t.experience.viewDiagram,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: reduceMotion ? undefined : 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.5,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {showDiagram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.1 : 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowDiagram(null)}
          >
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { scale: 0.9, opacity: 0 }}
              animate={reduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.1 : 0.2 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[var(--surface)] rounded-lg overflow-auto p-6"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={t.experience.viewDiagram}
              id="experience-diagram-modal"
            >
              <button
                onClick={() => setShowDiagram(null)}
                className="absolute top-4 right-4 p-2 bg-[var(--surface)] border border-[var(--outline-soft)] hover:border-[var(--outline-hover)] rounded-full transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                aria-label={t.experience.closeDiagram}
              >
                <X className="w-5 h-5 text-gray-900 dark:text-white" />
              </button>
              <div className="flex items-center justify-center min-h-[400px]">
                {selectedMiro ? (
                  <Suspense fallback={<div className="text-center text-sm text-gray-500 dark:text-gray-400">Carregando diagrama…</div>}>
                    <MiroEmbedLazy boardId={selectedMiro} className="w-full" />
                  </Suspense>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="experience"
        className="min-h-screen flex items-start py-16 px-4 sm:px-6 lg:px-8 bg-transparent"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <h2 className="heading-section mb-2">{t.experience.title}</h2>
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
              whileInView={reduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.2 : 0.5 }}
              className="mt-3 h-[3px] w-16 sm:w-24 origin-left rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 dark:from-blue-500 dark:via-indigo-400 dark:to-violet-400 shadow-[0_0_8px_rgba(99,102,241,0.35)]"
            />
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[var(--outline-soft)]" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {allExperiences.map((exp) => {
                const id = `exp-${exp.index}`;
                const isExpanded = expandedIndex === id;
                const align: 'left' | 'right' = exp.index % 2 === 0 ? 'left' : 'right';
                const dotColorClass = exp.type === 'employment' ? 'bg-[var(--accent)]' : 'bg-[var(--accent-2)]';

                return (
                  <motion.div
                    key={id}
                    variants={itemVariants}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                  >
                    {align === 'left' ? (
                      <ExperienceCard
                        exp={exp}
                        id={id}
                        isExpanded={isExpanded}
                        align="left"
                        onToggle={() => toggleExpanded(id)}
                        onOpenDiagram={() => exp.miro && setShowDiagram(id)}
                        labels={labels}
                        reduceMotion={reduceMotion}
                      />
                    ) : (
                      <div className="hidden md:block" />
                    )}

                    <div
                      className={`hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 w-4 h-4 ${dotColorClass} rounded-full border-4 border-[var(--surface)] z-10`}
                    />

                    {align === 'right' ? (
                      <ExperienceCard
                        exp={exp}
                        id={id}
                        isExpanded={isExpanded}
                        align="right"
                        onToggle={() => toggleExpanded(id)}
                        onOpenDiagram={() => exp.miro && setShowDiagram(id)}
                        labels={labels}
                        reduceMotion={reduceMotion}
                      />
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
