import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const SECTIONS = ['experience', 'projects', 'skills', 'education', 'contact'] as const;

export const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ y: -56, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -56, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 inset-x-0 z-40 bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--line)]"
            aria-label="Primary"
          >
            <div className="container-wide h-14 flex items-center justify-between">
              <button
                onClick={scrollToTop}
                className="text-sm font-semibold tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors ring-accent"
                aria-label={t.nav.backToTop}
              >
                MC
              </button>

              <div className="flex items-center gap-6">
                <ul className="hidden md:flex items-center gap-6">
                  {SECTIONS.map((id) => {
                    const active = activeId === id;
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          onClick={(e) => handleClick(e, id)}
                          aria-current={active ? 'true' : undefined}
                          className={`text-sm transition-colors ring-accent ${
                            active ? 'text-[var(--text)] font-medium' : 'text-[var(--muted)] hover:text-[var(--text)]'
                          }`}
                        >
                          {t.nav[id]}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="flex items-center gap-1">
                  <button
                    onClick={toggleTheme}
                    className="p-1.5 rounded-md text-[var(--muted)] hover:text-[var(--text)] transition-colors ring-accent"
                    aria-label="Toggle theme"
                    aria-pressed={theme === 'dark'}
                  >
                    {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className="px-1.5 py-1.5 rounded-md text-[var(--muted)] hover:text-[var(--text)] transition-colors flex items-center gap-1 ring-accent"
                    aria-label="Toggle language"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-xs font-medium">{language === 'pt-BR' ? 'PT' : 'EN'}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="md:hidden fixed bottom-5 right-5 z-40 p-3 rounded-full bg-[var(--text)] text-[var(--color-bg)] shadow-sm hover:opacity-90 transition-opacity ring-accent"
            aria-label={t.nav.backToTop}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
