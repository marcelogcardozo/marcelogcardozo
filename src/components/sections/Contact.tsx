import { motion, useReducedMotion } from 'framer-motion';
import { Mail, FileText, Github, Linkedin, Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

// Spotify Icon Component
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

export const Contact = () => {
  const { t, language } = useLanguage();
  const reduceMotion = useReducedMotion();

  // Define o link do currículo conforme idioma
  const urlCurriculo = language === 'en-US'
    ? 'https://drive.google.com/file/d/1N30d3Yaanp868kqKbs1CXCvIERf06PRY/view?usp=sharing'
    : 'https://drive.google.com/file/d/1no3_zVn6oGSYaiiK7nt-XztYyjyBFbm2/view?usp=sharing';

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/marcelogcardozo',
      icon: Github,
      brandClass: 'text-[#181717] dark:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/marcelogcardozo/',
      icon: Linkedin,
      brandClass: 'text-[#0A66C2]'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/marcelogcardozo',
      icon: Send,
      brandClass: 'text-[#26A5E4]'
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/playlist/36HWjOt4ioMxItguUigmgN?si=a2ff50974e544fd0',
      icon: SpotifyIcon,
      brandClass: 'text-[#1DB954]'
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">
            {t.contact.title}
          </h2>
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
            whileInView={reduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.5 }}
            className="mt-3 h-[3px] w-16 sm:w-24 mx-auto origin-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 dark:from-blue-500 dark:via-indigo-400 dark:to-violet-400 shadow-[0_0_8px_rgba(99,102,241,0.35)]"
          />
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="card-secondary p-6 md:p-8 mb-10"
        >
          {/* Subtitle */}
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-7 leading-relaxed">
            {t.contact.subtitle}
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="mailto:m.cardozocg@outlook.com"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-strong)] hover:brightness-95 text-white rounded-lg transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
            >
              <Mail className="w-5 h-5" />
              <span>{t.contact.email}</span>
            </a>

            <a
              href={urlCurriculo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--surface)] hover:brightness-95 text-gray-900 dark:text-white rounded-lg transition-colors font-medium border border-[var(--outline-soft)] hover:border-[var(--outline-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
            >
              <FileText className="w-5 h-5" />
              <span>{t.contact.resume}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
              {t.contact.connect}
            </p>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={reduceMotion ? {} : { scale: 1.1 }}
                    whileTap={reduceMotion ? {} : { scale: 0.95 }}
                    className={`p-3 bg-[var(--surface)] text-[var(--text)] border border-[var(--outline-soft)] hover:border-[var(--outline-hover)] rounded-lg transition-all shadow-sm hover:shadow-md elevation-1 hover:elevation-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]`}
                    aria-label={social.name}
                  >
                    <Icon className={`w-5 h-5 ${social.brandClass}`} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Footer move to dedicated component */}
      </div>
    </section>
  );
};
