import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="border-b border-gray-100 pt-32">
        <div className="container-custom py-20">

          <Link
            href="/projects"
            className="text-sm font-semibold text-gray-500 transition hover:text-black"
          >
            ← Back to Projects
          </Link>

          <div className="mt-12 max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
              {project.category}
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
              {project.description}
            </p>

          </div>

        </div>
      </section>

      {/* Main Image */}
      <section className="py-12">
        <div className="container-custom">

          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-gray-100">

            <Image
  src={project.image}
  alt={project.title}
  fill
  priority
  sizes="(max-width: 1024px) 100vw, 1200px"
  className="object-cover"
/>

          </div>

        </div>
      </section>

      {/* Project Information */}
      <section className="section-padding">
        <div className="container-custom">

          <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
                About the project
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Project overview
              </h2>

              <p className="mt-7 text-lg leading-8 text-gray-600">
                {project.longDescription}
              </p>

            </div>

            <aside className="rounded-3xl bg-gray-50 p-8">

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Year
                </p>

                <p className="mt-2 font-semibold">
                  {project.year}
                </p>
              </div>

              <div className="mt-7">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  My Role
                </p>

                <p className="mt-2 font-semibold">
                  {project.role}
                </p>
              </div>

              {project.client && (
                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Client
                  </p>

                  <p className="mt-2 font-semibold">
                    {project.client}
                  </p>
                </div>
              )}

              <div className="mt-7">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Status
                </p>

                <p className="mt-2 font-semibold">
                  {project.status}
                </p>
              </div>

            </aside>

          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Tools used
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium"
              >
                {technology}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            Screenshots
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {project.gallery.map((image, index) => (
              <div
                key={image}
                className="relative aspect-video overflow-hidden rounded-3xl bg-gray-100"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Visit */}
      {project.link && (
        <section className="pb-24">
          <div className="container-custom text-center">

            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-gray-800"
            >
              Visit Live Project →
            </Link>

          </div>
        </section>
      )}

    </main>
  );
}