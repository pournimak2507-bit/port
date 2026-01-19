"use client";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6">
      <Skills />

      <section className="w-full py-16 flex justify-center">
        <div className="max-w-3xl w-full p-8 rounded-2xl shadow-md bg-white text-gray-900 hover:shadow-xl transition">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-lg leading-relaxed mb-4">
            I am a dedicated and creative Full-Stack Developer with a strong
            passion for building user-friendly and efficient web applications.
          </p>

          <p className="text-lg leading-relaxed">
            I enjoy learning new things every day and constantly improving my
            skills. My goal is to create clean and professional digital
            experiences.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
