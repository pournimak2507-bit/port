const skillsData = [
  { name: "HTML", level: "Expert" },
  { name: "CSS / Tailwind", level: "Expert" },
  { name: "JavaScript / React", level: "Advanced" },
  { name: "Node.js / Express", level: "Advanced" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.level}</p>
              <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full mt-4 overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-500"
                  style={{
                    width:
                      skill.level === "Expert"
                        ? "100%"
                        : skill.level === "Advanced"
                        ? "75%"
                        : "50%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
