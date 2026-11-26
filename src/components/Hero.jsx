import { ArrowRight, Mail } from 'lucide-react';
import { company } from '../data/company.js';
import { getImage } from '../utils/images.js';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function Hero() {
  const { t } = useLang();
  const photo = getImage('hero');
  const photoMobile = getImage('hero-mobile') || photo;
  const vars = {};
  if (photo) vars['--hero-photo'] = `url(${photo})`;
  if (photoMobile) vars['--hero-photo-m'] = `url(${photoMobile})`;
  return (
    <section id="start" className="hero" aria-labelledby="hero-titel">
      <div className="hero-photo" style={vars} role="img" aria-label={t('heroAlt')} />
      <div className="hero-stripe" aria-hidden="true" />
      <div className="hero-panel" aria-hidden="true" />
      <div className="hero-inner">
        <p className="hero-kicker"><span className="line" /> {company.name}</p>
        <h1 id="hero-titel">Glanz<span>24</span> GmbH</h1>
        <p className="hero-tagline">{t('heroTag1')}<br />{t('heroTag2')}</p>
        <p className="hero-text">{t('heroText')}</p>
        <div className="hero-actions">
          <a href="#leistungen" className="btn btn-gold">{t('heroBtn1')} <ArrowRight size={18} aria-hidden="true" /></a>
          <a href="#kontakt" className="btn btn-outline-light"><Mail size={18} aria-hidden="true" /> {t('heroBtn2')}</a>
        </div>
      </div>
    </section>
  );
}
