import Link from "next/link";
import { useTheme } from "./ThemeProvider"; // Import theme hook

export default function Navbar() {
  const { theme, toggle } = useTheme(); // Get current theme + toggle

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-300 cursor-pointer">
          Portfolio
        </h1>

        {/* Menu */}
        <ul className="flex gap-6 font-medium text-gray-700 dark:text-gray-300">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-300 duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 dark:hover:text-blue-300 duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-600 dark:hover:text-blue-300 duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-600 dark:hover:text-blue-300 duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
