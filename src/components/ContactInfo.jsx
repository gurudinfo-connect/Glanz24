import { MapPin, Phone, Mail } from 'lucide-react';
import { company } from '../data/company.js';

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <p className="kicker-light"><span className="line" /> KONTAKT</p>
      <h2 id="kontakt-titel">Kontaktieren Sie uns</h2>
      <p className="contact-lead">Wir freuen uns auf Ihre Anfrage und beraten Sie gerne.</p>
      <ul>
        <li><MapPin size={24} aria-hidden="true" /><address>{company.street}<br />{company.cityLine}</address></li>
        <li><Phone size={24} aria-hidden="true" /><a href={company.phoneHref}>{company.phone}</a></li>
        <li><Mail size={24} aria-hidden="true" /><a href={company.emailHref} target="_blank" rel="noopener noreferrer">{company.email}</a></li>
      </ul>
    </div>
  );
}
