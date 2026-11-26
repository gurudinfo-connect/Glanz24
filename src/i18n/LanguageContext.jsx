import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui, servicesEn } from './translations.js';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'glanz24-lang';

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'de' || saved === 'en') return saved;
  } catch { /* Speicher nicht verfügbar */ }
  return 'de'; // Standardsprache
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  const setLang = useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignorieren */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].htmlTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', ui[lang].htmlDesc);
  }, [lang]);

  const value = useMemo(() => {
    const dict = ui[lang];
    return {
      lang,
      setLang,
      t: (key) => dict[key],
      // Geschäftsbereich in der gewählten Sprache
      tr: (service) => (lang === 'en' ? { ...service, ...servicesEn[service.slug] } : service),
    };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
