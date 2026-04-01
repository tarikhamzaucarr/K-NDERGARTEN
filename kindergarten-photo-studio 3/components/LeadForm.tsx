'use client';

import { FormEvent, useMemo, useState } from 'react';

type LeadFormProps = {
  whatsappNumber: string;
  email: string;
};

type FormState = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: '',
  phone: '',
  service: '',
  message: ''
};

function sanitizePhoneNumber(phone: string) {
  return phone.replace(/[^\d+\s()-]/g, '').trim();
}

export function LeadForm({ whatsappNumber, email }: LeadFormProps) {
  const [formState, setFormState] = useState<FormState>(INITIAL_STATE);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const isFormValid = useMemo(() => {
    return Boolean(formState.name.trim() && formState.phone.trim() && formState.service.trim());
  }, [formState]);

  const handleChange = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setFormState((currentState) => ({
      ...currentState,
      [field]: value
    }));

    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) {
      setErrorMessage('Lütfen ad, telefon ve ilgilendiğiniz hizmet alanlarını doldurun.');
      return;
    }

    const lines = [
      'Merhaba, teklif almak istiyorum.',
      `Ad Soyad: ${formState.name.trim()}`,
      `Telefon: ${sanitizePhoneNumber(formState.phone)}`,
      `Hizmet: ${formState.service.trim()}`
    ];

    if (formState.message.trim()) {
      lines.push(`Not: ${formState.message.trim()}`);
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="lead-name">
        Ad Soyad
        <input
          id="lead-name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Ad Soyad"
          value={formState.name}
          onChange={(event) => handleChange('name', event.target.value)}
          required
        />
      </label>

      <label htmlFor="lead-phone">
        Telefon
        <input
          id="lead-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="05XX XXX XX XX"
          value={formState.phone}
          onChange={(event) => handleChange('phone', event.target.value)}
          required
        />
      </label>

      <label htmlFor="lead-service">
        İlgilendiğiniz hizmet
        <select
          id="lead-service"
          name="service"
          value={formState.service}
          onChange={(event) => handleChange('service', event.target.value)}
          required
        >
          <option value="" disabled>
            Hizmet seçin
          </option>
          <option value="Fotoğraf çekimi">Fotoğraf çekimi</option>
          <option value="Albüm ve baskı ürünleri">Albüm ve baskı ürünleri</option>
          <option value="Kurumsal tanıtım filmi">Kurumsal tanıtım filmi</option>
          <option value="Meslek animasyonu">Meslek animasyonu</option>
        </select>
      </label>

      <label htmlFor="lead-message">
        Kısa not
        <textarea
          id="lead-message"
          name="message"
          placeholder="Sınıf sayısı, okul adı veya tarih beklentinizi yazabilirsiniz."
          value={formState.message}
          onChange={(event) => handleChange('message', event.target.value)}
        />
      </label>

      {errorMessage ? (
        <p className="form-message form-message-error" role="alert">
          {errorMessage}
        </p>
      ) : (
        <p className="form-message">
          Gönderdiğinizde WhatsApp üzerinde hazır teklif mesajı açılır. E-posta için{' '}
          <a href={`mailto:${email}`}>{email}</a> adresini de kullanabilirsiniz.
        </p>
      )}

      <button type="submit" className="button button-primary button-full-width">
        Formu WhatsApp ile Gönder
      </button>
    </form>
  );
}
