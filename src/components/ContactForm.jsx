import { useState } from 'react';
import { Send } from 'lucide-react';
import { company } from '../data/company.js';

/*
 * Integration:
 * - Ist VITE_CONTACT_ENDPOINT gesetzt (.env), wird das Formular als JSON per POST
 *   an diesen Endpunkt gesendet (z. B. ein vom Unternehmen freigegebener Formular-Dienst).
 * - Ist nichts konfiguriert, wird das E-Mail-Programm des Besuchers mit einer
 *   vorausgefüllten Nachricht an die Firmen-E-Mail-Adresse geöffnet.
 * Es werden keine Zugangsdaten oder Endpunkte im Code hinterlegt.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

const initial = { name: '', company: '', email: '', phone: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Bitte geben Sie Ihren Namen ein.';
  if (!v.email.trim()) e.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
  if (!v.message.trim()) e.message = 'Bitte geben Sie eine Nachricht ein.';
  return e;
}

export default function ContactForm({ idPrefix = 'kf' }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ type: 'error', text: 'Bitte überprüfen Sie die markierten Felder.' });
      return;
    }

    try {
      if (ENDPOINT) {
        setStatus({ type: 'sending', text: 'Nachricht wird gesendet …' });
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error('Request failed');
        setStatus({ type: 'success', text: 'Vielen Dank! Ihre Nachricht wurde gesendet.' });
      } else {
        const subject = encodeURIComponent('Anfrage über die Website – ' + values.name.trim());
        const body = encodeURIComponent(
          `Name: ${values.name}\nUnternehmen: ${values.company}\nE-Mail: ${values.email}\nTelefon: ${values.phone}\n\n${values.message}`
        );
        window.open(`${company.emailHref}&su=${subject}&body=${body}`, '_blank', 'noopener');
        setStatus({
          type: 'success',
          text: 'Gmail wurde mit Ihrer Nachricht in einem neuen Tab geöffnet. Bitte senden Sie die E-Mail dort ab.',
        });
      }
      setValues(initial);
    } catch {
      setStatus({
        type: 'error',
        text: `Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an ${company.email}.`,
      });
    }
  };

  const field = (name) => ({
    id: `${idPrefix}-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `${idPrefix}-${name}-fehler` : undefined,
  });

  const err = (name) =>
    errors[name] ? (
      <span className="field-error" id={`${idPrefix}-${name}-fehler`}>{errors[name]}</span>
    ) : null;

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={`${idPrefix}-name`}>Name <span aria-hidden="true">*</span></label>
          <input type="text" autoComplete="name" placeholder="Ihr Name" required {...field('name')} />
          {err('name')}
        </div>
        <div className="form-field">
          <label htmlFor={`${idPrefix}-company`}>Unternehmen (optional)</label>
          <input type="text" autoComplete="organization" placeholder="Ihr Unternehmen" {...field('company')} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={`${idPrefix}-email`}>E-Mail <span aria-hidden="true">*</span></label>
          <input type="email" autoComplete="email" placeholder="Ihre E-Mail-Adresse" required {...field('email')} />
          {err('email')}
        </div>
        <div className="form-field">
          <label htmlFor={`${idPrefix}-phone`}>Telefon (optional)</label>
          <input type="tel" autoComplete="tel" placeholder="Ihre Telefonnummer" {...field('phone')} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor={`${idPrefix}-message`}>Ihre Nachricht <span aria-hidden="true">*</span></label>
        <textarea rows="3" placeholder="Ihre Nachricht an uns ..." required {...field('message')} />
        {err('message')}
      </div>
      <button type="submit" className="btn btn-gold btn-send" disabled={status.type === 'sending'}>
        <Send size={18} aria-hidden="true" /> Nachricht senden
      </button>
      {status.text && (
        <p
          className={'form-status form-status-' + status.type}
          role={status.type === 'error' ? 'alert' : 'status'}
        >
          {status.text}
        </p>
      )}
    </form>
  );
}
