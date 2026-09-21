const stats = [
  {
    number: "20+",
    label: "Digital Projects",
  },
  {
    number: "5+",
    label: "Years Learning & Building",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "1",
    label: "Technology Company",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="container-custom">

        <div className="grid grid-cols-2 md:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-6 py-12 text-center ${
                index !== 0
                  ? "border-l border-gray-200"
                  : ""
              }`}
            >

              <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                {stat.number}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}