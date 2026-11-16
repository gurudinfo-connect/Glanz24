import { company } from '../data/company.js';

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
    <section className="section section legal-band" aria-label="Rechtliches">
      <div className="container legal-grid">
        <article className="legal-card" id="impressum" aria-labelledby="impressum-titel">
          <h2 id="impressum-titel" className="title-bar">Impressum</h2>
          <p className="legal-sub">Angaben gemäß § 5 DDG</p>
          <dl>
            <Row label="Anschrift">{address}</Row>
            <Row label="Telefon">{phone}</Row>
            <Row label="E-Mail">{email}</Row>
          </dl>
        </article>
      </div>
    </section>
  );
}
