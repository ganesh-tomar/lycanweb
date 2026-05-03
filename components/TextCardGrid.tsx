/* eslint-disable @typescript-eslint/no-explicit-any */
// components/sections/ServicesGrid.tsx
import { ArrowRight } from "lucide-react";

const fallbackServices = [
  {
    title: "WEB TRANSFORMATIONS",
    desc: "Seventy percent faster, zero excuses",
    tag: "Speed",
  },
  {
    title: "CONVERSION ASSAULT",
    desc: "We track and kill underperformers",
    tag: "Assault",
  },
  {
    title: "AI-FUELED SPEED",
    desc: "Machine learning hunts like we do",
    tag: "Engine",
  },
];

export default function TextCardGrid({ services, data }: { services?: any[], data?: any }) {
  const sectionTitle = data?.title || "WHAT WE <span class='text-violet-500'>HUNT</span>";
  // Map WordPress posts to the exact format needed for the design
  const displayServices = services && services.length > 0
    ? services.map(post => ({
      title: post.title,
      desc: post.excerpt ? post.excerpt.replace(/<[^>]+>/g, '').trim() : "", // Strip HTML tags from WP excerpt
      tag: post.tags?.nodes?.[0]?.name || "Service",
    }))
    : fallbackServices;

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-black mb-4"
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
          <p className="text-xl text-gray-400">
            From prey to predator overnight
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayServices.map((service, i) => (
            <div
              key={i}
              className="group bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-violet-700/50 transition-all hover:-translate-y-2"
            >
              <div className="text-sm text-violet-500 mb-4 font-medium">
                {service.tag}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.desc}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300"
              >
                Explore <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
