import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

export const Hero = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();

  const scrollToNextSection = () => {
    // Find the next <section> after the Hero and scroll to it
    const hero = document.getElementById('home');
    const sections = Array.from(document.querySelectorAll('section'));
    const heroIndex = sections.indexOf(hero as HTMLElement);

    if (heroIndex !== -1 && heroIndex + 1 < sections.length) {
      sections[heroIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Fallback: scroll to Experience if order can't be determined
    const fallback = document.querySelector('#experience') || document.querySelector('#projects');
    fallback?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-sky-50 via-indigo-50 to-violet-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={reduceMotion ? undefined : {
            scale: [1, 1.15, 1],
            rotate: [0, 60, 0],
          }}
          transition={reduceMotion ? undefined : {
            duration: 40,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-xl sm:blur-3xl"
        />
        <motion.div
          animate={reduceMotion ? undefined : {
            scale: [1.1, 1, 1.1],
            rotate: [45, 0, 45],
          }}
          transition={reduceMotion ? undefined : {
            duration: 30,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-xl sm:blur-3xl"
        />
      </div>

      {/* Top-right buttons */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-6 right-6 flex items-center space-x-2 z-10"
      >
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-white/80 dark:hover:bg-gray-800/80 backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
          aria-label="Toggle theme"
          aria-pressed={theme === 'dark'}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-gray-300" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>

        <button
          onClick={toggleLanguage}
          className="p-2 rounded-md hover:bg-white/80 dark:hover:bg-gray-800/80 backdrop-blur-sm transition-colors flex items-center space-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
          aria-label="Toggle language"
        >
          <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            {language === 'pt-BR' ? 'PT' : 'EN'}
          </span>
        </button>
      </motion.div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-display mb-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
          >
            {t.hero.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={reduceMotion ? undefined : {
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0)",
                  "0 0 36px rgba(59, 130, 246, 0.12)",
                  "0 0 20px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={reduceMotion ? undefined : {
                duration: 6,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="inline-block px-8 py-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50"
            >
              <p className="text-2xl font-medium text-gray-800 dark:text-gray-200">
                {t.hero.title}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          type="button"
          onClick={scrollToNextSection}
          className="flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] rounded"
          aria-label={t.hero.scrollDown}
        >
          <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            {t.hero.scrollDown}
          </span>
        </button>
      </motion.div>
    </section>
  );
};
