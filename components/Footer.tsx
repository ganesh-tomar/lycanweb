"use client";
// components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const triggerBooking = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-booking-modal"));
    }
  };

  return (
    <footer className="bg-black border-t border-gray-900 py-12 select-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo + Copyright */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="text-2xl font-black text-white uppercase tracking-tight flex items-center gap-1.5 Oswald font-semibold group mb-2"
            >
              <span className="text-violet-500 group-hover:scale-110 transition-transform">🐺</span>
              <span className="text-shimmer">LYCAN<span className="font-extrabold">WEB</span></span>
            </Link>
            <p className="text-gray-500 text-xs tracking-wide">
              © 2026 LycanWeb – Uttar Pradesh to the World
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <Link href="/services" className="hover:text-violet-400 transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="hover:text-violet-400 transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="hover:text-violet-400 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-violet-400 transition-colors">
              About
            </Link>
            <Link href="/contact-us" className="hover:text-violet-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Book Now & Socials */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            <button
              onClick={triggerBooking}
              className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full border border-violet-850 bg-violet-950/20 text-violet-400 hover:bg-violet-900/35 hover:text-violet-300 transition-all cursor-pointer mb-4 group shadow-lg shadow-violet-950/20"
            >
              Book Direct Call
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
            <div className="flex gap-6 justify-center md:justify-end text-sm">
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                X
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 text-center text-xs text-gray-650 border-t border-gray-900 pt-8">
          <a href="#" className="mx-3 hover:text-gray-400">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="mx-3 hover:text-gray-400">
            Terms of Service
          </a>
          <span>•</span>
          <a href="#" className="mx-3 hover:text-gray-400">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
}

