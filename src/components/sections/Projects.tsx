import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Lock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Section } from '../Section';
import { staggerContainer, fadeUp, inView } from '../../lib/motion';

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <Section id="projects" index="02" title={t.projects.title} wide>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        {t.projects.projects.map((project) => {
          const primary = project.url || (!project.private ? project.git : '');

          const preview = project.image && (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full aspect-video object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          );

          return (
            <motion.article key={project.title} variants={fadeUp} className="group flex flex-col">
              {project.image && (
                primary ? (
                  <a
                    href={primary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg border border-[var(--line)] group-hover:border-[var(--line-strong)] transition-colors ring-accent"
                    aria-label={project.title}
                  >
                    {preview}
                  </a>
                ) : (
                  <div className="overflow-hidden rounded-lg border border-[var(--line)]">{preview}</div>
                )
              )}

              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-base font-medium text-[var(--text)]">{project.title}</h3>
                {primary && (
                  <a
                    href={primary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 shrink-0 text-[var(--faint)] hover:text-[var(--accent)] transition-colors ring-accent"
                    aria-label={project.title}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)] line-clamp-3">
                {project.description}
              </p>

              <div className="mt-3 flex items-center gap-4 text-xs">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--accent)] transition-colors ring-accent"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    {t.projects.viewProject}
                  </a>
                )}
                {project.git && !project.private && (
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--accent)] transition-colors ring-accent"
                  >
                    <Github className="w-3.5 h-3.5" />
                    {t.projects.viewCode}
                  </a>
                )}
                {project.private && (
                  <span className="inline-flex items-center gap-1.5 text-[var(--faint)]">
                    <Lock className="w-3.5 h-3.5" />
                    {t.projects.privateRepo}
                  </span>
                )}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
};
