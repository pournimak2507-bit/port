"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 pt-4 px-4">
      {/* CARD — Dark/Light Only Card */}
      <div
        className={`max-w-3xl mx-auto rounded-xl shadow-lg p-4 transition-all
          ${
            theme === "dark"
              ? "bg-gray-800 text-gray-100"
              : "bg-white text-gray-900"
          }
        `}
      >
        {/* Profile Image — Centered */}
        <div className="flex justify-center mb-4">
          <Image
            src="/profile.jpg"
            width={350}
            height={350}
            alt="Pournima Kamble"
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Toggle Switch — Left Aligned */}
        <div className="flex justify-start mb-4">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={theme === "dark"}
                onChange={toggle}
              />
              <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner dark:bg-gray-600"></div>
              <div
                className={`dot absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transition-transform
                  ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
                `}
              ></div>
            </div>
            <span className="ml-3 text-gray-800 dark:text-gray-200 font-medium">
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
          </label>
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold mt-2 text-center">Pournima Kamble</h1>

        {/* About Me */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">About Me</h2>
          <p className="mt-1 leading-relaxed">
            Hi, I am Pournima Kamble, a passionate Full Stack Developer with
            expertise in React, JavaScript, Node.js, MongoDB, and modern UI
            technologies.
          </p>
        </div>

        {/* Interests */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Interests</h2>
          <p className="mt-1">
            Coding, UI Design, Exploring new technologies, Traveling.
          </p>

          {/* Social Icons */}
          <div className="flex justify-start gap-5 mt-4 text-gray-800 dark:text-gray-200">
            <a
              href="https://github.com/pournimak2507-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/pournima-kamble-157a28348"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:pournimak7401@gmail.com"
              className="hover:text-blue-500 transition-colors"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>

        {/* GST Project */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">GST Based Mini Project</h2>
          <p className="mt-1">
            Simple GST Calculator with invoice generation. Add items,
            auto-calculate SGST/CGST, view totals & download PDF invoice.
          </p>
          <Link href="/invoice">
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              Calculate GST & Make an Invoice
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
