import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Zap, Code, ShieldAlert, ArrowRight, CheckCircle2, Calendar, Clock, DollarSign } from "lucide-react";
import { motion } from "motion/react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Zap size={36} className="text-violet-400" />,
      title: "SPEEDTACTICS & PERFORMANCE",
      tagline: "Unbeatable page loads, optimized LCP/INP, 99+ Lighthouse.",
      price: "$1,499",
      timeline: "5 - 7 Days",
      inclusions: [
        "Lighthouse performance score 90+ guaranteed",
        "Next.js image and font optimization passes",
        "Render blocking JS removal and script deferrals",
        "Asset compression and code-splitting setup",
        "Comprehensive mobile viewport responsiveness check",
        "Google Core Web Vitals optimization audit report"
      ],
      description: "A slow site is an active leak in your conversion funnel. We hunt layout shifts, render delays, and bloated assets, leaving your competitors in the dust with unmatched, high-performance optimization."
    },
    {
      icon: <Code size={36} className="text-violet-400" />,
      title: "CUSTOM WEB APPLICATIONS",
      tagline: "Bespoke engineering with Next.js, TypeScript, and APIs.",
      price: "$3,999",
      timeline: "3 - 5 Weeks",
      inclusions: [
        "Custom Tailwind/Vanilla CSS design system architecture",
        "Serverless API route development & Resend/Stripe integrations",
        "Next.js routing, dynamic catching, and ISR setups",
        "Headless CMS integration (WordPress GraphQL / Sanity)",
        "Premium micro-interactions and Framer Motion layouts",
        "3 months post-launch tech support & scaling assistance"
      ],
      description: "We craft state-of-the-art web products engineered specifically for business growth. No lazy templates. No heavy builders. Pure, hand-written, high-conversion applications customized for your exact audience."
    },
    {
      icon: <ShieldAlert size={36} className="text-violet-400" />,
      title: "CONVERSION ENGINE AUDIT & ASSAULT",
      tagline: "Transforming passive traffic into active qualified leads.",
      price: "$2,499",
      timeline: "10 - 14 Days",
      inclusions: [
        "User experience / UI audit and heatmap mapping",
        "Lead flow design and Calendly / Cal.com embeds",
        "Interactive budget dropdowns and instant callback logic",
        "Post-submission automation and auto-responder loops",
        "Mobile tap-target and forms autocomplete validation",
        "Full copywriting overhaul of your primary landing hooks"
      ],
      description: "Traffic is vanity, conversions are sanity. We perform an exhaustive audit of your underperforming visual and structural elements, and rebuild your CTAs into zero-friction lead capture systems."
    }
  ];

  return (
    <>
      <Head>
        <title>Surgical Services — LycanWeb Agency</title>
        <meta name="description" content="Explore our specialized elite engineering blueprints, speed optimization systems, and conversion assault scopes." />
      </Head>

      <div className="bg-black text-white min-h-screen pt-36 pb-24 relative overflow-hidden">
        {/* Decorative dynamic ambient glow */}
        <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-violet-950/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-purple-950/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Header Hook */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center md:text-left">
          <span className="text-violet-500 font-bold uppercase tracking-widest text-sm mb-3 block">
            WE APPORTION DOMINANCE
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none mb-6 Oswald">
            OUR SURGICAL <span className="text-violet-500">SERVICES</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            We don't sell generic packages or build cookie-cutter landing pages. We engineer custom performance solutions built to convert global users into high-intent buyers.
          </p>
        </div>

        {/* Surgical Services List */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-20 relative z-10">
          {services.map((svc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-[#070707] border border-gray-900 rounded-2xl p-8 lg:p-12 hover:border-violet-800/40 hover:shadow-2xl hover:shadow-violet-950/10 transition-all duration-300 flex flex-col lg:flex-row gap-12 items-start"
            >
              {/* Left Column: Details */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-violet-950/40 border border-violet-900/50 rounded-xl">
                    {svc.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black Oswald text-white uppercase tracking-tight">
                    {svc.title}
                  </h2>
                </div>
                <p className="text-lg text-violet-400 font-semibold mb-6">
                  {svc.tagline}
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {svc.description}
                </p>

                {/* Scope Metadata */}
                <div className="flex flex-wrap gap-8 py-6 border-t border-gray-900">
                  <div className="flex items-center gap-3">
                    <DollarSign className="text-violet-500" size={20} />
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-black">Starting At</div>
                      <div className="text-lg font-bold text-white">{svc.price}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="text-violet-500" size={20} />
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-black">Timeline</div>
                      <div className="text-lg font-bold text-white">{svc.timeline}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="text-violet-500" size={20} />
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-black">Release Cycle</div>
                      <div className="text-lg font-bold text-white">Dynamic (Sprint Based)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Inclusions */}
              <div className="w-full lg:w-[420px] bg-[#0c0c0d] border border-gray-900 rounded-xl p-8">
                <h3 className="text-sm font-black uppercase text-violet-400 tracking-wider mb-6 pb-3 border-b border-gray-900">
                  WHAT IS INCLUDED IN SCOPE
                </h3>
                <ul className="flex flex-col gap-4">
                  {svc.inclusions.map((inc, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-violet-500 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-900 text-center">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 text-white bg-violet-700 hover:bg-violet-600 px-6 py-3 rounded-full text-sm font-semibold transition-all w-full justify-center group"
                  >
                    Deploy Scope
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
