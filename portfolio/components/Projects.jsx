/* eslint-disable @next/next/no-img-element */
const projectsData = [
  {
    title: "Weather App",
    description:
      "A full-stack Weather Application built with React, Node.js, Express, and MongoDB, featuring secure user authentication, responsive UI with modern design patterns (glassmorphism, gradients, and animations). Provides real-time weather updates, location-based forecasts, and smooth interactive experience optimized for performance and accessibility.",
    image: "/weather-app.jpg",
    link: "https://yourweatherapp.com",
  },
  {
    title: "Expense Tracker App",
    description:
      "A MERN-stack Finance Tracker that enables users to manage income, expenses, budgets, and savings goals efficiently. Features include dynamic dashboards with visual analytics, interactive charts, automated calculations, and a responsive UI that enhances financial planning and decision-making.",
    image: "/expense-tracker.jpg",
    link: "https://yourexpensetracker.com",
  },
  {
    title: "Blog Space",
    description:
      "A full-stack Blogging Platform developed with React, Node.js, Express, and MySQL, allowing users to create, edit, delete, and favourite blogs. Includes category-based organization, advanced search functionality, and a seamless user experience that supports content management and community engagement.",
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
