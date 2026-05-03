/* eslint-disable @typescript-eslint/no-explicit-any */
// components/sections/PortfolioGrid.tsx
const projects = [
  {
    name: "APEX DIGITAL",
    stats: "+420% leads",
    services: ["Strategy", "Design", "Development"],
  },
  {
    name: "NOCTURNE VENTURES",
    stats: "Branding revolution",
    services: ["Branding", "UX Design", "Engineering"],
  },
  {
    name: "MIDNIGHT CAPITAL",
    stats: "92% session engagement",
    services: ["Web Design", "Analytics", "Optimization"],
  },
];

export default function ImageCardGrid({ data }: { data?: any }) {
  const sectionTitle = data?.title || "SELECTED <span class='text-violet-500'>HUNTS</span>";
  return (
    <section
      id="work"
      className="py-24 bg-linear-to-b from-black to-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-black"
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
          <p className="text-xl text-gray-400 mt-4">
            Elite projects that proved the pack runs deep
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:border-violet-700/50 transition-all hover:-translate-y-2"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                {/* Placeholder - replace with real image */}
                <span className="text-gray-600 text-xl font-bold">
                  {project.name}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-violet-400 font-medium mb-4">
                  {project.stats}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 bg-gray-800 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-violet-400 hover:text-violet-300">
                  View project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
