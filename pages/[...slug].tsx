/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head";
import BlockRenderer from "@/components/BlockRenderer";
import { fetchAPI } from "@/lib/api";
import { PageBuilderQuery } from "@/lib/queries";

// 1. Tell Next.js what pages exist in WordPress so it can generate them
export async function getStaticPaths() {
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
}

// 2. Fetch the data for the specific page being viewed
export async function getStaticProps({ params }: any) {
  const uri = params.slug.join("/");

  const data = await fetchAPI(`
    query DynamicPageQuery($uri: ID!) {
      page(id: $uri, idType: URI) {
        title
        seo {
          title
          metaDesc
        }
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
    },
    revalidate: 10,
  };
}

export default function DynamicPage({ pageData, pageModules }: any) {
  return (
    <>
      <Head>
        <title>{pageData?.seo?.title || pageData?.title || "LycanWeb"}</title>
        <meta name="description" content={pageData?.seo?.metaDesc || ""} />
      </Head>
      
      {/* Dynamic Page Builder Blocks */}
      <div className="pt-24 min-h-screen">
        <BlockRenderer blocks={pageModules} globalData={{}} />
      </div>
    </>
  );
}
