import { useLanguage } from '../../contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="border-t border-[var(--line)]">
      <div className="container-wide py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--faint)]">
        <span>{t.contact.location}</span>
        <span>© {new Date().getFullYear()} Marcelo Cardozo. {t.contact.rights}</span>
      </div>
    </footer>
  );
};
