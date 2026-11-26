import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import Logo from './Logo.jsx';
import { company } from '../data/company.js';
import { services } from '../data/services.js';
import { useLang } from '../i18n/LanguageContext.jsx';

const Item = ({ href, children }) => (
  <li><a href={href}><ChevronRight size={13} aria-hidden="true" /> {children}</a></li>
);

export default function Footer() {
  const { t, tr } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col footer-brand">
          <Logo light />
          <ul className="footer-contact">
            <li><MapPin size={20} aria-hidden="true" /><address>{company.street}<br />{company.cityLine}</address></li>
            <li><Phone size={20} aria-hidden="true" /><a href={company.phoneHref}>{company.phone}</a></li>
            <li><Mail size={20} aria-hidden="true" /><a href={company.emailHref} target="_blank" rel="noopener noreferrer">{company.email}</a></li>
          </ul>
        </div>
        <nav className="footer-col" aria-label={t('footServices')}>
          <h2>{t('footServices')}</h2>
          <ul>{services.map(tr).map((s) => <Item key={s.slug} href={'#' + s.slug}>{s.title}</Item>)}</ul>
        </nav>
        <nav className="footer-col" aria-label={t('footNav')}>
          <h2>{t('footNav')}</h2>
          <ul>
            <Item href="#start">{t('navHome')}</Item>
            <Item href="#ueber-uns">{t('navAbout')}</Item>
            <Item href="#leistungen">{t('navServices')}</Item>
            <Item href="#kontakt">{t('navContact')}</Item>
          </ul>
        </nav>
        <nav className="footer-col" aria-label={t('footLegal')}>
          <h2>{t('footLegal')}</h2>
          <ul>
            <Item href="#impressum">{t('footImprint')}</Item>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {company.name}. {t('rights')}</div>
    </footer>
  );
}
