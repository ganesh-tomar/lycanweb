import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function TextCardGrid({ data }: { data?: any }) {
  const sectionTitle = data?.title || "";
  const subtitle = data?.subtitle || "";

  const displayServices = data?.textCards || [];

  return (
    <section id="services" className="text-card-grid py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-black mb-4 [&_span]:text-violet-500"
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
          {subtitle && (
            <p className="text-xl text-gray-400">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayServices.map((service: any, i: number) => (
            <div
              key={i}
              className="group bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-violet-700/50 transition-all hover:-translate-y-2"
            >
              <div className="text-sm text-violet-500 mb-4 font-medium">
                {service.type}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.cardTitle}</h3>
              <p className="text-gray-400 mb-6">{service.subheading}</p>
              {service.linkText && (
                <Button variant="link" href={service.linkUrl || "#"}>
                  {service.linkText} <ArrowRight size={16} />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
