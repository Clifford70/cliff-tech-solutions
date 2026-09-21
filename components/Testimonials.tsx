const testimonials = [
  {
    name: "Emmanuel Okafor",
    role: "CEO, NextGen Enterprises",
    quote:
      "Cliff-Tech Solutions delivered our website exactly as we envisioned. The team was professional, responsive and easy to work with. Our business has seen real growth since the launch.",
  },
  {
    name: "Akande Idris",
    role: "CEO, Uplifted Timeless Concept",
    quote:
      "Cliff-Tech Solutions delivered our ecommerce website exactly as we wanted it. The team was professional, responsive and easy to work with. Our business has seen real growth since the launch.",
  },
  {
    name: "Peace Richard",
    role: "CEO, Richies Rider & Supper Store",
    quote:
      "Working with Cliff-Tech Solutions was a great experience. They understood our needs, delivered on time and provided excellent support even after the project was completed.",
  },
  {
    name: "Paul Fedinard",
    role: "CEO, Ferdexi",
    quote:
      "Working with Cliff-Tech Solutions was a great experience. They understood our needs, delivered on time and provided excellent support even after the project was completed.",
  },
  {
    name: "Ada Johnson",
    role: "Marketing Director, BrightHub",
    quote:
      "Working with Cliff-Tech Solutions was a great experience. They understood our needs, delivered on time and provided excellent support even after the project was completed.",
  },
  {
    name: "Tunde Bello",
    role: "Founder, FarmConnect",
    quote:
      "The mobile app developed by Cliff-Tech Solutions has transformed how we serve our customers. The quality of work, attention to detail and professionalism are outstanding.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-28"
      style={{
        backgroundImage: "url('/images/testimonials-bg.png')",
      }}
    >
      {/* Dark Background Overlay */}
      <div className="absolute inset-0 bg-/50" />

      {/* Extra Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      <div className="container-custom relative z-10">

        {/* Section Heading */}
        <div className="max-w-2xl text-white">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-300">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            What clients say.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-300">
            Feedback from clients and businesses I have worked with on
            digital products, websites and technology solutions.
          </p>

        </div>

        {/* Testimonial Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (

            <article
              key={testimonial.name + testimonial.role}
              className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15"
            >

              {/* Quote Icon */}
              <div className="text-5xl font-serif leading-none text-white/80">
                “
              </div>

              {/* Quote */}
              <p className="mt-5 text-base leading-7 text-gray-200">
                {testimonial.quote}
              </p>

              {/* Client Information */}
              <div className="mt-8 border-t border-white/20 pt-5">

                <p className="font-bold text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  {testimonial.role}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}