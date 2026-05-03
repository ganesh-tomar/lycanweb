/* eslint-disable @typescript-eslint/no-explicit-any */
// components/sections/StatsSection.tsx
export default function StatsSection({ data }: { data?: any }) {
  const title = data?.title || "";
  const subtitle = data?.subtitle || "";

  // Use ACF stat blocks, fallback to empty array if none exist
  const rawStats = data?.statBlocks || [];
  const reasons = rawStats.map((stat: any) => ({
    tag: stat.statLabel || "",
    title: stat.statValue || "",
    desc: stat.statDescription || "", 
  }));

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-black mb-4 [&>span]:text-violet-500"
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
      </div>
    </section>
  );
}
