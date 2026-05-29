/* eslint-disable @typescript-eslint/no-explicit-any */
import Hero from "./Hero";
import FinalCTA from "./Cta";
import TextCardGrid from "./TextCardGrid";
import ImageCardGrid from "./ImageCardGrid";
import StatsSection from "./StatsSection";
import TestimonialSlider from "./TestimonialSlider";
import ScrollReveal from "./ScrollReveal";

export default function BlockRenderer({ blocks, globalData }: { blocks: any[], globalData?: any }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.__typename) {
          case "PageBuilderSectionsHeroBannerLayout":
            return <Hero key={index} data={block} />;

          case "PageBuilderSectionsCtaLayout":
            return (
              <ScrollReveal key={index}>
                <FinalCTA data={block} />
              </ScrollReveal>
            );

          case "PageBuilderSectionsTextCardGridLayout":
            return (
              <ScrollReveal key={index}>
                <TextCardGrid data={block} globalData={globalData} />
              </ScrollReveal>
            );

          case "PageBuilderSectionsImageCardGridLayout":
            return (
              <ScrollReveal key={index}>
                <ImageCardGrid data={block} />
              </ScrollReveal>
            );

          case "PageBuilderSectionsStatsLayout":
            return (
              <ScrollReveal key={index}>
                <StatsSection data={block} />
              </ScrollReveal>
            );

          case "PageBuilderSectionsTestimonialsliderLayout":
            return (
              <ScrollReveal key={index}>
                <TestimonialSlider data={block} />
              </ScrollReveal>
            );

          default:
            console.warn(`Unknown block type: ${block.__typename}`);
            return null;
        }
      })}
    </>
  );
}
