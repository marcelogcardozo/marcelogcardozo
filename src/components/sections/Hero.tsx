import { motion, useReducedMotion } from 'framer-motion';
import { Moon, Sun, Globe, Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

export const Hero = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();

  const resumeUrl = language === 'en-US'
    ? 'https://drive.google.com/file/d/1N30d3Yaanp868kqKbs1CXCvIERf06PRY/view?usp=sharing'
    : 'https://drive.google.com/file/d/1no3_zVn6oGSYaiiK7nt-XztYyjyBFbm2/view?usp=sharing';

  const quickLinks = [
    { label: 'GitHub', href: 'https://github.com/marcelogcardozo', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcelogcardozo/', icon: Linkedin },
    { label: 'Email', href: 'mailto:m.cardozocg@outlook.com', icon: Mail },
    { label: t.contact.resume, href: resumeUrl, icon: FileText },
  ];

  const scrollToExperience = () =>
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const ease = [0.22, 1, 0.36, 1] as const;
  const rise = (delay: number) =>
    reduceMotion
      ? { initial: false as const }
      : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease, delay } };

  return (
    <section id="home" className="relative min-h-svh flex flex-col">
      {/* Persistent controls */}
      <div className="absolute top-5 right-5 flex items-center gap-1 z-10">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--hover)] transition-colors ring-accent"
          aria-label="Toggle theme"
          aria-pressed={theme === 'dark'}
        >
          {theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
        </button>
        <button
          onClick={toggleLanguage}
          className="px-2 py-2 rounded-md text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--hover)] transition-colors flex items-center gap-1.5 ring-accent"
          aria-label="Toggle language"
        >
          <Globe className="w-[18px] h-[18px]" />
          <span className="text-xs font-medium mono">{language === 'pt-BR' ? 'PT' : 'EN'}</span>
        </button>
      </div>

      {/* Centered intro */}
      <div className="flex-1 flex items-center">
        <div className="container-wide w-full">
          <motion.p {...rise(0)} className="kicker mb-5">
            {t.contact.location}
          </motion.p>

          <motion.h1 {...rise(0.06)} className="heading-display text-balance">
            {t.hero.name}
          </motion.h1>

          <motion.p {...rise(0.12)} className="mt-4 text-lg font-medium text-[var(--text)]">
            {t.hero.title}
          </motion.p>

          <motion.p {...rise(0.18)} className="mt-5 text-base leading-relaxed text-[var(--muted)] max-w-prose text-pretty">
            {t.hero.tagline}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5">
            {quickLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors ring-accent"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="container-wide w-full pb-8">
        <button
          onClick={scrollToExperience}
          className="inline-flex items-center gap-2 text-xs text-[var(--faint)] hover:text-[var(--muted)] transition-colors ring-accent mono uppercase tracking-widest"
          aria-label={t.hero.scrollDown}
        >
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 3, 0] }}
            transition={reduceMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.span>
          {t.hero.scrollDown}
        </button>
      </div>
    </section>
  );
};
