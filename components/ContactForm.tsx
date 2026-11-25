"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      setStatus("Please complete all fields before continuing.");
      return;
    }

    const subject = `Website enquiry from ${name.trim()}`;
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
    setStatus("Your email app should open with your message ready to send.");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="contact-name">
          Name
        </label>
        <input
          autoComplete="name"
          id="contact-name"
          maxLength={100}
          name="name"
          required
          type="text"
        />
      </div>
      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="contact-email">
          Email
        </label>
        <input
          autoComplete="email"
          id="contact-email"
          maxLength={254}
          name="email"
          required
          type="email"
        />
      </div>
      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          maxLength={2000}
          name="message"
          required
          rows={5}
        />
      </div>
      <button className="button button-primary" type="submit">
        <Mail size={17} aria-hidden="true" />
        Continue in email
        <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      <p className="contact-form-status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
