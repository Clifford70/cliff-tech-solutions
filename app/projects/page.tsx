import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore websites, applications, software platforms and digital products developed by Ojeifo Sunday Clifford and Cliff-Tech Solutions.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white">

      <section className="border-b border-gray-100 pt-32">
        <div className="container-custom py-20">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            Portfolio
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Selected projects and digital products.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            A selection of websites, mobile applications, software platforms
            and digital solutions developed through my work.
          </p>

        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">

          <div className="grid gap-8 md:grid-cols-2">

            {projects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white"
              >

                <Link href={`/projects/${project.slug}`}>

                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">

                    <Image
  src={project.image}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover transition duration-500 group-hover:scale-105"
/>

                  </div>

                </Link>

                <div className="p-8">

                  <div className="flex items-center justify-between gap-4">

                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      {project.category}
                    </p>

                    <span className="text-xs text-gray-400">
                      {project.year}
                    </span>

                  </div>

                  <h2 className="mt-4 text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.slice(0, 5).map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-7 inline-flex text-sm font-bold underline underline-offset-8"
                  >
                    View Case Study →
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}