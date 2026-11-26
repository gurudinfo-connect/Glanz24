import { company } from '../data/company.js';
import { useLang } from '../i18n/LanguageContext.jsx';

function Row({ label, children }) {
  return (
    <div className="legal-row">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

// Impressum – nur mit den vorliegenden Firmendaten.
export default function LegalSection() {
  const { t } = useLang();
  const address = (
    <address>
      <strong>{company.name}</strong>
      <br />
      {company.street}
      <br />
      {company.cityLine}
    </address>
  );
  const phone = <a href={company.phoneHref}>{company.phone}</a>;
  const email = <a href={company.emailHref} target="_blank" rel="noopener noreferrer">{company.email}</a>;

  return (
    <section className="section section legal-band" aria-label={t('legalAria')}>
      <div className="container legal-grid">
        <article className="legal-card" id="impressum" aria-labelledby="impressum-titel">
          <h2 id="impressum-titel" className="title-bar">{t('legalTitle')}</h2>
          <p className="legal-sub">{t('legalSub')}</p>
          <dl>
            <Row label={t('lAddress')}>{address}</Row>
            <Row label={t('lPhone')}>{phone}</Row>
            <Row label={t('lEmail')}>{email}</Row>
          </dl>
        </article>
      </div>
    </section>
  );
}
