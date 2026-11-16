import { ArrowRight, Mail } from 'lucide-react';
import { company } from '../data/company.js';
import { getImage } from '../utils/images.js';

export default function Hero() {
  const photo = getImage('hero');
  return (
    <section id="start" className="hero" aria-labelledby="hero-titel">
      <div className="hero-photo" style={photo ? { backgroundImage: `url(${photo})` } : undefined} role="img" aria-label="Firmengebäude der Glanz24 GmbH" />
      <div className="hero-stripe" aria-hidden="true" />
      <div className="hero-panel" aria-hidden="true" />
      <div className="hero-inner">
        <p className="hero-kicker"><span className="line" /> {company.name}</p>
        <h1 id="hero-titel">Glanz<span>24</span> GmbH</h1>
        <p className="hero-tagline">Ihr zuverlässiger<br />Dienstleistungspartner</p>
        <p className="hero-text">
          Eine vielseitige Dienstleistungsfirma mit sechs Geschäftsbereichen – kompetent,
          zuverlässig und kundenorientiert.
        </p>
        <div className="hero-actions">
          <a href="#leistungen" className="btn btn-gold">Unsere Leistungen <ArrowRight size={18} aria-hidden="true" /></a>
          <a href="#kontakt" className="btn btn-outline-light"><Mail size={18} aria-hidden="true" /> Kontakt</a>
        </div>
      </div>
    </section>
  );
}
