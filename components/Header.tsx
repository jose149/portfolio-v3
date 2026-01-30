"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{ backgroundColor: "#EEEEEF" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">MyPortfolio</div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden px-6 py-4 space-y-2"
          style={{ backgroundColor: "#EEEEEF" }}
        >
          <a href="#about" className="block hover:text-blue-600">
            About
          </a>
          <a href="#projects" className="block hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="block hover:text-blue-600">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
