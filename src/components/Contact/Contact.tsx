import { useState, type ChangeEvent, type FormEvent } from "react";
import "./Contact.scss";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const field = name as keyof FormData;

    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));

    setSuccessMessage("");
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ange ditt namn.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Ange din e-postadress.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ange en giltig e-postadress.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Ange ditt telefonnummer.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Ange ett ämne.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Skriv ett meddelande.";
    }

    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    setSuccessMessage(
      "Tack för ditt meddelande!"
    );

    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <header className="contact__header">
          <span className="contact__number">03</span>
          <h2>Kontakta mig!</h2>
        </header>

        <div className="contact__content">
          <div className="contact__intro">
            <h3>
              HAR DU ETT PROJEKT
              <br />
              ELLER EN IDÉ?
            </h3>

            <p>
              Jag är alltid öppen för nya projekt, samarbeten och möjligheter.
              Hör gärna av dig så tar vi det därifrån.
            </p>
          </div>

          <form
            className="contact__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="contact__fields">
              <div className="contact__field">
                <label htmlFor="name">Namn</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="NAMN"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                />
                {errors.name && (
                  <p className="contact__error" id="name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="email">E-post</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-POST"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
                {errors.email && (
                  <p className="contact__error" id="email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="phone">Telefon</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="TELEFON"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  required
                />
                {errors.phone && (
                  <p className="contact__error" id="phone-error">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="subject">Ämne</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="ÄMNE"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                  required
                />
                {errors.subject && (
                  <p className="contact__error" id="subject-error">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="contact__field contact__field--message">
                <label htmlFor="message">Meddelande</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="MEDDELANDE"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  required
                />
                {errors.message && (
                  <p className="contact__error" id="message-error">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <button className="contact__submit" type="submit">
              SKICKA MEDDELANDE
              <span aria-hidden="true">→</span>
            </button>

            {successMessage && (
              <p className="contact__success" role="status">
                {successMessage}
              </p>
            )}
          </form>
        </div>

        <footer className="contact__footer">
          <a href="mailto:rasmus.fransson11@gmail.com">
            <span className="contact__footer-label">EMAIL</span>
            <span className="contact__footer-value">
              rasmus.fransson11@gmail.com
            </span>
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rasmus-fransson1/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__footer-label">LINKEDIN</span>
            <span className="contact__footer-value">LinkedIn-profil</span>
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="https://github.com/RasmusFranssonHub"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__footer-label">GITHUB</span>
            <span className="contact__footer-value">GitHub-profil</span>
            <span aria-hidden="true">→</span>
          </a>

          <div className="contact__location">
            <span className="contact__footer-label">PLATS</span>
            <span className="contact__footer-value">
              Härnösand, Sverige
            </span>
            <span aria-hidden="true">→</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
