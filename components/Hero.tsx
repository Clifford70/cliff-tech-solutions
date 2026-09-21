
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 text-white">

      {/* =========================
          BACKGROUND IMAGE
      ========================== */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/profile/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =========================
          DARK TRANSPARENT OVERLAY
      ========================== */}
      <div className="absolute inset-0 -z-10 bg-black/55" />

      {/* =========================
          SOFT GRADIENT
      ========================== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/45 to-black/30" />

      <div className="container-custom relative z-10">

        <div className="grid min-h-[720px] items-center gap-16 py-20 lg:grid-cols-2">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div>

            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Available for selected projects
              </span>
            </div>

            {/* Name */}
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-white/70">
              Ojeifo Sunday Clifford
            </p>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Building digital experiences that move businesses forward.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
              CEO of Cliff-Tech Solutions Ltd, Full-Stack Software Engineer,
              Mobile App Developer, UI/UX Designer and Technology Entrepreneur.
              I design and build modern digital products for businesses,
              organizations and entrepreneurs.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/projects"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              >
                Explore My Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue/20"
              >
                Work With Me
              </Link>

            </div>

            {/* Areas of Expertise */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/60">
              <span>Web Development</span>
              <span>Mobile Apps</span>
              <span>FinTech</span>
              <span>SaaS</span>
              <span>UI/UX</span>
              <span>Training/Mentorship</span>
            </div>

          </div>

          {/* =========================
              RIGHT / PROFILE IMAGE
          ========================== */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="relative h-[560px] w-full max-w-[450px] overflow-visible">

              {/* Profile Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm">

                {/* Professional Photo */}
                <Image
                  src="/images/profile/clifford.jpg"
                  alt="Ojeifo Sunday Clifford, CEO of Cliff-Tech Solutions Ltd"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-center"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* CEO Information Card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-xl">

                  <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                    Founder & CEO
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    Cliff-Tech Solutions Ltd
                  </p>

                  <p className="mt-1 text-sm text-white/60">
                    Software • Technology • Digital Solutions
                  </p>

                </div>

              </div>

              {/* =========================
                  FLOATING EXPERIENCE CARD
              ========================== */}
              <div className="absolute -bottom-9 -left-3 hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-xl backdrop-blur-xl sm:block lg:-left-10">

                <p className="text-2xl font-bold text-white">
                  20+
                </p>

                <p className="text-xs font-medium text-white/60">
                  Digital Projects
                </p>

              </div>

              {/* =========================
                  FLOATING TECHNOLOGY CARD
              ========================== */}
              <div className="absolute -right-3 top-12 hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-xl sm:block lg:-right-3">

                <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Specialization
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  Full-Stack Development
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}