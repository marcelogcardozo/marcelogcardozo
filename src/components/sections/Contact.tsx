import { Mail, FileText, Github, Linkedin, Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { SpotifyIcon } from '../icons/SpotifyIcon';
import { Section } from '../Section';

export const Contact = () => {
  const { t, language } = useLanguage();

  const resumeUrl = language === 'en-US'
    ? 'https://drive.google.com/file/d/1N30d3Yaanp868kqKbs1CXCvIERf06PRY/view?usp=sharing'
    : 'https://drive.google.com/file/d/1no3_zVn6oGSYaiiK7nt-XztYyjyBFbm2/view?usp=sharing';

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/marcelogcardozo', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/marcelogcardozo/', icon: Linkedin },
    { name: 'Telegram', url: 'https://t.me/marcelogcardozo', icon: Send },
    { name: 'Spotify', url: 'https://open.spotify.com/playlist/36HWjOt4ioMxItguUigmgN?si=a2ff50974e544fd0', icon: SpotifyIcon },
  ];

  return (
    <Section id="contact" index="05" title={t.contact.title} wide fill={false}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
        {/* Primary: invitation + email CTA */}
        <div>
          <p className="text-lg text-[var(--muted)] max-w-prose">{t.contact.subtitle}</p>
          <a
            href="mailto:m.cardozocg@outlook.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] hover:opacity-90 transition-opacity ring-accent"
          >
            <Mail className="w-4 h-4" />
            {t.contact.email}
          </a>
        </div>

        {/* Secondary: resume + social */}
        <div className="sm:justify-self-end sm:text-right">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors ring-accent"
          >
            <FileText className="w-4 h-4" />
            {t.contact.resume}
          </a>

          <div className="mt-8">
            <p className="kicker mb-3">{t.contact.connect}</p>
            <div className="flex items-center gap-1 sm:justify-end">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 first:-ml-2 sm:first:ml-0 sm:last:-mr-2 rounded-md text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--hover)] transition-colors ring-accent"
                  aria-label={name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
