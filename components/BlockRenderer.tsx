/* eslint-disable @typescript-eslint/no-explicit-any */
import Hero from "./Hero";
import FinalCTA from "./Cta";
import TextCardGrid from "./TextCardGrid";
import ImageCardGrid from "./ImageCardGrid";
import StatsSection from "./StatsSection";

export default function BlockRenderer({ blocks, globalData }: { blocks: any[], globalData?: any }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.__typename) {
          case "PageBuilderSectionsHeroBannerLayout":
            return <Hero key={index} data={block} />;
          
          case "PageBuilderSectionsCtaLayout":
            return <FinalCTA key={index} data={block} />;
          
          case "PageBuilderSectionsTextCardGridLayout":
            return <TextCardGrid key={index} data={block} />;
          
          case "PageBuilderSectionsImageCardGridLayout":
            return <ImageCardGrid key={index} data={block} />;
          
          case "PageBuilderSectionsStatsLayout":
            return <StatsSection key={index} data={block} />;
            
          default:
            console.warn(`Unknown block type: ${block.__typename}`);
            return null;
        }
      })}
    </>
  );
}
