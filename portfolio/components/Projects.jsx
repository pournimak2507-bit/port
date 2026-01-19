/* eslint-disable @next/next/no-img-element */

const projectsData = [
  {
    title: "Weather App",
    description:
      "A full-stack Weather Application built with React, Node.js, Express, and MongoDB.",
    image: "/weather-app.jpg",
    link: "https://github.com/pournimak2507-bit/weather",
  },
  {
    title: "Expense Tracker App",
    description:
      "A MERN-stack Finance Tracker with dashboards, charts, and budgeting tools.",
    image: "/expense-tracker.jpg",
    link: "https://github.com/pournimak2507-bit/expense-tracker-final",
  },
  {
    title: "Blog Space",
    description:
      "A full-stack blogging platform built with React, Node.js, Express, and MySQL.",
    image: "/blog-space.jpg",
    link: "https://github.com/pournimak2507-bit/blog-project",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Projects
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <button
                  onClick={() => (window.location.href = project.link)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
