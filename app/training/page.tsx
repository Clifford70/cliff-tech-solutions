"use client";

import { FormEvent, useState } from "react";

export default function TrainingPage() {
  const [sending, setSending] = useState(false);

  const whatsappNumber = "2348038056237";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const training = String(formData.get("training") || "");
    const level = String(formData.get("level") || "");
    const location = String(formData.get("location") || "");
    const message = String(formData.get("message") || "");

    const whatsappMessage = `Hello Cliff-Tech Solutions,

I would like to register for a training program.

🎓 TRAINING REGISTRATION

Full Name: ${name}
Phone Number: ${phone}
Email: ${email}

Training Program: ${training}
Skill Level: ${level}
Location: ${location}

Additional Information:
${message}

I found this training through the Cliff-Tech Solutions website.

Thank you.`;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
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
          PAGE HEADER
      ========================== */}
      <section className="border-b border-gray-100 pt-32">
        <div className="container-custom py-20">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            Training & Courses
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Learn technology. Build skills. Create opportunities.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            Join Cliff-Tech Solutions training programs and develop practical
            technology and digital skills that you can use to build projects,
            start a career or grow your business.
          </p>

        </div>
      </section>

      {/* =========================
          TRAINING PROGRAMS
      ========================== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
              Available Programs
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Choose your training program.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Full-Stack */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Web Development
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Full-Stack Web Development
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Learn how to build modern websites and web applications
                using practical development technologies.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>✓ HTML & CSS</li>
                <li>✓ JavaScript</li>
                <li>✓ React & Next.js</li>
                <li>✓ Backend Development</li>
                <li>✓ Databases & APIs</li>
              </ul>
            </div>

            {/* WordPress */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                No-Code Development
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                WordPress Website Development
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Learn how to create professional websites and online
                businesses using WordPress without advanced coding.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>✓ WordPress Setup</li>
                <li>✓ Website Design</li>
                <li>✓ Themes & Plugins</li>
                <li>✓ Business Websites</li>
                <li>✓ E-Commerce</li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Digital Skills
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Digital Marketing
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Develop practical digital marketing and content creation
                skills for businesses, brands and online careers.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>✓ Content Creation</li>
                <li>✓ Social Media Marketing</li>
                <li>✓ Facebook & Instagram Ads</li>
                <li>✓ Branding</li>
                <li>✓ Digital Strategy</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          REGISTRATION
      ========================== */}
      <section className="section-padding">
        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Information */}
            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
                Registration
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Register for training.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Complete the registration form and continue to WhatsApp.
                Your information will be prepared in a message for our
                training team.
              </p>

              <div className="mt-8 rounded-3xl bg-gray-50 p-7">

                <p className="font-bold">
                  What happens next?
                </p>

                <ol className="mt-5 space-y-4 text-sm leading-6 text-gray-600">
                  <li>
                    <strong>1.</strong> Complete the registration form.
                  </li>

                  <li>
                    <strong>2.</strong> Click "Register via WhatsApp".
                  </li>

                  <li>
                    <strong>3.</strong> WhatsApp will open with your
                    registration details.
                  </li>

                  <li>
                    <strong>4.</strong> Review the information and tap
                    Send.
                  </li>
                </ol>

              </div>

            </div>

            {/* Registration Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-gray-50 p-8 shadow-sm"
            >

              {/* Name + Phone */}
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="08012345678"
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

              </div>

              {/* Email */}
              <div className="mt-6">

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
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-black"
                />

              </div>

              {/* Training */}
              <div className="mt-6">

                <label
                  htmlFor="training"
                  className="text-sm font-semibold"
                >
                  Training Program
                </label>

                <select
                  id="training"
                  name="training"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-black"
                >
                  <option value="">
                    Select training program
                  </option>

                  <option value="Full-Stack Web Development">
                    Full-Stack Web Development
                  </option>

                  <option value="WordPress Website Development">
                    WordPress Website Development
                  </option>

                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>

                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>

                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>
                </select>

              </div>

              {/* Skill Level */}
              <div className="mt-6">

                <label
                  htmlFor="level"
                  className="text-sm font-semibold"
                >
                  Current Skill Level
                </label>

                <select
                  id="level"
                  name="level"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-black"
                >
                  <option value="">
                    Select your level
                  </option>

                  <option value="Complete Beginner">
                    Complete Beginner
                  </option>

                  <option value="Beginner">
                    Beginner
                  </option>

                  <option value="Intermediate">
                    Intermediate
                  </option>

                  <option value="Advanced">
                    Advanced
                  </option>
                </select>

              </div>

              {/* Location */}
              <div className="mt-6">

                <label
                  htmlFor="location"
                  className="text-sm font-semibold"
                >
                  Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City / State"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-black"
                />

              </div>

              {/* Additional Message */}
              <div className="mt-6">

                <label
                  htmlFor="message"
                  className="text-sm font-semibold"
                >
                  Additional Information
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us anything else we should know..."
                  className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-black"
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="mt-6 w-full rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending
                  ? "Opening WhatsApp..."
                  : "Register via WhatsApp"}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                Your registration details will be prepared in WhatsApp.
                Please review the message and tap Send.
              </p>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}