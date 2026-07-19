import { useState } from 'react';
import { useToast } from '../Common/ToastContext';

// ── The one thing to edit ──────────────────────────────────────────────
// Paste your Formspree endpoint here (from formspree.io → your form →
// "Integration" tab). Everything else in this file works as-is once this
// is set: https://formspree.io/f/xxxxxxxx
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeeyqyrb';

const initialState = { name: '', email: '', phone: '', subject: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "That email doesn't look right.";
  if (values.phone && !/^[0-9+()\-\s]{7,}$/.test(values.phone)) errors.phone = 'Please enter a valid phone number.';
  if (!values.subject.trim()) errors.subject = 'Let us know what this is about.';
  if (!values.message.trim() || values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

// Submits to Formspree's JSON endpoint. Kept as its own function so the
// delivery mechanism is a single, swappable piece — point this at any other
// backend later without touching validation, state, or markup below.
async function sendToFormspree(values) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => null);
    const message = data?.errors?.map((e) => e.message).join(', ') || 'Submission failed.';
    throw new Error(message);
  }
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('');
  const showToast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      setErrorMessage(
        "This form isn't connected yet — add your Formspree endpoint to FORMSPREE_ENDPOINT in ContactForm.jsx."
      );
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      await sendToFormspree(values);
      setStatus('sent');
      showToast('Message sent — thank you!');
      setValues(initialState);
      setErrors({});
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error && err.message !== 'Submission failed.'
          ? err.message
          : "Something went wrong sending your message. Please try again, or email cultural@rtu.edu.ph directly."
      );
    }
  };

  return (
    <form className="footer-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <input
            id="cf-name" name="name" type="text" placeholder=" "
            value={values.name} onChange={handleChange} disabled={status === 'sending'}
          />
          <label htmlFor="cf-name">Full Name</label>
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>
        <div className="field">
          <input
            id="cf-email" name="email" type="email" placeholder=" "
            value={values.email} onChange={handleChange} disabled={status === 'sending'}
          />
          <label htmlFor="cf-email">Email Address</label>
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <input
            id="cf-phone" name="phone" type="tel" placeholder=" "
            value={values.phone} onChange={handleChange} disabled={status === 'sending'}
          />
          <label htmlFor="cf-phone">Phone Number</label>
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>
        <div className="field">
          <input
            id="cf-subject" name="subject" type="text" placeholder=" "
            value={values.subject} onChange={handleChange} disabled={status === 'sending'}
          />
          <label htmlFor="cf-subject">Subject</label>
          {errors.subject && <span className="field-error">{errors.subject}</span>}
        </div>
      </div>

      <div className="field">
        <textarea
          id="cf-message" name="message" placeholder=" "
          value={values.message} onChange={handleChange} disabled={status === 'sending'}
        />
        <label htmlFor="cf-message">Message</label>
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'sent' && (
        <p className="form-success" role="status">Thanks — your message has been sent. We'll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="field-error" role="alert">{errorMessage}</p>
      )}
    </form>
  );
}
