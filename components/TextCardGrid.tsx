import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function TextCardGrid({ services, data }: { services?: any[], data?: any }) {
  const sectionTitle = data?.title || "";
  // Map WordPress posts to the exact format needed for the design
  const displayServices = services && services.length > 0
    ? services.map(post => ({
      title: post.title,
      desc: post.excerpt ? post.excerpt.replace(/<[^>]+>/g, '').trim() : "", // Strip HTML tags from WP excerpt
      tag: post.tags?.nodes?.[0]?.name || "Service",
    }))
    : [];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-black mb-4 [&_span]:text-violet-500"
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
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
              <Button variant="link" href="#">
                Explore <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
