/* eslint-disable @typescript-eslint/no-explicit-any */
// components/sections/StatsSection.tsx
export default function StatsSection({ data }: { data?: any }) {
  const title = data?.title || "WHY THE PACK <span class='text-violet-500'>TRUSTS US</span>";
  const subtitle = data?.subtitle || "We deliver like predators hunt: relentless and precise";

  // Use ACF stat blocks, fallback to hardcoded if none exist
  const rawStats = data?.statBlocks || [];
  const reasons = rawStats.length > 0
    ? rawStats.map((stat: any) => ({
      tag: stat.statLabel || "",
      title: stat.statValue || "",
      desc: "", // Optional description if you add it to ACF later
    }))
    : [
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
          <h2
            className="text-5xl md:text-6xl font-black mb-4"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-xl text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason: { tag: string; title: string; desc?: string }, i: number) => (
            <div
              key={i}
              className="bg-linear-to-b from-[#111] to-black border border-gray-800 rounded-xl p-8 hover:border-violet-700/50 transition-all hover:-translate-y-2"
            >
              <div className="text-4xl font-black text-violet-600 mb-4">
                {reason.tag}
              </div>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              {reason.desc && <p className="text-gray-300">{reason.desc}</p>}
            </div>
          ))}
        </div>

        {/* Optional big testimonial placeholder */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#0a0a0a] border border-violet-900/30 rounded-2xl p-10 max-w-3xl">
            <p className="text-2xl italic text-gray-300 mb-6">
              &quot;They didn&apos;t just build our site — they built a weapon.&quot;
            </p>
            <p className="text-violet-400 font-medium">Founder, Apex Digital</p>
          </div>
        </div>
      </div>
    </section>
  );
}
