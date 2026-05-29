// components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "HOME BLUEPRINT", href: "/" },
    { title: "SURGICAL SERVICES", href: "/services" },
    { title: "PRICING BLUEPRINTS", href: "/pricing" },
    { title: "INTELLIGENCE BLOG", href: "/blog" },
    { title: "THE PACK STORY", href: "/about" },
  ];

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 380,
        damping: 38,
        staggerChildren: 0.05,
        staggerDirection: -1 as const,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 280,
        damping: 28,
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const linkVariants = {
    closed: { x: 40, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 15 },
    },
  };

  return (
    <>
      {/* Floating Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-black/70 backdrop-blur-md border-b border-violet-950/40"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black text-white uppercase tracking-tight flex items-center gap-1.5 Oswald font-semibold group"
          >
            <span className="text-violet-500 group-hover:scale-110 transition-transform">🐺</span>
            <span>LYCAN<span className="text-violet-500 font-extrabold">WEB</span></span>
          </Link>

          {/* Trigger Button with Hover Text */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact-us"
              className="hidden sm:inline-flex px-6 py-2.5 bg-violet-950/40 hover:bg-violet-900/30 text-violet-400 hover:text-violet-300 border border-violet-800/30 rounded-full text-sm font-semibold transition-all shadow-md shadow-violet-950/30"
            >
              Summon the Pack
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 bg-black border border-gray-900 hover:border-violet-800/50 px-4 py-2.5 rounded-full transition-all group z-50 text-white cursor-pointer"
              aria-label="Toggle Navigation drawer"
            >
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-violet-400 transition-colors hidden sm:inline">
                {isOpen ? "CLOSE" : "MENU"}
              </span>
              <div className="w-5 h-4 flex flex-col justify-between items-end relative">
                {/* Custom Hamburger transitions */}
                <span className={`h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? "w-5 rotate-45 translate-y-1.5" : "w-5"}`} />
                <span className={`h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-3"}`} />
                <span className={`h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? "w-5 -rotate-45 -translate-y-1.5" : "w-4"}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Dynamic Collapsible Sliding Column Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-45"
            />

            {/* Sidebar Column Panel */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[480px] bg-[#050506] border-l border-gray-950 z-48 p-8 lg:p-12 flex flex-col justify-between overflow-y-auto pt-32 shadow-2xl shadow-violet-950/10"
            >
              {/* Top ambient aura */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-violet-950/15 rounded-full blur-[80px] pointer-events-none" />

              {/* Navigation Items */}
              <div className="flex flex-col gap-10 mt-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-violet-400 border-b border-gray-900 pb-3 block">
                  SYSTEM PROTOCOLS
                </span>
                
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, idx) => (
                    <motion.div key={idx} variants={linkVariants} className="group/nav-link">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-black uppercase tracking-tight text-gray-300 hover:text-violet-400 transition-colors Oswald block"
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Footer Channels / Lead Capture hooks */}
              <div className="flex flex-col gap-8 mt-12 border-t border-gray-900 pt-8 font-sans">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-violet-400 mb-4">
                    ESTABLISH DIRECT LINK
                  </div>
                  
                  <div className="flex flex-col gap-4 text-xs text-gray-400">
                    <a href="mailto:ganesh.tomar.dev@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                      <Mail size={14} className="text-violet-500" />
                      ganesh.tomar.dev@gmail.com
                    </a>
                    <div className="flex items-center gap-3">
                      <MapPin size={14} className="text-violet-500" />
                      Uttar Pradesh, India (Global)
                    </div>
                  </div>
                </div>

                <motion.div variants={linkVariants}>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 text-white bg-violet-700 hover:bg-violet-600 px-8 py-4.5 rounded-xl text-sm font-semibold transition-all w-full justify-center group shadow-md shadow-violet-900/30"
                  >
                    Summon the Pack
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
