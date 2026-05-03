import Image from "next/image";
import Button from "./Button";
// components/sections/PortfolioGrid.tsx
export default function ImageCardGrid({ data }: { data?: any }) {
  const sectionTitle = data?.title || "";
  const subtitle = data?.subtitle || "";
  const cards = data?.cards || [];
  return (
    <section
      id="work"
      className="image-card-grid py-24 bg-linear-to-b from-black to-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-black [&_span]:text-violet-500"
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
          {subtitle && (
            <p className="text-xl text-gray-400 mt-4">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card: any, i: number) => {
            const imageUrl = card.cardImage?.node?.sourceUrl || "/placeholder.jpg";
            const altText = card.cardImage?.node?.altText || card.cardTitle;
            const tags = card.categories || [];
            
            return (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={imageUrl}
                    alt={altText}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {tags.map((cat: any, idx: number) => (
                      <span key={idx} className="text-xs font-bold text-violet-400 uppercase tracking-wider bg-violet-950/50 px-3 py-1 rounded-full backdrop-blur-xs">
                        {cat.tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{card.cardTitle}</h3>
                  {card.cardSubtitle && <p className="text-gray-300 mb-4">{card.cardSubtitle}</p>}
                  {card.linkText && (
                    <Button variant="link" href={card.linkUrl || "#"}>
                      {card.linkText} →
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
