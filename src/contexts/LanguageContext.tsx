import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations } from '../i18n/translations';

type Language = 'pt-BR' | 'en-US';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations['pt-BR'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang || 'pt-BR';
  });

  const toggleLanguage = () => {
    const newLang = language === 'pt-BR' ? 'en-US' : 'pt-BR';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
