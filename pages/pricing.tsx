import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Check, HelpCircle, ArrowRight, ShieldCheck, Flame, Compass } from "lucide-react";
import { motion } from "motion/react";

export default function PricingPage() {
  const tiers = [
    {
      name: "PACK MEMBER",
      icon: <Compass className="text-violet-400" size={24} />,
      price: "$1,499",
      sub: "Ideal for early-stage founders seeking digital lift-off.",
      buttonText: "Join the Pack",
      popular: false,
      features: [
        "Single high-converting Landing Page",
        "Lighthouse performance rating 90+",
        "Framer Motion premium micro-interactions",
        "Resend API direct form integration",
        "Custom Montserrat & Oswald typography",
        "SEO Meta Tags basic configuration",
        "5 Days post-launch technical support"
      ]
    },
    {
      name: "ALPHA LEADER",
      icon: <Flame className="text-violet-500" size={24} />,
      price: "$3,499",
      sub: "Engineered for growth-focused brands ready to scale global bounds.",
      buttonText: "Go Alpha",
      popular: true,
      features: [
        "Up to 5 dynamic Next.js / React Pages",
        "Headless WordPress integration (WPGraphQL)",
        "Premium ACFs page builder engine integration",
        "Dynamic meta tags per page (SEO optimized)",
        "Calendly / Cal.com calendar scheduling",
        "SpeedTactics optimization passes (100% scores)",
        "WhatsApp floating zero-friction chat badge",
        "1 Month direct priority priority support"
      ]
    },
    {
      name: "THE PREDATOR",
      icon: <ShieldCheck className="text-violet-400" size={24} />,
      price: "CUSTOM",
      sub: "Bespoke web applications built for absolute digital dominance.",
      buttonText: "Hunt Custom Scale",
      popular: false,
      features: [
        "Unrestricted dynamic page routes & structure",
        "Custom database setups (PostgreSQL / Firebase)",
        "Full-scale e-commerce or user portal systems",
        "State-of-the-art animations & custom shaders",
        "Custom Resend automation templates",
        "Strategic copywriting & brand messaging",
        "Lifetime support & continuous core updates"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing BLUEPRINTS — LycanWeb Agency</title>
        <meta name="description" content="Discover transparent surgical pricing tiers tailored for elite founders. Starter, Growth, and Predator scaling structures." />
      </Head>

      <div className="bg-black text-white min-h-screen pt-36 pb-24 relative overflow-hidden">
        {/* Ambient Gradient Decors */}
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-violet-950/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-purple-950/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Headline */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <span className="text-violet-500 font-bold uppercase tracking-widest text-sm mb-3 block">
            TRANSPARENT BLUEPRINTS
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none mb-6 Oswald">
            DOMINANCE TIER <span className="text-shimmer">PRICING</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            No dynamic hidden fees. No vague hourly scopes. Just surgical, fixed-price blueprints to secure your business a premier digital presence.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-24 relative z-10">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className={`bg-[#070707] border rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular 
                  ? "border-violet-600 shadow-2xl shadow-violet-950/25 md:-translate-y-3 hover:border-violet-500" 
                  : "border-gray-900 hover:border-violet-950"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  MOST POPULAR
                </span>
              )}

              <div>
                {/* Header info */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-black uppercase text-violet-400 tracking-wider">
                    {tier.name}
                  </span>
                  <div className="p-2 bg-violet-950/20 border border-violet-900/40 rounded-lg">
                    {tier.icon}
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl md:text-5xl font-black tracking-tight">{tier.price}</span>
                  {tier.price !== "CUSTOM" && <span className="text-gray-500 text-sm">/fixed</span>}
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-8 border-b border-gray-900 pb-6 min-h-[50px]">
                  {tier.sub}
                </p>

                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-gray-300">
                      <Check size={16} className="text-violet-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger */}
              <div className="mt-6">
                <Link
                  href="/contact-us"
                  className={`inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold transition-all w-full justify-center group ${
                    tier.popular
                      ? "bg-violet-700 hover:bg-violet-600 text-white shadow-xl shadow-violet-900/30"
                      : "bg-transparent border border-gray-800 text-white hover:border-violet-800 hover:bg-violet-950/20"
                  }`}
                >
                  {tier.buttonText}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust features / conversion section */}
        <div className="max-w-4xl mx-auto px-6 text-center border-t border-gray-900 pt-20">
          <h2 className="text-2xl md:text-3xl font-black uppercase Oswald mb-4">
            EVERY PLAN SECURES OUR <span className="text-shimmer">LYCAN PROTOCOLS</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-10">
            Regardless of your selected tier, we maintain absolute compliance with modern digital speed policies. Your site will rank, convert, and scale.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "90+ Lighthouse Speed",
              "Dynamic Meta SEO Setup",
              "Handcoded React & Next.js",
              "100% Scalable Deployment"
            ].map((item, idx) => (
              <div key={idx} className="bg-[#050505] border border-gray-950 p-4 rounded-xl">
                <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
