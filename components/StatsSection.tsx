/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";

// Interactive Count-Up helper that parses symbols like "+" and "%"
function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [displayValue, setDisplayValue] = React.useState(0);

  // Extract number from string (e.g. "+420%" -> 420, "92%" -> 92)
  const numericString = value.replace(/[^0-9]/g, "");
  const numericVal = parseInt(numericString, 10) || 0;

  // Preserve dynamic prefixes and suffixes
  const prefix = value.startsWith("+") ? "+" : "";
  const suffix = value.endsWith("%") ? "%" : "";

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericVal, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1], // Premium easeOutQuart
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, numericVal]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function StatsSection({ data }: { data?: any }) {
  const title = data?.title || "";
  const subtitle = data?.subtitle || "";

  // Use ACF stat blocks, fallback to empty array if none exist
  const rawStats = data?.statBlocks || [];
  const reasons = rawStats.map((stat: any) => ({
    tag: stat.statLabel || "",
    value: stat.statValue || "",
    description: stat.description || "",
  }));

  return (
    <section className="stats py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          {/* Headline featuring shimmery gradients */}
          <h2
            className="text-5xl md:text-6xl font-black mb-4 uppercase Oswald"
            dangerouslySetInnerHTML={{
              __html: title.replace(/<span>(.*?)<\/span>/g, '<span class="text-shimmer font-extrabold">$1</span>')
            }}
          />
          <p className="text-xl text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason: { tag: string; value: string; description?: string }, i: number) => (
            <div
              key={i}
              className="bg-linear-to-b from-[#070708] to-black border border-gray-900 rounded-xl p-8 hover:border-violet-700/40 hover:shadow-2xl hover:shadow-violet-950/10 transition-all hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-black uppercase text-violet-400 tracking-widest mb-6 border-b border-gray-950 pb-3">
                  {reason.tag}
                </div>

                {/* Beautiful large glowing count-up metric */}
                <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4 Oswald font-bold text-white select-none">
                  <Counter value={reason.value} />
                </h3>
              </div>

              {reason.description && (
                <p className="text-gray-400 text-sm leading-relaxed min-h-[60px] border-t border-gray-950 pt-4 mt-2">
                  {reason.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
