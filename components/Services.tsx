const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites for businesses, organizations and personal brands.",
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications designed to deliver reliable digital experiences.",
  },
  {
    number: "03",
    title: "FinTech & SaaS",
    description:
      "Digital platforms for financial services, business operations, payments and online products.",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Clean and intuitive user interfaces designed around usability, accessibility and conversion.",
  },
  {
    number: "05",
    title: "E-Commerce",
    description:
      "Online stores and commerce platforms that help businesses showcase products and serve customers.",
  },
  {
    number: "06",
    title: "Digital Solutions",
    description:
      "Technology consulting, system analysis, digital transformation and custom software solutions.",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            What I Do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Digital solutions built with purpose.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            From business websites to complex software platforms, I help turn
            ideas into functional digital products.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-white p-8 transition hover:bg-gray-50"
            >
              <span className="text-sm font-bold text-gray-400">
                {service.number}
              </span>

              <h3 className="mt-10 text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}