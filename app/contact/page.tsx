
"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sending, setSending] = useState(false);

  const whatsappNumber = "2348038056237";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);

    const form = event.currentTarget;

    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const projectType = String(formData.get("projectType") || "");
    const message = String(formData.get("message") || "");

    const whatsappMessage = `Hello Cliff-Tech Solutions,

I would like to discuss a project.

Name: ${name}
Email: ${email}
Project Type: ${projectType}

Project Details:
${message}

Thank you.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setSending(false);
    }, 1000);
  }

  return (
    <main className="bg-white">

      {/* =========================
          PAGE INTRO
      ========================== */}
      <section className="pt-32">
        <div className="container-custom py-20">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            Contact
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s talk about your next project.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            Have an idea, business requirement or digital product you want
            to build? Send me a message and let&apos;s discuss it.
          </p>

        </div>
      </section>

      {/* =========================
          CONTACT SECTION
      ========================== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* =========================
                CONTACT DETAILS
            ========================== */}
            <div>

              <h2 className="text-2xl font-bold">
                Get in touch
              </h2>

              <div className="mt-8 space-y-7">

                {/* Company */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Company
                  </p>

                  <p className="mt-2 font-medium">
                    Cliff-Tech Solutions Ltd
                  </p>
                </div>

                {/* CEO */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    CEO
                  </p>

                  <p className="mt-2 font-medium">
                    Ojeifo Sunday Clifford
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Office Address
                  </p>

                  <p className="mt-2 max-w-sm font-medium leading-7">
                    Plot 65, Behind Chinese Estate, Gbuduwyi, Kabusa,
                    Abuja, FCT, Nigeria
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Plot%2065%2C%20Behind%20Chinese%20Estate%2C%20Gbuduwyi%2C%20Kabusa%2C%20Abuja%2C%20FCT%2C%20Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold underline underline-offset-4 transition hover:text-gray-500"
                  >
                    Get Directions →
                  </a>
                </div>

                {/* WhatsApp */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/2348038056237?text=Hello%20Cliff-Tech%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-medium transition hover:text-gray-500"
                  >
                    +234 803 805 6237
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Email
                  </p>

                  <a
                    href="mailto:info@cliftechsolution.com"
                    className="mt-2 inline-block font-medium transition hover:text-gray-500"
                  >
                    cliftechsolution@gmail.com
                  </a>
                </div>

              </div>

            </div>

            {/* =========================
                CONTACT FORM
            ========================== */}
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >

              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

              </div>

              {/* Project Type */}
              <div className="mt-6">

                <label
                  htmlFor="projectType"
                  className="text-sm font-semibold"
                >
                  Project Type
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
                >
                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Mobile Application">
                    Mobile Application
                  </option>

                  <option value="E-Commerce">
                    E-Commerce
                  </option>

                  <option value="FinTech / SaaS">
                    FinTech / SaaS
                  </option>

                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>

                  <option value="Custom Software">
                    Custom Software
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

              </div>

              {/* Project Message */}
              <div className="mt-6">

                <label
                  htmlFor="message"
                  className="text-sm font-semibold"
                >
                  Tell me about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Describe your project..."
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="mt-6 w-full rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Opening WhatsApp..." : "Send Message on WhatsApp"}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                Your message will open directly in WhatsApp with the
                information you provided.
              </p>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}

