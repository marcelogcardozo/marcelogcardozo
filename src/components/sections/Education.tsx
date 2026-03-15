import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Education = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education"
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
            {t.education.title}
          </h2>
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
            whileInView={reduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.5 }}
            className="mt-3 h-[3px] w-16 sm:w-24 origin-left rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 dark:from-blue-500 dark:via-indigo-400 dark:to-violet-400 shadow-[0_0_8px_rgba(99,102,241,0.35)]"
          />
        </motion.div>

        <div className="space-y-5">
          {/* Education Degree */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: reduceMotion ? 0 : 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.4 }}
            className="card-secondary p-5 md:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600 rounded-lg shrink-0">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="heading-card mb-1">
                  {t.education.degree.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-1">
                  {t.education.degree.institution}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {t.education.degree.period}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.education.degree.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: reduceMotion ? 0 : 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.4 }}
            className="card-secondary p-5 md:p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="heading-card">
                {t.education.certifications.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {t.education.certifications.list.map((cert, index) => (
                <motion.a
                  key={`${cert.title}-${cert.provider}-${cert.year}`}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                  whileInView={{ opacity: 1, y: reduceMotion ? 0 : 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduceMotion ? 0.15 : 0.3, delay: reduceMotion ? 0 : index * 0.05 }}
                  whileHover={reduceMotion ? {} : { scale: 1.02 }}
                  whileTap={reduceMotion ? {} : { scale: 0.98 }}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-section p-4 block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                  aria-label={`${cert.title} (${cert.provider}, ${cert.year})`}
                >
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {cert.provider} • {cert.year}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
