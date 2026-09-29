import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Professional websites designed to establish your brand online, communicate your services and convert visitors into customers.",
    features: [
      "Business Websites",
      "Corporate Websites",
      "Personal Websites",
      "Landing Pages",
      "Custom Web Applications",
    ],
  },
  {
    number: "02",
    title: "E-Commerce Development",
    description:
      "Online stores and commerce platforms that make it easier for businesses to display products, manage orders and serve customers.",
    features: [
      "Online Stores",
      "Product Management",
      "Shopping Carts",
      "Payment Integration",
      "Order Management",
    ],
  },
  {
    number: "03",
    title: "Mobile App Development",
    description:
      "Modern mobile applications built to give businesses and their customers convenient access to digital services.",
    features: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Apps",
      "Firebase Integration",
      "API Integration",
    ],
  },
  {
    number: "04",
    title: "FinTech & SaaS",
    description:
      "Custom software platforms for financial services, business operations, subscriptions, wallets and digital products.",
    features: [
      "FinTech Platforms",
      "Wallet Systems",
      "Payment Systems",
      "SaaS Platforms",
      "Business Dashboards",
    ],
  },
  {
    number: "05",
    title: "UI/UX Design",
    description:
      "User-focused interfaces that combine clear navigation, visual consistency and practical user experiences.",
    features: [
      "Website UI",
      "Mobile UI",
      "Dashboard Design",
      "Wireframes",
      "Design Systems",
    ],
  },
  {
    number: "06",
    title: "Digital Solutions",
    description:
      "Technology consulting and custom software solutions designed around specific business requirements.",
    features: [
      "System Analysis",
      "API Integration",
      "Digital Transformation",
      "Software Consulting",
      "Technical Support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>

      <section className="relative overflow-hidden pt-32 text-white">
  <Image
    src="/images/services-bg.jpg"
    alt=""
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />

  <div className="absolute inset-0 bg-black/65" />

  <div className="container-custom relative z-10 py-20">
    <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-300">
      Services
    </p>

    <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
      Technology solutions for ambitious ideas.
    </h1>

    <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
      I provide digital development and technology services through
      Cliff-Tech Solutions Ltd.
    </p>
  </div>
</section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">

          <div className="grid gap-5 md:grid-cols-2">

            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-3xl bg-white p-9"
              >

                <span className="text-sm font-bold text-gray-400">
                  {service.number}
                </span>

                <h2 className="mt-8 text-3xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-black" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </article>
            ))}

          </div>

        </div>
      </section>

      <section
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-28 text-white"
  style={{
    backgroundImage: "url('/images/project-cta-bg.jpg')",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/65" />

  <div className="container-custom relative z-10 text-center">
    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
      Have a digital project?
    </h2>

    <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-200">
      Tell me what you want to build and let's discuss the right
      technology solution for your project.
    </p>

    <Link
      href="/contact"
      className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
    >
      Discuss Your Project
    </Link>
  </div>
</section>

    </main>
  );
}