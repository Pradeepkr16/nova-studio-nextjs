"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-gray-100">

      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600">
            We'd love to hear about your project.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >

          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            required
            className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 text-center font-medium">
              Thank you! Your message has been submitted successfully.
            </p>
          )}

        </form>

      </div>

    </section>
  );
}