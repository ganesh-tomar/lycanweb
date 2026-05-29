import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "./Button";

export default function TextCardGrid({ data, globalData }: { data?: any; globalData?: any }) {
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
          {displayServices.map((service: any, i: number) => {
            // Slugify helper to map cards pointing to "/" directly to their dynamic blog post slugs
            const slugify = (text: string) => {
              if (!text) return "";
              return text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
            };

            const cardTitleSlug = slugify(service.cardTitle);

            // Dynamically check if this card title matches any fetched WordPress blog post
            const matchingPost = globalData?.servicesData?.find((post: any) => {
              return slugify(post.title || "") === cardTitleSlug || slugify(post.slug || "") === cardTitleSlug;
            });

            const cardLink = service.linkUrl === "/" && matchingPost
              ? `/blog/${matchingPost.slug || slugify(matchingPost.title)}`
              : service.linkUrl || "#";

            return (
              <Link
                key={i}
                href={cardLink}
                className="group bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-violet-700/50 transition-all hover:-translate-y-2 block cursor-pointer"
              >
                <div className="text-sm text-violet-500 mb-4 font-medium">
                  {service.type}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.cardTitle}</h3>
                <p className="text-gray-400 mb-6">{service.subheading}</p>
                {service.linkText && (
                  <span className="inline-flex items-center gap-2 text-violet-400 group-hover:text-violet-300 font-semibold transition-all">
                    {service.linkText} <ArrowRight size={16} />
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
