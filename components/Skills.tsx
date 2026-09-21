const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "PHP",
  "Laravel",
  "CodeIgniter",
  "Flutter",
  "Dart",
  "MySQL",
  "Firebase",
  "WordPress",
  "REST APIs",
  "UI/UX Design",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
              Technologies
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Tools I use to bring ideas to life.
            </h2>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-black hover:text-black"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}