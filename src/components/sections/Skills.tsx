import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Skills = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reduceMotion ? 0.15 : 0.3,
      },
    },
  };

  const categoryOrder = [
    'core',
    'backend',
    'data',
    'cloud',
    'frontend',
    'ai',
  ] as const;

  return (
    <section
      id="skills"
      className="min-h-screen flex items-start py-16 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: reduceMotion ? 0 : 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0.2 : 0.4 }}
          className="mb-10"
        >
          <h2 className="heading-section mb-2">
            {t.skills.title}
          </h2>
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
            whileInView={reduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.5 }}
            className="mt-3 h-[3px] w-16 sm:w-24 origin-left rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 dark:from-blue-500 dark:via-indigo-400 dark:to-violet-400 shadow-[0_0_8px_rgba(99,102,241,0.35)]"
          />
        </motion.div>

        {/* Display skills in grid format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryOrder.map((key) => {
            const category = t.skills.categories[key];
            const skillsList = t.skills.list[key];

            if (!skillsList || skillsList.length === 0) return null;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: reduceMotion ? 0 : 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0.2 : 0.4 }}
                className="card-secondary p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-blue-600 dark:border-blue-500">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsList.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
