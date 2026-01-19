// components/sections/FinalCTA.tsx
"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can connect to your backend / email service
    alert("Hunt started! We'll contact you soon 🐺");
    setEmail("");
  };

  return (
    <section className="py-32 bg-gradient-to-t from-violet-950/30 to-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black mb-8">
          READY TO RUN WITH <span className="text-violet-500">THE PACK</span>?
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Tell us your prey and we'll hunt it down together.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-6 py-5 bg-black border border-violet-900 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-all"
          />
          <button
            type="submit"
            className="px-10 py-5 bg-violet-700 hover:bg-violet-600 text-white font-medium rounded-full transition-all shadow-lg shadow-violet-900/40 whitespace-nowrap"
          >
            Unleash Now
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          Schedule a call instead?{" "}
          <a href="#" className="text-violet-400 hover:underline">
            Book now →
          </a>
        </p>
      </div>
    </section>
  );
}
