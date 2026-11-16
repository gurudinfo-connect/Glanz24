import { MapPin, Phone, Mail } from 'lucide-react';
import { company } from '../data/company.js';

export default function InfoStrip() {
  return (
    <div className="info-strip">
      <div className="container info-grid">
        <div className="info-item">
          <MapPin size={30} aria-hidden="true" />
          <address>{company.street}<br />{company.cityLine}</address>
        </div>
        <div className="info-item">
          <Phone size={30} aria-hidden="true" />
          <a href={company.phoneHref}>{company.phone}</a>
        </div>
        <div className="info-item">
          <Mail size={30} aria-hidden="true" />
          <a href={company.emailHref} target="_blank" rel="noopener noreferrer">{company.email}</a>
        </div>
      </div>
    </div>
  );
}
