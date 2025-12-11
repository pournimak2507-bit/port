/* eslint-disable @next/next/no-img-element */
const projectsData = [
  {
    title: "Weather App",
    description:
      "A modern full-stack Weather Application built with React, Node.js, Express, MongoDB & Tailwind CSS with authentication and clean premium UI (glassmorphism + gradients + animations).",
    image: "/weather-app.jpg",
    link: "https://yourweatherapp.com",
  },
  {
    title: "Expense Tracker App",
    description:
      "MERN-based full-stack finance tracker that manages income, expenses, budgets, and saving goals with visual analytics and a smart dashboard.",
    image: "/expense-tracker.jpg",
    link: "https://yourexpensetracker.com",
  },
  {
    title: "Blog Space",
    description:
      "Full-stack blogging platform built with React, Node.js, Express & MySQL. Features create, edit, delete blogs, favourites, category-based blogs and search functionality.",
    image: "/blog-space.jpg",
    link: "https://yourblogspace.com",
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
