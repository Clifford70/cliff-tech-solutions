const experiences = [
  {
    period: "Present",
    role: "CEO & Technology Entrepreneur",
    company: "Cliff-Tech Solutions Ltd",
    description:
      "Leading a technology company focused on web development, mobile applications, software platforms, FinTech, e-commerce, UI/UX and digital solutions.",
  },
  {
    period: "2024 – Present",
    role: "Full-Stack Software Developer",
    company: "Independent / Client Projects",
    description:
      "Designing and developing websites, web applications, business platforms and custom software solutions for different project requirements.",
  },
  {
    period: "2024 – Present",
    role: "Mobile Application Developer",
    company: "Independent Projects",
    description:
      "Developing mobile applications using modern cross-platform technologies and backend services.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-white">

      <section className="border-b border-gray-100 pt-32">
        <div className="container-custom py-20">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            Experience
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Experience built through technology and entrepreneurship.
          </h1>

        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">

          <div className="mx-auto max-w-4xl">

            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative border-l border-gray-200 pb-14 pl-8 last:pb-0"
              >

                <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-black" />

                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  {experience.period}
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  {experience.role}
                </h2>

                <p className="mt-1 font-medium text-gray-500">
                  {experience.company}
                </p>

                <p className="mt-5 max-w-2xl leading-7 text-gray-600">
                  {experience.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}