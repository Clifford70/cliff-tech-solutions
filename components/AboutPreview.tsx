import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
              About Me
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
              Technology, creativity and business in one place.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-600">
              I am Ojeifo Sunday Clifford, a technology professional and
              entrepreneur passionate about creating digital solutions that
              solve real-world problems.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Through Cliff-Tech Solutions Ltd, I work on websites, software
              applications, mobile applications, e-commerce platforms,
              FinTech solutions, SaaS products and digital experiences.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              More About Me
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}