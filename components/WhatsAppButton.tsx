"use client";
import React, { useEffect, useState } from "react";
import { MessageSquareDot } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show WhatsApp button after scrolling down 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const waNumber = "919999999999"; // Replace with your actual WhatsApp business number
  const preFilledMessage = encodeURIComponent(
    "Hey LycanWeb team! 🐺 I'm interested in discussing a premium web transformation blueprint for my business."
  );

  if (!isVisible) return null;

  return (
    <motion.a
      href={`https://wa.me/${waNumber}?text=${preFilledMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ y: -4 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Floating dot notifier */}
      <span className="absolute top-0 right-0 w-3 h-3 bg-violet-600 border-2 border-white rounded-full animate-ping" />
      <span className="absolute top-0 right-0 w-3 h-3 bg-violet-600 border-2 border-white rounded-full" />
      
      {/* WhatsApp icon represented beautifully */}
      <MessageSquareDot size={24} className="group-hover:rotate-12 transition-transform duration-300" />
      
      {/* Dynamic Slide-out tooltip label */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 font-bold text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap">
        Secure WhatsApp Link
      </span>
    </motion.a>
  );
}
