"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <a href="#" className="text-3xl font-bold text-blue-600">
          Nova Studio
        </a>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>

          <a href="#portfolio" className="hover:text-blue-600 transition">
            Portfolio
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden md:block bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-6 gap-5">

            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>

            <a href="#portfolio" onClick={() => setOpen(false)}>
              Portfolio
            </a>

            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}