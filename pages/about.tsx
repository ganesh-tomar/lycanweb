import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Users, Target, Shield, ArrowRight, Eye, Sparkles, Coffee } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Sparkles className="text-violet-400" size={24} />,
      title: "PREMIUM CRAFT ONLY",
      desc: "No lazy builders. No heavy themes. We hand-write Next.js web systems so they remain ultra-custom, lightweight, and incredibly fast."
    },
    {
      icon: <Target className="text-violet-400" size={24} />,
      title: "CONVERSION IS SANITY",
      desc: "A beautiful website that collects zero leads is useless. We design tactical navigation paths, budget tools, and zero-friction scheduler embeds."
    },
    {
      icon: <Coffee className="text-violet-400" size={24} />,
      title: "UP ROOTS, GLOBAL IMPACT",
      desc: "Built with resilience and engineering grit in Uttar Pradesh, India. We partner directly with ambitious founders across the globe to scale growth."
    }
  ];

  return (
    <>
      <Head>
        <title>Our Pack Story — LycanWeb Agency</title>
        <meta name="description" content="Read the Lycan story. A boutique engineering and performance agency from UP, built exclusively for global founders who hunt growth." />
      </Head>

      <div className="bg-black text-white min-h-screen pt-36 pb-24 relative overflow-hidden">
        {/* Ambient Gradient Decors */}
        <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-violet-950/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-purple-950/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Headline Header */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center md:text-left">
          <span className="text-violet-500 font-bold uppercase tracking-widest text-sm mb-3 block">
            THE LYCAN CREED
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none mb-6 Oswald">
            CRAFTED FOR THE <span className="text-shimmer">HUNT</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            We are a surgical engineering and speed optimization agency. We don't write bloated code, we don't build generic layouts, and we never make excuses. We exist to help high-growth founders win.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase Oswald mb-6">
              FROM PREY TO <span className="text-shimmer">PREDATOR</span>
            </h2>
            <div className="text-gray-400 space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                The digital ecosystem is actively hostile. Bloated templates, slow loading speeds, and underperforming call-to-actions are quietly dragging otherwise elite businesses down into obscurity. 
              </p>
              <p>
                We founded <strong className="text-white">LycanWeb</strong> to change that. Operating out of Uttar Pradesh, we saw first-hand that digital success doesn't require massive corporate budgets. It requires raw technical craft, absolute performance optimization, and surgical user flow design.
              </p>
              <p>
                We work directly with founders globally who are tired of basic agencies delivering slow, cookie-cutter assets. We treat your web presence like a growth engine—maximizing speed, eliminating lead capture friction, and polishing every pixel.
              </p>
            </div>
          </motion.div>

          {/* Luxury visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-linear-to-br from-violet-950/40 via-purple-950/15 to-black border border-violet-900/30 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-radial-vignette opacity-20 pointer-events-none" />
            <span className="text-sm font-black uppercase tracking-widest text-violet-400 mb-4 block">THE GEOMETRY OF LYCAN</span>
            <div className="text-7xl font-extrabold text-white mb-6 Oswald font-black select-none opacity-20 tracking-tighter">
              🐺 SHADOW
            </div>
            <p className="text-lg text-gray-300 italic max-w-md mx-auto mb-8 font-medium">
              "We don't buy templates. We design custom engineering pipelines so your digital authority stands completely alone."
            </p>
            <div className="flex gap-4 justify-center items-center">
              <div className="text-center px-6 py-2 border border-gray-900 rounded-xl bg-black/60">
                <div className="text-2xl font-black text-shimmer Oswald font-black">99+</div>
                <div className="text-xs text-gray-500 uppercase font-bold">Speed Guarantee</div>
              </div>
              <div className="text-center px-6 py-2 border border-gray-900 rounded-xl bg-black/60">
                <div className="text-2xl font-black text-shimmer Oswald font-black">100%</div>
                <div className="text-xs text-gray-500 uppercase font-bold">Handcoded JS</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-center Oswald mb-16">
            OUR CORE <span className="text-shimmer">VALUES</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#060606] border border-gray-950 hover:border-violet-950 p-8 rounded-2xl transition-all duration-300"
              >
                <div className="p-3 bg-violet-950/20 border border-violet-900/40 rounded-xl w-fit mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold uppercase Oswald mb-4 tracking-tight">{val.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="max-w-4xl mx-auto px-6 text-center border-t border-gray-900 pt-20">
          <h2 className="text-3xl font-black uppercase Oswald mb-6">
            READY TO UNLEASH THE <span className="text-shimmer">BEAST?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm">
            Partner with an elite speed-and-conversion engineering pack. Let's build your custom digital blueprint.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 text-white bg-violet-700 hover:bg-violet-600 px-10 py-5 rounded-full text-base font-semibold shadow-xl shadow-violet-900/30 transition-all group"
          >
            Commence the Hunt
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
