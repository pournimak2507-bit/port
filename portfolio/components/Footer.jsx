import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <p className="text-center sm:text-left text-sm sm:text-base">
          © {new Date().getFullYear()} Pournima Kamble. All rights reserved.
        </p>

        <div className="flex space-x-4 sm:space-x-6 justify-center sm:justify-end">
          <a
            href="https://github.com/pournimak2507-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pournima-kamble-157a28348"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:pournimak7401@gmail.com"
            className="hover:text-blue-500 transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
