/* eslint-disable @next/next/no-img-element */

const miniProjects = [
  {
    title: "Weather App",
    image: "/weather-app.jpg",
    link: "/projects",
  },
  {
    title: "Expense Tracker App",
    image: "/expense-tracker.jpg",
    link: "/projects",
  },
  {
    title: "Blog Space",
    image: "/blog-space.jpg",
    link: "/projects",
  },
];

export default function MiniProjects() {
  return (
    <section className="w-full py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Mini Projects</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {miniProjects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden 
                         hover:scale-105 transition-transform duration-300 block"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-blue-600 text-sm mt-1">View Details →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
