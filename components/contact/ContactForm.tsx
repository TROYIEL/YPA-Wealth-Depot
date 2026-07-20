"use client";

import { FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialData: FormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.name.trim().length < 2) {
      setStatus({ type: "error", message: "Please provide your full name." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please provide a valid email address." });
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus({ type: "error", message: "Message should be at least 10 characters." });
      return;
    }

    setStatus({ type: "success", message: "Your message has been received. We will contact you soon." });
    setFormData(initialData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(event) => setFormData((previous) => ({ ...previous, name: event.target.value }))}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) => setFormData((previous) => ({ ...previous, email: event.target.value }))}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(event) => setFormData((previous) => ({ ...previous, message: event.target.value }))}
          rows={5}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
          required
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition"
      >
        Send Message
      </button>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-lg px-4 py-3 text-sm ${
            status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
