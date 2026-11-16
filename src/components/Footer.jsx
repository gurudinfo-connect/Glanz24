import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import Logo from './Logo.jsx';
import { company } from '../data/company.js';
import { services } from '../data/services.js';

const Item = ({ href, children }) => (
  <li><a href={href}><ChevronRight size={13} aria-hidden="true" /> {children}</a></li>
);

export default function Footer() {
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
        <nav className="footer-col" aria-label="Leistungen">
          <h2>Unsere Leistungen</h2>
          <ul>{services.map((s) => <Item key={s.slug} href={'#' + s.slug}>{s.title}</Item>)}</ul>
        </nav>
        <nav className="footer-col" aria-label="Navigation">
          <h2>Navigation</h2>
          <ul>
            <Item href="#start">Startseite</Item>
            <Item href="#ueber-uns">Über uns</Item>
            <Item href="#leistungen">Unsere Leistungen</Item>
            <Item href="#kontakt">Kontakt</Item>
          </ul>
        </nav>
        <nav className="footer-col" aria-label="Rechtliches">
          <h2>Rechtliches</h2>
          <ul>
            <Item href="#impressum">Impressum</Item>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.</div>
    </footer>
  );
}
