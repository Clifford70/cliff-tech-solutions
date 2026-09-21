import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="section-padding bg-gray-950 text-white">

      <div className="container-custom">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Projects I've built.
            </h2>

          </div>

          <Link
            href="/projects"
            className="text-sm font-semibold underline underline-offset-8"
          >
            View all projects →
          </Link>

        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">

          {featuredProjects.map((project) => (

            <article
              key={project.id}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >

              <Link href={`/projects/${project.slug}`}>

                <div className="relative aspect-[4/3] overflow-hidden bg-white/10">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

              </Link>

              <div className="p-7">

                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold underline underline-offset-8"
                >
                  View Case Study →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}