import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <footer id="footer" className="px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: reduceMotion ? 0 : 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0.2 : 0.4 }}
          className=""
        >
          {/* Linha de acento para fechamento visual */}
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
            whileInView={reduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.5 }}
            className="h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 dark:from-blue-500 dark:via-indigo-400 dark:to-violet-400 shadow-[0_0_8px_rgba(99,102,241,0.35)] mb-6"
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-gray-600 dark:text-gray-400 border-t border-[var(--outline-soft)]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{t.contact.location}</span>
            </div>
            <p className="text-sm md:text-right">© {new Date().getFullYear()} Marcelo Cardozo. {t.contact.rights}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};