import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Projects = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: reduceMotion ? undefined : 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.5,
      },
    },
  };

  return (
    <section
      id="projects"
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
            {t.projects.title}
          </h2>
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
            whileInView={reduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.5 }}
            className="mt-3 h-[3px] w-16 sm:w-24 origin-left rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 dark:from-blue-500 dark:via-indigo-400 dark:to-violet-400 shadow-[0_0_8px_rgba(99,102,241,0.35)]"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {t.projects.projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="card-primary overflow-hidden"
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Project Info */}
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.url && (
                      <a
                        key="url"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t.projects.viewProject}
                      </a>
                    )}
                    {project.git && !project.private && (
                      <a
                        key="git"
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                      >
                        <Github className="w-4 h-4" />
                        {t.projects.viewCode}
                      </a>
                    )}
                    {project.private && (
                      <div key="private" className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-sm cursor-not-allowed">
                        <Lock className="w-4 h-4" />
                        {t.projects.privateRepo}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};
