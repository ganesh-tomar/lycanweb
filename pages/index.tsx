import Head from "next/head";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioGrid from "@/components/PortfolioGrid";
import WhyUs from "@/components/WhyUs";
import FinalCTA from "@/components/Cta";

export default function Home() {
  return (
    <>
      <Head>
        <title key="pagetitle">Lycan web</title>
        <meta
          name="description"
          content="This is the homepage of Lycan web."
          key="metadescription"
        />
      </Head>

      <Hero />
      <ServicesGrid />
      <PortfolioGrid />
      <WhyUs />
      <FinalCTA />
    </>
  );
}
