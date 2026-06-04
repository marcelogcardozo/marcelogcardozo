import { useLanguage } from '../../contexts/LanguageContext';
import { Section } from '../Section';

const CATEGORY_ORDER = ['core', 'backend', 'data', 'cloud', 'frontend', 'ai'] as const;

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <Section id="skills" index="03" title={t.skills.title} wide>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
        {CATEGORY_ORDER.map((key) => {
          const label = t.skills.categories[key];
          const items = t.skills.list[key];
          if (!items || items.length === 0) return null;

          return (
            <div key={key}>
              <div className="flex items-baseline justify-between gap-4 mb-3 pb-2 border-b border-[var(--line)]">
                <h3 className="text-sm font-medium text-[var(--text)]">{label}</h3>
                <span className="mono text-xs text-[var(--faint)] tabular-nums">
                  {String(items.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li key={skill} className="chip">{skill}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
