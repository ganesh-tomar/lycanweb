// components/sections/WhyUs.tsx
export default function WhyUs() {
  const reasons = [
    {
      title: "BEAST MODE DELIVERY",
      tag: "ALWAYS",
      desc: "Projects ship on schedule, no excuses",
    },
    {
      title: "NO REVISION HELL",
      tag: "CLEAN",
      desc: "We get it right the first time, every time",
    },
    {
      title: "REVENUE FIRST PHILOSOPHY",
      tag: "RUTHLESS",
      desc: "Every decision feeds the bottom line",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            WHY THE PACK <span className="text-violet-500">TRUSTS US</span>
          </h2>
          <p className="text-xl text-gray-400">
            We deliver like predators hunt: relentless and precise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-[#111] to-black border border-gray-800 rounded-xl p-8 hover:border-violet-700/50 transition-all hover:-translate-y-2"
            >
              <div className="text-4xl font-black text-violet-600 mb-4">
                {reason.tag}
              </div>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-300">{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* Optional big testimonial placeholder */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#0a0a0a] border border-violet-900/30 rounded-2xl p-10 max-w-3xl">
            <p className="text-2xl italic text-gray-300 mb-6">
              "They didn't just build our site — they built a weapon."
            </p>
            <p className="text-violet-400 font-medium">Founder, Apex Digital</p>
          </div>
        </div>
      </div>
    </section>
  );
}
