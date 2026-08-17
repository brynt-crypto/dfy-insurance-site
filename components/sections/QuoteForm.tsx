"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { quoteForm, site } from "@/lib/site";

type Fields = {
  business: string;
  name: string;
  phone: string;
  email: string;
  coverage: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  business: "",
  name: "",
  phone: "",
  email: "",
  coverage: "",
  message: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (!values.business.trim()) {
    errors.business = "Enter your business name.";
  }
  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }
  // Accept any format with at least 10 digits — people type phone numbers a
  // dozen different ways and rejecting them costs leads.
  if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter a phone number we can reach you on.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.coverage) {
    errors.coverage = "Choose the coverage you need.";
  }

  return errors;
}

export default function QuoteForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof Fields) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear a field's error as soon as the user starts fixing it.
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first problem so keyboard and screen reader users
      // are taken straight to it.
      const first = Object.keys(found)[0];
      document.getElementById(`quote-${first}`)?.focus();
      return;
    }
    // TODO: POST to the CRM / email endpoint. Front-end only for this draft.
    setSubmitted(true);
  };

  return (
    <section id="quote" className="dfy-band">
      <div className="dfy-wrap">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <div>
              <span className="dfy-eyebrow">{quoteForm.eyebrow}</span>
              <h2 className="text-[length:var(--dfy-h2)]">
                {quoteForm.headline}
              </h2>
              <p className="dfy-lead mt-5">{quoteForm.subhead}</p>

              <div className="mt-9 rounded-[var(--dfy-radius-md)] border border-[var(--dfy-hairline)] bg-[var(--dfy-paper-soft)] p-7">
                <p className="text-[length:var(--dfy-small)] font-bold uppercase tracking-[0.1em] text-[var(--dfy-navy)]">
                  Would rather just talk?
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-3 block font-[family-name:var(--dfy-font-display)] text-[1.75rem] font-bold no-underline"
                >
                  {site.phone}
                </a>
                <p className="mt-2 text-[length:var(--dfy-small)] text-[var(--dfy-ink-muted)]">
                  {site.hours}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="dfy-card p-7 md:p-9">
              {submitted ? (
                <div role="status" className="py-8 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--dfy-blue-tint)]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--dfy-blue)"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <h3 className="mt-6 text-[length:var(--dfy-h3)]">
                    Thanks, {values.name.split(" ")[0]}. We have your request.
                  </h3>
                  <p className="dfy-measure mx-auto mt-4 text-[var(--dfy-ink-muted)]">
                    A licensed agent will call {values.phone} within one business
                    hour. If you need something sooner, call us directly at{" "}
                    <a href={site.phoneHref} className="font-semibold">
                      {site.phone}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setValues(EMPTY);
                      setSubmitted(false);
                    }}
                    className="dfy-btn dfy-btn--outline mt-8"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="flex flex-col gap-5">
                    <Field
                      id="quote-business"
                      label="Business name"
                      value={values.business}
                      onChange={update("business")}
                      error={errors.business}
                      placeholder="e.g. Ridgeline Construction Inc."
                      autoComplete="organization"
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        id="quote-name"
                        label="Your name"
                        value={values.name}
                        onChange={update("name")}
                        error={errors.name}
                        placeholder="First and last"
                        autoComplete="name"
                      />
                      <Field
                        id="quote-phone"
                        label="Phone"
                        type="tel"
                        value={values.phone}
                        onChange={update("phone")}
                        error={errors.phone}
                        placeholder="(555) 555-0100"
                        autoComplete="tel"
                      />
                    </div>

                    <Field
                      id="quote-email"
                      label="Email"
                      type="email"
                      value={values.email}
                      onChange={update("email")}
                      error={errors.email}
                      placeholder="you@company.com"
                      autoComplete="email"
                    />

                    <div>
                      <label className="dfy-label" htmlFor="quote-coverage">
                        What coverage do you need?
                      </label>
                      <select
                        id="quote-coverage"
                        className="dfy-input"
                        value={values.coverage}
                        onChange={(e) => update("coverage")(e.target.value)}
                        aria-invalid={Boolean(errors.coverage)}
                        aria-describedby={
                          errors.coverage ? "quote-coverage-error" : undefined
                        }
                      >
                        <option value="">Select a coverage…</option>
                        {quoteForm.coverageOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.coverage && (
                        <span className="dfy-error" id="quote-coverage-error">
                          {errors.coverage}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="dfy-label" htmlFor="quote-message">
                        Anything else we should know?{" "}
                        <span className="font-normal text-[var(--dfy-ink-muted)]">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="quote-message"
                        rows={3}
                        className="dfy-input resize-y"
                        placeholder="Number of employees, vehicles, upcoming jobs, current carrier…"
                        value={values.message}
                        onChange={(e) => update("message")(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="dfy-btn dfy-btn--primary w-full"
                    >
                      Get My Free Quote
                    </button>

                    <p className="text-center text-[length:var(--dfy-small)] text-[var(--dfy-ink-muted)]">
                      No obligation. We never sell your information.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="dfy-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="dfy-input"
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span className="dfy-error" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}
