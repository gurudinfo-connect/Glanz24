import { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import LanguageSwitch from './LanguageSwitch.jsx';
import { company } from '../data/company.js';
import { services } from '../data/services.js';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, tr } = useLang();
  const go = (e) => {
    e.currentTarget.blur();
    setOpen(false);
  };
  const list = services.map(tr);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo light />

        <nav id="hauptnavigation" className={'main-nav' + (open ? ' is-open' : '')} aria-label={t('navAria')}>
          <ul>
            <li><a href="#start" className="is-active" onClick={go}>{t('navHome')}</a></li>
            <li><a href="#ueber-uns" onClick={go}>{t('navAbout')}</a></li>
            <li className="has-sub">
              <a href="#leistungen" onClick={go}>
                {t('navServices')} <ChevronDown size={13} aria-hidden="true" />
              </a>
              <ul className="submenu">
                {list.map((s) => (
                  <li key={s.slug}><a href={'#' + s.slug} onClick={go}>{s.navLabel}</a></li>
                ))}
              </ul>
            </li>
            {list.map((s) => (
              <li key={s.slug} className="nav-service"><a href={'#' + s.slug} onClick={go}>{s.navLabel}</a></li>
            ))}
            <li><a href="#kontakt" onClick={go}>{t('navContact')}</a></li>
            <li className="nav-cta">
              <a href={company.phoneHref}><Phone size={18} aria-hidden="true" /> {company.phone}</a>
            </li>
          </ul>
        </nav>

        <LanguageSwitch />

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="hauptnavigation"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          <span className="sr-only">{open ? t('menuClose') : t('menuOpen')}</span>
        </button>
      </div>
    </header>
  );
}
