import { useLang } from '../i18n/LanguageContext.jsx';

// Wortmarke mit „G“-Symbol (Navy/Gold) nach dem Design-Vorbild.
export default function Logo({ light = false }) {
  const { t } = useLang();
  return (
    <a href="#start" className={'logo' + (light ? ' logo-light' : '')} aria-label={t('logoAria')}>
      <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <path className="g-navy" d="M52 14C46 8 38 5 29 6 15 8 6 19 7 32c1 14 12 25 27 25 8 0 15-3 19-8V33H33v8h11v2c-3 3-7 5-11 5-9 0-16-7-17-16-1-10 6-18 15-19 6-1 11 1 15 5z" />
        <path className="g-gold" d="M13 36c4 10 14 15 24 12 6-2 11-6 13-11-6 6-16 8-24 4-4-2-8-5-13-5z M56 10C50 4 41 1 32 2c-8 1-15 5-19 11 8-5 17-6 25-3 7 2 13 6 18 0z" />
      </svg>
      <span className="logo-text">Glanz24 GmbH</span>
    </a>
  );
}
