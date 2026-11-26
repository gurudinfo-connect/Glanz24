import { useState } from 'react';
import { Send } from 'lucide-react';
import { company } from '../data/company.js';
import { useLang } from '../i18n/LanguageContext.jsx';

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

function validate(v, t) {
  const e = {};
  if (!v.name.trim()) e.name = t('eName');
  if (!v.email.trim()) e.email = t('eEmail');
  else if (!EMAIL_RE.test(v.email.trim())) e.email = t('eEmailInvalid');
  if (!v.message.trim()) e.message = t('eMessage');
  return e;
}

export default function ContactForm({ idPrefix = 'kf' }) {
  const { t } = useLang();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const found = validate(values, t);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ type: 'error', text: t('eCheck') });
      return;
    }

    try {
      if (ENDPOINT) {
        setStatus({ type: 'sending', text: t('sSending') });
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error('Request failed');
        setStatus({ type: 'success', text: t('sSent') });
      } else {
        const subject = encodeURIComponent(t('mailSubject') + values.name.trim());
        const body = encodeURIComponent(
          `Name: ${values.name}\n${t('mailCompany')}: ${values.company}\nE-Mail: ${values.email}\n${t('mailPhone')}: ${values.phone}\n\n${values.message}`
        );
        window.open(`${company.emailHref}&su=${subject}&body=${body}`, '_blank', 'noopener');
        setStatus({
          type: 'success',
          text: t('sGmail'),
        });
      }
      setValues(initial);
    } catch {
      setStatus({
        type: 'error',
        text: t('sFail')(company.email),
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
          <label htmlFor={`${idPrefix}-name`}>{t('fName')} <span aria-hidden="true">*</span></label>
          <input type="text" autoComplete="name" placeholder={t('fNamePh')} required {...field('name')} />
          {err('name')}
        </div>
        <div className="form-field">
          <label htmlFor={`${idPrefix}-company`}>{t('fCompany')}</label>
          <input type="text" autoComplete="organization" placeholder={t('fCompanyPh')} {...field('company')} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={`${idPrefix}-email`}>{t('fEmail')} <span aria-hidden="true">*</span></label>
          <input type="email" autoComplete="email" placeholder={t('fEmailPh')} required {...field('email')} />
          {err('email')}
        </div>
        <div className="form-field">
          <label htmlFor={`${idPrefix}-phone`}>{t('fPhone')}</label>
          <input type="tel" autoComplete="tel" placeholder={t('fPhonePh')} {...field('phone')} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor={`${idPrefix}-message`}>{t('fMessage')} <span aria-hidden="true">*</span></label>
        <textarea rows="3" placeholder={t('fMessagePh')} required {...field('message')} />
        {err('message')}
      </div>
      <button type="submit" className="btn btn-gold btn-send" disabled={status.type === 'sending'}>
        <Send size={18} aria-hidden="true" /> {t('fSend')}
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
