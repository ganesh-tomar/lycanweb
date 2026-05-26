/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head";
import BlockRenderer from "@/components/BlockRenderer";
import { fetchAPI } from "@/lib/api";
import { PageBuilderQuery } from "@/lib/queries";

// 1. Tell Next.js what pages exist in WordPress so it can generate them
export async function getStaticPaths() {
  try {
    const data = await fetchAPI(`
      query AllPagesQuery {
        pages(first: 100) {
          nodes {
            uri
          }
        }
      }
    `);

    const paths = data?.pages?.nodes
      .filter((page: any) => page.uri !== "/") // We already have pages/index.tsx for the homepage
      .map((page: any) => ({
        params: { slug: page.uri.split("/").filter(Boolean) },
      }));

    return {
      paths: paths || [],
      fallback: "blocking", // If a new page is created in WP, Next.js will build it on the fly!
    };
  } catch (err) {
    console.error("Error in getStaticPaths:", err);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

// 2. Fetch the data for the specific page being viewed
export async function getStaticProps({ params }: any) {
  const uri = params.slug.join("/");

  try {
    const data = await fetchAPI(`
      query DynamicPageQuery($uri: ID!) {
        page(id: $uri, idType: URI) {
          title
          ${PageBuilderQuery}
        }
      }
    `, {
      variables: { uri },
    });

    if (!data?.page) {
      return { notFound: true };
    }

    return {
      props: {
        pageData: data.page,
        pageModules: data.page?.pageBuilder?.sections || [],
        error: null,
      },
      revalidate: 10,
    };
  } catch (err: any) {
    console.error(`Error in getStaticProps for slug [${uri}]:`, err);
    return {
      props: {
        pageData: { title: "LycanWeb Page Offline" },
        pageModules: [],
        error: "WordPress connection is waking up or offline. Please refresh the page in a moment 🐺",
      },
      revalidate: 1,
    };
  }
}

export default function DynamicPage({ pageData, pageModules, error }: any) {
  return (
    <>
      <Head>
        <title>{pageData?.title || "LycanWeb"}</title>
        <meta name="description" content="LycanWeb Page" />
      </Head>

      {/* Dynamic Page Builder Blocks */}
      <div className="pt-24 min-h-screen">
        {error && (
          <div className="bg-red-950/40 border border-red-500/20 text-red-200 px-6 py-4 rounded-xl text-center max-w-2xl mx-auto mb-6 backdrop-blur-md">
            <p className="font-semibold text-lg mb-1">⚠️ Connection Alert</p>
            <p className="text-sm opacity-90">{error}</p>
          </div>
        )}
        <BlockRenderer blocks={pageModules} globalData={{}} />
      </div>
    </>
  );
}
