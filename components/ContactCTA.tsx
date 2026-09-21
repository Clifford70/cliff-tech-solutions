
import Image from "next/image";
import Link from "next/link";

export default function ContactCTA() {
  const address =
    "Plot 65, Behind Chinese Estate, Gbuduwyi, Kabusa, Abuja, FCT, Nigeria";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section className="section-padding relative overflow-hidden text-white">

      {/* =========================
          BACKGROUND IMAGE
      ========================== */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/profile/contact-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =========================
          DARK TRANSPARENT OVERLAY
      ========================== */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      {/* =========================
          GRADIENT OVERLAY
      ========================== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />

      <div className="container-custom relative z-10">

        <div className="rounded-[2rem] border border-white/10 bg-black/30 px-8 py-16 text-center shadow-2xl backdrop-blur-sm sm:px-16">

          {/* Heading */}
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/60">
            Have a project in mind?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something meaningful together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
            Whether you need a website, mobile application, software platform
            or a custom digital solution, let&apos;s discuss your idea.
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Start a Conversation
          </Link>

          {/* Contact Information */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">

            {/* Address */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition hover:bg-white/15">
              <div className="text-2xl">📍</div>

              <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-white/60">
                Office Address
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/75">
                {address}
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-white underline underline-offset-4 transition hover:text-white/70"
              >
                Get Directions →
              </a>
            </div>

            {/* WhatsApp */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition hover:bg-white/15">
              <div className="text-2xl">💬</div>

              <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-white/60">
                WhatsApp
              </h3>

              <a
                href="https://wa.me/2348038056237?text=Hello%20Cliff-Tech%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm text-white/75 transition hover:text-white"
              >
                +234 803 805 6237
              </a>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition hover:bg-white/15">
              <div className="text-2xl">✉️</div>

              <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-white/60">
                Email
              </h3>

              <a
                href="mailto:info@cliftechsolution.com"
                className="mt-3 block break-all text-sm text-white/75 transition hover:text-white"
              >
                info@cliftechsolution.com
              </a>
            </div>

          </div>

          {/* Business Hours */}
          <div className="mt-8 text-sm text-white/50">
            <span className="font-semibold text-white/60">
              Business Hours:
            </span>{" "}
            Monday – Saturday · By Appointment
          </div>

        </div>
      </div>
    </section>
  );
}
