import { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { company } from '../data/company.js';
import Logo from './Logo.jsx';
import { services } from '../data/services.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const go = (e) => {
    e.currentTarget.blur();
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo light />
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="hauptnavigation"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          <span className="sr-only">{open ? 'Menü schließen' : 'Menü öffnen'}</span>
        </button>

        <nav id="hauptnavigation" className={'main-nav' + (open ? ' is-open' : '')} aria-label="Hauptnavigation">
          <ul>
            <li><a href="#start" className="is-active" onClick={go}>Startseite</a></li>
            <li><a href="#ueber-uns" onClick={go}>Über uns</a></li>
            <li className="has-sub">
              <a href="#leistungen" onClick={go}>
                Unsere Leistungen <ChevronDown size={13} aria-hidden="true" />
              </a>
              <ul className="submenu">
                {services.map((s) => (
                  <li key={s.slug}><a href={'#' + s.slug} onClick={go}>{s.navLabel}</a></li>
                ))}
              </ul>
            </li>
            {services.map((s) => (
              <li key={s.slug} className="nav-service"><a href={'#' + s.slug} onClick={go}>{s.navLabel}</a></li>
            ))}
            <li><a href="#kontakt" onClick={go}>Kontakt</a></li>
            <li className="nav-cta">
              <a href={company.phoneHref}><Phone size={18} aria-hidden="true" /> {company.phone}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
