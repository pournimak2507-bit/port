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
    <section id="skills" className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">My Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>

              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  skill.level === "Expert"
                    ? "bg-green-100 text-green-700"
                    : skill.level === "Advanced"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
