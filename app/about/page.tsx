import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | Ojeifo Sunday Clifford",
  description:
    "Learn more about Ojeifo Sunday Clifford, CEO of Cliff-Tech Solutions Ltd.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Header */}
      <section className="border-b border-gray-100 pt-32">
        <div className="container-custom py-20">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            About
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Building technology with purpose, creativity and vision.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            Cliff-Tech Solutions Ltd a technology company passionate about software development,
            digital products and helping businesses use technology to grow.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">

          <div className="grid gap-16 lg:grid-cols-2">

            {/* Profile Image */}
            <div className="relative h-[500px] overflow-hidden rounded-[2rem] bg-gray-100">

              <Image
                src="/images/profile/clifford.jpg"
                alt="Ojeifo Sunday Clifford, CEO of Cliff-Tech Solutions Ltd"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Profile Information */}
              <div className="absolute bottom-8 left-8 text-white">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                  Founder & CEO
                </p>

                <p className="mt-2 text-2xl font-bold">
                  Ojeifo Sunday Clifford
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  Cliff-Tech Solutions Ltd
                </p>

              </div>

            </div>

            {/* Story Content */}
            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
                My Story
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                From ideas to digital products.
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-gray-600">

                <p>
                  My name is Ojeifo Sunday Clifford. I am a software & web developer,
                  technology entrepreneur and the CEO of Cliff-Tech Solutions
                  Ltd.
                </p>

                <p>
                  My work focuses on turning ideas and business requirements
                  into practical digital products. I have worked across web
                  development, mobile applications, e-commerce, software
                  platforms, FinTech, SaaS and UI/UX design.
                </p>

                <p>
                  I enjoy solving technical problems and creating digital
                  experiences that are useful, accessible and designed around
                  real users.
                </p>

                <p>
                  Through Cliff-Tech Solutions, my goal is to help businesses,
                  entrepreneurs and organizations establish and improve their
                  digital presence through technology.
                </p>

              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Let's Work Together
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">

          <div className="grid gap-6 md:grid-cols-2">

            {/* Mission */}
            <div className="rounded-3xl bg-white p-10">

              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                My Mission
              </p>

              <h2 className="mt-5 text-3xl font-bold">
                Creating technology that solves real problems.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                My mission is to create reliable and practical digital
                solutions that help people and businesses work, communicate
                and grow more effectively.
              </p>

            </div>

            {/* Vision */}
            <div className="rounded-3xl bg-black p-10 text-white">

              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                My Vision
              </p>

              <h2 className="mt-5 text-3xl font-bold">
                Building a technology-driven future.
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                I envision Cliff-Tech Solutions becoming a trusted technology
                partner for businesses and organizations seeking innovative
                digital solutions.
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}