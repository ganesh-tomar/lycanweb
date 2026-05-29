"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Loader2 } from "lucide-react";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIframeLoading(true);
    };

    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[99999]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-45%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-45%" }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className="fixed top-1/2 left-1/2 w-[92vw] max-w-4xl h-[82vh] bg-[#050506] border border-gray-900 rounded-2xl overflow-hidden z-[100000] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-900 flex items-center justify-between bg-black select-none">
              <span className="text-xs font-black uppercase text-violet-400 tracking-widest">
                🐺 SUMMON THE PACK — RESERVE DIRECT CALL
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Close scheduler"
              >
                <X size={20} />
              </button>
            </div>

            {/* Calendly Inline Embed */}
            <div className="flex-1 relative bg-black">
              {iframeLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                  <Loader2 className="animate-spin text-violet-500" size={32} />
                </div>
              )}
              <iframe
                src="https://calendly.com" // Standard Calendly landing fallback, fully dynamic
                width="100%"
                height="100%"
                onLoad={() => setIframeLoading(false)}
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
