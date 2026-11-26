import { MapPin, Phone, Mail } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { company } from '../data/company.js';

export default function ContactInfo() {
  const { t } = useLang();
  return (
    <div className="contact-info">
      <p className="kicker-light"><span className="line" /> {t('contactKicker')}</p>
      <h2 id="kontakt-titel">{t('contactTitle')}</h2>
      <p className="contact-lead">{t('contactLead')}</p>
      <ul>
        <li><MapPin size={24} aria-hidden="true" /><address>{company.street}<br />{company.cityLine}</address></li>
        <li><Phone size={24} aria-hidden="true" /><a href={company.phoneHref}>{company.phone}</a></li>
        <li><Mail size={24} aria-hidden="true" /><a href={company.emailHref} target="_blank" rel="noopener noreferrer">{company.email}</a></li>
      </ul>
    </div>
  );
}
