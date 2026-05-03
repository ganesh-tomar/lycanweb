import { HeroFragment } from "./hero";
import { CtaFragment } from "./cta";
import { TextCardGridFragment } from "./textCardGrid";
import { ImageCardGridFragment } from "./imageCardGrid";
import { StatsFragment } from "./stats";
import { TestimonialSliderFragment } from "./testimonialSlider";

// As you build more components, create a .fragment.ts file for them and import them here!
export const PageBuilderQuery = `
  pageBuilder {
    sections {
      __typename
      ${HeroFragment}
      ${CtaFragment}
      ${TextCardGridFragment}
      ${ImageCardGridFragment}
      ${StatsFragment}
      ${TestimonialSliderFragment}
    }
  }
`;
