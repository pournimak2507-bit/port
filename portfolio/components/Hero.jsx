const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am <span className="text-blue-400">Pournima</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          A passionate Full-Stack Developer creating modern web applications.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-gray-400 hover:bg-gray-700 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
