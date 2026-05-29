/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { fetchAPI } from "@/lib/api";

// 1. Tell Next.js what static post routes exist
export async function getStaticPaths() {
  try {
    const data = await fetchAPI(`
      query AllPostSlugs {
        posts(first: 100) {
          nodes {
            slug
          }
        }
      }
    `);

    const paths = data?.posts?.nodes?.map((post: any) => ({
      params: { slug: post.slug },
    })) || [];

    return {
      paths,
      fallback: "blocking", // Build new articles dynamically on demand
    };
  } catch (err) {
    console.error("Error in getStaticPaths for single post:", err);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

// 2. Fetch specific post data dynamically by slug
export async function getStaticProps({ params }: any) {
  const slug = params.slug;

  try {
    const data = await fetchAPI(`
      query SinglePostQuery($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          title
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          tags {
            nodes {
              name
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    `, {
      variables: { slug },
    });

    if (!data?.post) {
      return { notFound: true };
    }

    return {
      props: {
        post: data.post,
        error: null,
      },
      revalidate: 10,
    };
  } catch (err: any) {
    console.error(`Error in getStaticProps for post slug [${slug}]:`, err);
    return {
      props: {
        post: { title: "Article Currently Offline", content: "" },
        error: "WordPress connection is waking up or offline. Please refresh in a moment 🐺",
      },
      revalidate: 1,
    };
  }
}

export default function BlogPost({ post, error }: any) {
  // Format Date Helper
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const imageUrl = post?.featuredImage?.node?.sourceUrl;
  const altText = post?.featuredImage?.node?.altText || post?.title;
  const authorName = post?.author?.node?.name || "Lycan Staff";
  const dateText = formatDate(post?.date);
  const tags = post?.tags?.nodes || [];

  return (
    <>
      <Head>
        <title>{post?.title || "Article"} — The Shadow Logs</title>
        <meta name="description" content={`Read the latest intelligence report: ${post?.title}`} />
      </Head>

      <div className="bg-black text-white min-h-screen pt-32 pb-24">
        {/* Navigation Header */}
        <div className="max-w-4xl mx-auto px-6 mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-violet-400 font-medium text-sm transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Shadow Logs
          </Link>
        </div>

        {/* Offline Warning Banner */}
        {error && (
          <div className="max-w-4xl mx-auto px-6 mb-12">
            <div className="bg-red-950/40 border border-red-500/20 text-red-200 px-6 py-4 rounded-xl text-center backdrop-blur-md">
              <p className="font-semibold text-lg mb-1">⚠️ Connection Alert</p>
              <p className="text-sm opacity-90">{error}</p>
            </div>
          </div>
        )}

        {/* Article Container */}
        <article className="max-w-4xl mx-auto px-6">
          {/* Header Metadata */}
          <header className="mb-12">
            {/* Category tags */}
            {tags.length > 0 && (
              <div className="flex gap-2 mb-6">
                {tags.map((tag: any, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full"
                  >
                    <Tag size={10} />
                    {tag.name}
                  </span>
                ))}
              </div>
            )}

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-8 [&_span]:text-violet-500">
              {post?.title}
            </h1>

            {/* Author + Date + Reading Stats */}
            <div className="flex flex-wrap gap-6 items-center text-sm text-gray-400 border-y border-gray-900 py-4">
              <span className="flex items-center gap-2">
                <User size={16} className="text-violet-500" />
                <span className="text-white font-medium">{authorName}</span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-violet-500" />
                {dateText}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-violet-500" />
                5 min read
              </span>
            </div>
          </header>

          {/* Featured Image Cover Banner */}
          {imageUrl && (
            <div className="rounded-xl overflow-hidden aspect-21/9 mb-12 border border-gray-900 bg-linear-to-b from-[#111] to-black">
              <img
                src={imageUrl}
                alt={altText}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Core Gutenberg Content Body */}
          {post?.content ? (
            <div
              className="prose prose-invert max-w-none text-gray-300 leading-relaxed
                prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-900 prose-h2:pb-3
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:mb-6 prose-p:text-base md:prose-p:text-lg
                prose-a:text-violet-400 prose-a:font-semibold hover:prose-a:text-violet-300 prose-a:underline
                prose-strong:text-white prose-strong:font-bold
                prose-blockquote:border-l-4 prose-blockquote:border-violet-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8 prose-blockquote:text-gray-400
                prose-img:rounded-xl prose-img:border prose-img:border-gray-900
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:mb-2
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            !error && (
              <div className="text-center py-20 text-gray-500 border border-dashed border-gray-900 rounded-xl">
                This log entry is empty. Check back soon for the full report payload.
              </div>
            )
          )}
        </article>
      </div>
    </>
  );
}
