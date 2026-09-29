"use client";

import { FormEvent, useState } from "react";

export default function TrainingPage() {
  const [sending, setSending] = useState(false);
  const [paymentFile, setPaymentFile] = useState<File | null>(null);

  const whatsappNumber = "2348038056237";

  // =========================
  // COMPANY PAYMENT DETAILS
  // =========================

  const paymentDetails = {
    accountName: "Cliff-Tech Solutions Ltd",
    bankName: "Moniepoint Microfinance",
    accountNumber: "8152554674",
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!paymentFile) {
      alert("Please upload your proof of payment before continuing.");
      return;
    }

    setSending(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const name = String(formData.get("name") || "");
      const phone = String(formData.get("phone") || "");
      const email = String(formData.get("email") || "");
      const training = String(formData.get("training") || "");
      const duration = String(formData.get("duration") || "");
      const level = String(formData.get("level") || "");
      const mode = String(formData.get("mode") || "");
      const location = String(formData.get("location") || "");
      const message = String(formData.get("message") || "");

      // =========================
      // UPLOAD PAYMENT PROOF
      // =========================

      const uploadData = new FormData();
      uploadData.append("file", paymentFile);

      const uploadResponse = await fetch("/api/upload-payment", {
        method: "POST",
        body: uploadData,
      });

      const uploadResult = await uploadResponse.json();

      if (!uploadResponse.ok || !uploadResult.success) {
        throw new Error(
          uploadResult.error ||
            "Unable to upload your payment proof. Please try again."
        );
      }

      const paymentProofUrl = uploadResult.url;

      // =========================
      // WHATSAPP MESSAGE
      // =========================

      const whatsappMessage = `Hello Cliff-Tech Solutions,

I would like to register for a training program.

🎓 TRAINING REGISTRATION

Full Name: ${name}
Phone Number: ${phone}
Email: ${email}

Training Program: ${training}
Training Duration & Price: ${duration}
Skill Level: ${level}
Mode of Training: ${mode}
Location: ${location}

  PAYMENT DETAILS

Account Name: ${paymentDetails.accountName}
Bank Name: ${paymentDetails.bankName}
Account Number: ${paymentDetails.accountNumber}

  PROOF OF PAYMENT:
${paymentProofUrl}

Additional Information:
${message || "None"}

I found this training through the Cliff-Tech Solutions website.

Thank you.`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      // Reset form
      form.reset();
      setPaymentFile(null);
    } catch (error) {
      console.error("Registration error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
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
                Learn how to build modern websites and web applications using
                practical development technologies.
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
                Make your training payment to the Cliff-Tech Solutions company
                account, complete the registration form, upload your proof of
                payment, and continue to WhatsApp.
              </p>

              {/* =========================
                  MAKE PAYMENT
              ========================== */}
              <div className="mt-8 rounded-3xl bg-black p-7 text-white shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl">
                    
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                      Make Payment
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      Pay to Cliff-Tech Solutions Ltd
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-gray-300">
                  Please make payment for your selected training duration using
                  the company bank account below. After payment, upload your
                  payment receipt in the registration form.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      Account Name
                    </p>

                    <p className="mt-1 text-base font-bold text-white">
                      {paymentDetails.accountName}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      Bank Name
                    </p>

                    <p className="mt-1 text-base font-bold text-white">
                      {paymentDetails.bankName}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      Account Number
                    </p>

                    <p className="mt-1 text-2xl font-bold tracking-wider text-white">
                      {paymentDetails.accountNumber}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm leading-6 text-gray-300">
                    ⚠️ After making payment, keep your payment receipt or
                    screenshot. You will need to upload it below as proof of
                    payment.
                  </p>
                </div>
              </div>

              {/* Training Mode */}
              <div className="mt-6 rounded-3xl bg-gray-50 p-7">
                <p className="font-bold">Mode of Training</p>

                <div className="mt-4 rounded-xl bg-white px-4 py-4">
                  <p className="text-sm font-semibold text-gray-900">
                    💻 Online Class
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Training sessions are conducted online, allowing you to
                    learn remotely from anywhere.
                  </p>
                </div>
              </div>

              {/* Training Fees */}
              <div className="mt-6 rounded-3xl bg-gray-50 p-7">
                <p className="font-bold">Training Duration & Fees</p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm">
                    <span className="text-gray-600">One Month</span>
                    <span className="font-bold text-black">₦80,000</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm">
                    <span className="text-gray-600">Three Months</span>
                    <span className="font-bold text-black">₦240,000</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm">
                    <span className="text-gray-600">Six Months</span>
                    <span className="font-bold text-black">₦480,000</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm">
                    <span className="text-gray-600">One Year</span>
                    <span className="font-bold text-black">₦830,000</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm">
                    <span className="text-gray-600">2 Years</span>
                    <span className="font-bold text-black">₦1760,000</span>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="mt-6 rounded-3xl bg-gray-50 p-7">
                <p className="font-bold">What happens next?</p>

                <ol className="mt-5 space-y-4 text-sm leading-6 text-gray-600">
                  <li>
                    <strong>1.</strong> Select your training program and
                    duration.
                  </li>

                  <li>
                    <strong>2.</strong> Make payment to the Cliff-Tech
                    Solutions company account.
                  </li>

                  <li>
                    <strong>3.</strong> Keep your payment receipt.
                  </li>

                  <li>
                    <strong>4.</strong> Complete the registration form.
                  </li>

                  <li>
                    <strong>5.</strong> Upload your proof of payment.
                  </li>

                  <li>
                    <strong>6.</strong> Click "Register via WhatsApp".
                  </li>

                  <li>
                    <strong>7.</strong> Review the registration information
                    and payment proof link in WhatsApp, then tap Send.
                  </li>
                </ol>
              </div>
            </div>

            {/* =========================
                REGISTRATION FORM
            ========================== */}
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-gray-50 p-8 shadow-sm"
            >
              {/* Name + Phone */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold">
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
                  <label htmlFor="phone" className="text-sm font-semibold">
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
                <label htmlFor="email" className="text-sm font-semibold">
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
                <label htmlFor="training" className="text-sm font-semibold">
                  Training Program
                </label>

                <select
                  id="training"
                  name="training"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-black"
                >
                  <option value="">Select training program</option>

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

              {/* Duration */}
              <div className="mt-6">
                <label htmlFor="duration" className="text-sm font-semibold">
                  Training Duration & Price
                </label>

                <select
                  id="duration"
                  name="duration"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-black"
                >
                  <option value="">Select duration and price</option>

                  <option value="One Month - ₦50,000">
                    One Month — ₦80,000
                  </option>

                  <option value="Three Months - ₦120,000">
                    Three Months — ₦240,000
                  </option>

                  <option value="Six Months - ₦200,000">
                    Six Months — ₦480,000
                  </option>

                  <option value="One Year - ₦350,000">
                    One Year — ₦830,000
                  </option>

                  <option value="2 Years - ₦600,000">
                    2 Years — ₦1760,000
                  </option>
                </select>
              </div>

              {/* Mode of Training */}
              <div className="mt-6">
                <label htmlFor="mode" className="text-sm font-semibold">
                  Mode of Training
                </label>

                <select
                  id="mode"
                  name="mode"
                  required
                  defaultValue="Online Class"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-black"
                >
                  <option value="Online Class">Online Class</option>
                </select>

                <p className="mt-2 text-xs leading-5 text-gray-400">
                  All training sessions are currently conducted online.
                </p>
              </div>

              {/* Skill Level */}
              <div className="mt-6">
                <label htmlFor="level" className="text-sm font-semibold">
                  Current Skill Level
                </label>

                <select
                  id="level"
                  name="level"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-black"
                >
                  <option value="">Select your level</option>

                  <option value="Complete Beginner">
                    Complete Beginner
                  </option>

                  <option value="Beginner">Beginner</option>

                  <option value="Intermediate">Intermediate</option>

                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* Location */}
              <div className="mt-6">
                <label htmlFor="location" className="text-sm font-semibold">
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

              {/* Payment Proof */}
              <div className="mt-6">
                <label
                  htmlFor="paymentProof"
                  className="text-sm font-semibold text-gray-900"
                >
                  Proof of Payment *
                </label>

                <input
                  id="paymentProof"
                  name="paymentProof"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,application/pdf"
                  required
                  onChange={(event) => {
                    const file = event.target.files?.[0] || null;

                    if (!file) {
                      setPaymentFile(null);
                      return;
                    }

                    if (file.size > 10 * 1024 * 1024) {
                      alert(
                        "The payment proof must not be larger than 10MB."
                      );

                      event.target.value = "";
                      setPaymentFile(null);
                      return;
                    }

                    setPaymentFile(file);
                  }}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
                />

                <p className="mt-2 text-xs leading-5 text-gray-400">
                  Upload your payment receipt or screenshot. Accepted formats:
                  JPG, PNG, WEBP and PDF. Maximum size: 10MB.
                </p>

                {paymentFile && (
                  <div className="mt-3 rounded-xl bg-white px-4 py-3">
                    <p className="text-sm font-medium text-gray-700">
                      ✓ Payment proof selected
                    </p>

                    <p className="mt-1 break-all text-xs text-gray-500">
                      {paymentFile.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {(paymentFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                )}
              </div>

              {/* Additional Message */}
              <div className="mt-6">
                <label htmlFor="message" className="text-sm font-semibold">
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
                  ? "Uploading Payment Proof..."
                  : "Register via WhatsApp"}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                Your payment proof will be uploaded and its secure link will
                be included in your WhatsApp registration message.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}