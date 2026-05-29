/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head";
import BlockRenderer from "@/components/BlockRenderer";
import { fetchAPI } from "@/lib/api";
import { PageBuilderQuery } from "@/lib/queries";

export async function getStaticProps() {
  try {
    const data = await fetchAPI(`
      query HomePageQuery {
        page(id: "home", idType: URI) {
          ${PageBuilderQuery}
        }
        generalSettings {
          title
          description
        }
        posts(first: 100) {
          nodes {
            id
            title
            slug
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

    const homePage = data?.page || null;

    return {
      props: {
        wpData: data?.generalSettings || null,
        servicesData: data?.posts?.nodes || [],
        pageModules: homePage?.pageBuilder?.sections || [],
        error: null,
      },
      revalidate: 10,
    };
  } catch (err: any) {
    console.error("Error in getStaticProps for home page:", err);
    return {
      props: {
        wpData: { title: "Lycan Web", description: "Premium web transformations for founders who hunt growth." },
        servicesData: [],
        pageModules: [],
        error: "WordPress connection is waking up or offline. Please refresh the page in a moment 🐺",
      },
      revalidate: 1,
    };
  }
}

export default function Home({ wpData, servicesData, pageModules, error }: any) {
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

      {error && (
        <div className="bg-red-950/40 border border-red-500/20 text-red-200 px-6 py-4 rounded-xl text-center max-w-2xl mx-auto mt-24 mb-6 backdrop-blur-md">
          <p className="font-semibold text-lg mb-1">⚠️ Connection Alert</p>
          <p className="text-sm opacity-90">{error}</p>
        </div>
      )}

      {/* Everything is fully dynamic now. The Page Builder dictates the layout! */}
      {pageModules && pageModules.length > 0 ? (
        <BlockRenderer blocks={pageModules} globalData={{ servicesData }} />
      ) : (
        !error && (
          <div className="text-center py-24 text-gray-500">
            No sections found. Add some layouts in WordPress ACF!
          </div>
        )
      )}
    </>
  );
}
