/* eslint-disable @typescript-eslint/no-explicit-any */
// components/sections/PortfolioGrid.tsx
export default function ImageCardGrid({ data }: { data?: any }) {
  const sectionTitle = data?.title || "";
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
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Images/Projects will be dynamically mapped here later */}
        </div>
      </div>
    </section>
  );
}
