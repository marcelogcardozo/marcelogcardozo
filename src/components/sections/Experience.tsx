import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, Network, X, Briefcase, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState, lazy, Suspense } from 'react';
// Lazy load MiroEmbed
const MiroEmbedLazy = lazy(() => import('../MiroEmbed').then(mod => ({ default: mod.MiroEmbed })));

export const Experience = () => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);
  const [showDiagram, setShowDiagram] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const toggleExpanded = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
    if (expandedIndex !== id) {
      setShowDiagram(null); // Reset diagram when collapsing
    }
  };

  const toggleDiagram = (id: string) => {
    setShowDiagram(showDiagram === id ? null : id);
  };

  // Combine all experiences into a single list and sort by custom index (reverse order: 0 = last)
  const allExperiences = [
    ...t.experience.employment.map(exp => ({ ...exp, type: 'employment' as const })),
    ...t.experience.freelance.map(exp => ({ ...exp, type: 'freelance' as const }))
  ].sort((a, b) => b.index - a.index);

  const selectedExperience = showDiagram
    ? allExperiences.find((exp) => `exp-${exp.index}` === showDiagram)
    : undefined;

  const selectedMiro =
    selectedExperience && 'miro' in selectedExperience
      ? (selectedExperience as { miro?: string }).miro
      : undefined;

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
      {/* Modal do Diagrama */}
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
          <h2 className="heading-section mb-2">
            {t.experience.title}
          </h2>
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
            whileInView={reduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.5 }}
            className="mt-3 h-[3px] w-16 sm:w-24 origin-left rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 dark:from-blue-500 dark:via-indigo-400 dark:to-violet-400 shadow-[0_0_8px_rgba(99,102,241,0.35)]"
          />
        </motion.div>

        {/* Central Timeline */}
        <div className="relative">
          {/* Timeline line hidden on single-column (sm) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[var(--outline-soft)]" />

          {/* Combined experiences sorted by date */}
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
              const isLeft = exp.index % 2 === 0; // Even index = left, Odd index = right
              const isEmployment = exp.type === 'employment';
              const expMiro =
                'miro' in exp ? (exp as { miro?: string }).miro : undefined;
              const dotColorClass = isEmployment ? 'bg-[var(--accent)]' : 'bg-[var(--accent-2)]';

              return (
                <motion.div
                  key={id}
                  variants={itemVariants}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                >
                  {/* Left side */}
                  {isLeft ? (
                    <div className="md:text-left md:pr-8">
                      <motion.button
                        onClick={() => toggleExpanded(id)}
                        className={`w-full card-section p-4 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]`}
                        whileHover={reduceMotion ? {} : { scale: 1.02 }}
                        whileTap={reduceMotion ? {} : { scale: 0.98 }}
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`${id}-panel`}
                      >
                        <div className="flex items-center justify-between md:justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <h4 className="heading-card mb-1 text-left" id={`${id}-title`}>
                              {exp.company}
                            </h4>
                          </div>
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${isEmployment ? 'bg-[var(--badge-employment-bg)] text-[var(--badge-employment-text)] border-[var(--badge-employment-border)]' : 'bg-[var(--badge-freelance-bg)] text-[var(--badge-freelance-text)] border-[var(--badge-freelance-border)]'}`}>
                            {isEmployment ? (
                              <Briefcase className="w-3 h-3" />
                            ) : (
                              <Sparkles className="w-3 h-3" />
                            )}
                            {isEmployment ? 'Employment' : 'Freelance'}
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium mb-1">
                          {exp.role}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          {exp.period}
                        </p>
                        <div className="flex justify-end">
                          <ChevronDown
                            className={`w-4 h-4 text-gray-500 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
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
                            <div className="flex flex-wrap gap-3 justify-end mb-4">
                              {(exp.stack as string[]).map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className={`px-2.5 py-1 text-xs bg-[var(--tag-bg)] text-[var(--tag-text)] border border-[var(--tag-border)] rounded`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                              <button
                                onClick={() => expMiro && toggleDiagram(id)}
                                disabled={!expMiro}
                                className={`flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors w-full justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] ${
                                  expMiro
                                    ? 'bg-[var(--accent-strong)] hover:brightness-95 text-white cursor-pointer'
                                    : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                                }`}
                                aria-haspopup="dialog"
                                aria-controls="experience-diagram-modal"
                              >
                                <Network className="w-4 h-4" />
                                {t.experience.viewDiagram}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}

                  {/* Center dot hidden on single-column (sm) */}
                  <div className={`hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 w-4 h-4 ${dotColorClass} rounded-full border-4 border-[var(--surface)] z-10`} />

                  {/* Right side */}
                  {!isLeft ? (
                    <div className="md:pl-8">
                      <motion.button
                        onClick={() => toggleExpanded(id)}
                        className={`w-full card-section p-4 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]`}
                        whileHover={reduceMotion ? {} : { scale: 1.02 }}
                        whileTap={reduceMotion ? {} : { scale: 0.98 }}
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`${id}-panel`}
                      >
                        <div className="flex items-center justify-between md:justify-start gap-2">
                          <div className="flex items-center gap-2">
                            <h4 className="heading-card mb-1 text-left" id={`${id}-title`}>
                              {exp.company}
                            </h4>
                          </div>
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${isEmployment ? 'bg-[var(--badge-employment-bg)] text-[var(--badge-employment-text)] border-[var(--badge-employment-border)]' : 'bg-[var(--badge-freelance-bg)] text-[var(--badge-freelance-text)] border-[var(--badge-freelance-border)]'}`}>
                            {isEmployment ? (
                              <Briefcase className="w-3 h-3" />
                            ) : (
                              <Sparkles className="w-3 h-3" />
                            )}
                            {isEmployment ? 'Employment' : 'Freelance'}
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium mb-1">
                          {exp.role}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          {exp.period}
                        </p>
                        <div className="flex justify-start">
                          <ChevronDown
                            className={`w-4 h-4 text-gray-500 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
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
                            <div className="flex flex-wrap gap-3 mb-4">
                              {(exp.stack as string[]).map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className={`px-2.5 py-1 text-xs bg-[var(--tag-bg)] text-[var(--tag-text)] border border-[var(--tag-border)] rounded`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                              <button
                                onClick={() => expMiro && toggleDiagram(id)}
                                disabled={!expMiro}
                                className={`flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors w-full justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] ${
                                  expMiro
                                    ? 'bg-[var(--accent-strong)] hover:brightness-95 text-white cursor-pointer'
                                    : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                                }`}
                                aria-haspopup="dialog"
                                aria-controls="experience-diagram-modal"
                              >
                                <Network className="w-4 h-4" />
                                {t.experience.viewDiagram}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
