import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-300 cursor-pointer">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700 dark:text-gray-300">
          {["/", "/about", "/projects", "/contact"].map((path, idx) => (
            <li key={idx}>
              <Link
                href={path}
                className="hover:text-blue-600 dark:hover:text-blue-300 duration-200"
              >
                {["Home", "About", "Projects", "Contact"][idx]}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 w-full overflow-hidden transition-max-height duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-4 gap-4">
          {["/", "/about", "/projects", "/contact"].map((path, idx) => (
            <li key={idx}>
              <Link
                href={path}
                className="hover:text-blue-600 dark:hover:text-blue-300 duration-200 block"
                onClick={() => setOpen(false)} // click -> close menu
              >
                {["Home", "About", "Projects", "Contact"][idx]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
