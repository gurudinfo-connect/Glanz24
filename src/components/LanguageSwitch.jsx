import { Globe } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext.jsx';

// Sprachauswahl: Deutsch / Englisch
export default function LanguageSwitch() {
  const { lang, setLang, t } = useLang();
  const opts = [
    ['de', 'DE', t('langDe')],
    ['en', 'EN', t('langEn')],
  ];
  return (
    <div className="lang-switch" role="group" aria-label={t('langLabel')}>
      <Globe size={18} aria-hidden="true" className="lang-globe" />
      {opts.map(([code, short, full]) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={'lang-btn' + (lang === code ? ' is-active' : '')}
          aria-pressed={lang === code}
          aria-label={full}
          title={full}
          onClick={() => setLang(code)}
        >
          {short}
        </button>
      ))}
    </div>
  );
}
