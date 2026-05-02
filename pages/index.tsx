import Head from "next/head";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioGrid from "@/components/PortfolioGrid";
import WhyUs from "@/components/WhyUs";
import FinalCTA from "@/components/Cta";
import { fetchAPI } from "@/lib/api";

export async function getStaticProps() {
  const data = await fetchAPI(`
    query HomePageQuery {
      generalSettings {
        title
        description
      }
      posts(first: 3) {
        nodes {
          id
          title
          excerpt
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  `);

  return {
    props: {
      wpData: data?.generalSettings || null,
      servicesData: data?.posts?.nodes || [],
    },
    revalidate: 10,
  };
}

export default function Home({ wpData, servicesData }: { wpData: any; servicesData: any[] }) {
  return (
    <>
      <Head>
        <title key="pagetitle">{wpData?.title || "Lycan web"}</title>
        <meta
          name="description"
          content={wpData?.description || "This is the homepage of Lycan web."}
          key="metadescription"
        />
      </Head>

      {/* Small Banner to prove WordPress connection works */}
      {wpData && (
        <div className="bg-violet-900 text-white text-center py-2 text-sm">
          Connected to WordPress successfully! Backend Title: <strong>{wpData.title}</strong>
        </div>
      )}

      <Hero />
      <ServicesGrid services={servicesData} />
      <PortfolioGrid />
      <WhyUs />
      <FinalCTA />
    </>
  );
}
