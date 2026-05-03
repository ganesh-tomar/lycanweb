/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head";
import BlockRenderer from "@/components/BlockRenderer";
import { fetchAPI } from "@/lib/api";
import { PageBuilderQuery } from "@/lib/queries";

export async function getStaticProps() {
  const data = await fetchAPI(`
    query HomePageQuery {
      page(id: "home", idType: URI) {
        ${PageBuilderQuery}
      }
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

  const homePage = data?.page || null;

  return {
    props: {
      wpData: data?.generalSettings || null,
      servicesData: data?.posts?.nodes || [],
      pageModules: homePage?.pageBuilder?.sections || [],
    },
    revalidate: 10,
  };
}

export default function Home({ wpData, servicesData, pageModules }: any) {
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

      {/* Everything is fully dynamic now. The Page Builder dictates the layout! */}
      <BlockRenderer blocks={pageModules} globalData={{ servicesData }} />
    </>
  );
}
