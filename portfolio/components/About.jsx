"use client";
import { useTheme } from "@/components/ThemeProvider";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const About = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      } min-h-screen px-4 sm:px-6`}
    >
      {/* Skills Section */}
      <Skills />

      {/* About Card */}
      <section className="w-full py-16 flex justify-center">
        <div
          className={`max-w-3xl w-full p-6 sm:p-8 rounded-2xl shadow-md transition-all
            ${
              theme === "dark"
                ? "bg-gray-800 text-gray-100"
                : "bg-white text-gray-900"
            }
            hover:shadow-xl hover:scale-[1.02] duration-300
          `}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 dark:text-gray-300">
            I am a dedicated and creative Full-Stack Developer with a strong
            passion for building user-friendly and efficient web applications. I
            love transforming ideas into real projects using modern
            technologies.
          </p>
          <p className="text-base sm:text-lg leading-relaxed dark:text-gray-300">
            I enjoy learning new things every day and constantly improving my
            skills. My goal is to create clean, responsive, and professional
            digital experiences.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
