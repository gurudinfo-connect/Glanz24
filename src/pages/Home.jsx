import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import InfoStrip from '../components/InfoStrip.jsx';
import ServiceGrid from '../components/ServiceGrid.jsx';
import ServiceSection from '../components/ServiceSection.jsx';
import ContactInfo from '../components/ContactInfo.jsx';
import ContactForm from '../components/ContactForm.jsx';
import LegalSection from '../components/LegalSection.jsx';
import { services } from '../data/services.js';
import { getImage } from '../utils/images.js';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function Home() {
  const about = getImage('about');
  const { t, tr } = useLang();
  return (
    <>
      <Hero />
      <InfoStrip />

      <section className="section services-intro" id="leistungen" aria-labelledby="leistungen-titel">
        <div className="container">
          <p className="kicker"><span className="line" /> {t('svcKicker')} <span className="line" /></p>
          <h2 id="leistungen-titel" className="section-title">{t('svcTitle')}</h2>
          <p className="section-sub">{t('svcSub')}</p>
          <ServiceGrid />
        </div>
      </section>

      <section className="about" id="ueber-uns" aria-labelledby="ueber-titel">
        <div className="about-photo" style={about ? { backgroundImage: `url(${about})` } : undefined} role="img" aria-label={t('aboutAlt')} />
        <div className="about-text">
          <p className="kicker kicker-left"><span className="line" /> {t('aboutKicker')}</p>
          <h2 id="ueber-titel">{t('aboutTitle')}</h2>
          <p>{t('aboutText')}</p>
          <a href="#kontakt" className="btn btn-outline-gold">{t('aboutBtn')} <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="contact" id="kontakt" aria-labelledby="kontakt-titel">
        <ContactInfo />
        <ContactForm idPrefix="home" />
      </section>

      <div className="details-head">
        <p className="kicker"><span className="line" /> {t('detKicker')} <span className="line" /></p>
        <h2 className="section-title">{t('detTitle')}</h2>
      </div>
      {services.map((s, i) => (
        <ServiceSection key={s.slug} service={tr(s)} index={i} />
      ))}

      <LegalSection />
    </>
  );
}
