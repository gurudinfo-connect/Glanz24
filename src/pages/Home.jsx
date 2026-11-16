import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import InfoStrip from '../components/InfoStrip.jsx';
import ServiceGrid from '../components/ServiceGrid.jsx';
import ServiceSection from '../components/ServiceSection.jsx';
import ContactInfo from '../components/ContactInfo.jsx';
import ContactForm from '../components/ContactForm.jsx';
import LegalSection from '../components/LegalSection.jsx';
import { company } from '../data/company.js';
import { services } from '../data/services.js';
import { getImage } from '../utils/images.js';

export default function Home() {
  const about = getImage('about');
  return (
    <>
      <Hero />
      <InfoStrip />

      <section className="section services-intro" id="leistungen" aria-labelledby="leistungen-titel">
        <div className="container">
          <p className="kicker"><span className="line" /> UNSERE LEISTUNGEN <span className="line" /></p>
          <h2 id="leistungen-titel" className="section-title">Sechs Geschäftsbereiche aus einer Hand</h2>
          <p className="section-sub">Umfassende Dienstleistungen für Unternehmen und Privatkunden.</p>
          <ServiceGrid />
        </div>
      </section>

      <section className="about" id="ueber-uns" aria-labelledby="ueber-titel">
        <div className="about-photo" style={about ? { backgroundImage: `url(${about})` } : undefined} role="img" aria-label="Empfangsbereich der Glanz24 GmbH" />
        <div className="about-text">
          <p className="kicker kicker-left"><span className="line" /> ÜBER UNS</p>
          <h2 id="ueber-titel">Über uns</h2>
          <p>
            Die {company.name} ist eine Dienstleistungsfirma (Service Company) mit sechs
            Geschäftsbereichen. Wir bieten unseren Kunden ein breites Leistungsspektrum – von
            professionellem Gebäudemanagement über moderne IT-Services bis hin zu Automobile,
            Unfallfahrzeuge, Personalvermittlung sowie Import &amp; Export.
          </p>
          <a href="#kontakt" className="btn btn-outline-gold">Mehr über uns <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="contact" id="kontakt" aria-labelledby="kontakt-titel">
        <ContactInfo />
        <ContactForm idPrefix="home" />
      </section>

      <div className="details-head">
        <p className="kicker"><span className="line" /> IM DETAIL <span className="line" /></p>
        <h2 className="section-title">Unsere Geschäftsbereiche im Überblick</h2>
      </div>
      {services.map((s, i) => (
        <ServiceSection key={s.slug} service={s} index={i} />
      ))}

      <LegalSection />
    </>
  );
}
