// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-lg border-b border-violet-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white flex items-center gap-2"
        >
          <span className="text-violet-500">L</span>ycanWeb
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="#services"
            className="text-gray-300 hover:text-violet-400 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#work"
            className="text-gray-300 hover:text-violet-400 transition-colors"
          >
            Work
          </Link>
          <Link
            href="#about"
            className="text-gray-300 hover:text-violet-400 transition-colors"
          >
            About
          </Link>
          <button className="px-6 py-2.5 bg-violet-700 hover:bg-violet-600 text-white rounded-full font-medium transition-all shadow-lg shadow-violet-900/30">
            Summon the Pack
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-violet-900/30 py-6 px-6">
          <div className="flex flex-col gap-6 text-center">
            <Link
              href="#services"
              className="text-lg text-gray-300"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#work"
              className="text-lg text-gray-300"
              onClick={() => setMobileOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#about"
              className="text-lg text-gray-300"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <button className="mt-4 px-8 py-3 bg-violet-700 text-white rounded-full font-medium">
              Summon the Pack
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
