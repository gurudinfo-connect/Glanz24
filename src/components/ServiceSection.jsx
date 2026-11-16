import { Check, ListChecks } from 'lucide-react';
import MediaPanel from './MediaPanel.jsx';

// Ein Geschäftsbereich als eigener Abschnitt der One-Page-Seite.
export default function ServiceSection({ service, index }) {
  const s = service;
  const flip = index % 2 === 1;
  return (
    <section
      id={s.slug}
      className={'section service-section' + (flip ? ' is-flipped section-alt' : '')}
      aria-labelledby={s.slug + '-titel'}
    >
      <div className="container service-layout">
        <div className="service-side">
          <MediaPanel name={s.slug} alt={s.title} className="service-media" />
          {s.inquiry && (
            <div className="inquiry-box">
              <h3>
                <ListChecks size={20} aria-hidden="true" /> Hilfreich für Ihre Anfrage
              </h3>
              <ul>
                {s.inquiry.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="service-content">
          <p className="eyebrow">Geschäftsbereich {String(index + 1).padStart(2, '0')}</p>
          <h2 id={s.slug + '-titel'} className="title-bar">{s.title}</h2>
          <p className="lead">{s.intro}</p>
          {s.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {s.note && <p className="scope-note">{s.note}</p>}
          <ul className="item-list">
            {s.items.map(([name, text]) => (
              <li key={name}>
                <Check size={20} aria-hidden="true" className="item-check" />
                <div>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="service-actions">
            <a href="#kontakt" className="btn btn-gold">Jetzt anfragen</a>
            <a href="#start" className="btn btn-outline-navy">Nach oben</a>
          </div>
        </div>
      </div>
    </section>
  );
}
