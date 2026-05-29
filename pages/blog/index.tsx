/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";
import { fetchAPI } from "@/lib/api";

export async function getStaticProps() {
  try {
    const data = await fetchAPI(`
      query BlogIndexQuery {
        posts(first: 100) {
          nodes {
            id
            title
            slug
            excerpt
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
      }
    `);

    return {
      props: {
        posts: data?.posts?.nodes || [],
        error: null,
      },
      revalidate: 10,
    };
  } catch (err: any) {
    console.error("Error in getStaticProps for blog index:", err);
    return {
      props: {
        posts: [],
        error: "WordPress connection is waking up or offline. Please refresh in a moment 🐺",
      },
      revalidate: 1,
    };
  }
}

export default function BlogIndex({ posts, error }: any) {
  // Format Date Helper
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Strip HTML Excerpt Helper
  const stripHtml = (htmlString: string) => {
    if (!htmlString) return "";
    return htmlString.replace(/<[^>]*>?/gm, '');
  };

  return (
    <>
      <Head>
        <title>The Shadow Logs — LycanWeb Agency Blog</title>
        <meta name="description" content="Strategic blueprints and expert logs on digital dominance, conversion optimization, and web performance." />
      </Head>

      <div className="bg-black text-white min-h-screen pt-32 pb-24">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center md:text-left">
          <span className="text-violet-500 font-bold uppercase tracking-widest text-sm mb-3 block">
            Intelligence Logs
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 uppercase [&_span]:text-violet-500">
            THE SHADOW <span>LOGS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Strategic engineering blueprints, conversion assault reports, and speed tactics from the frontlines of digital warfare.
          </p>
        </div>

        {/* Offline Alert */}
        {error && (
          <div className="max-w-4xl mx-auto px-6 mb-12">
            <div className="bg-red-950/40 border border-red-500/20 text-red-200 px-6 py-4 rounded-xl text-center backdrop-blur-md">
              <p className="font-semibold text-lg mb-1">⚠️ Connection Alert</p>
              <p className="text-sm opacity-90">{error}</p>
            </div>
          </div>
        )}

        {/* Grid List Section */}
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            !error && (
              <div className="text-center py-24 border border-dashed border-gray-800 rounded-2xl">
                <BookOpen size={48} className="mx-auto text-violet-500/50 mb-4" />
                <h3 className="text-2xl font-bold mb-2">No Reports Published Yet</h3>
                <p className="text-gray-500">Check back soon for active blueprints.</p>
              </div>
            )
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => {
                const imageUrl = post.featuredImage?.node?.sourceUrl;
                const authorName = post.author?.node?.name || "Lycan Staff";
                const dateText = formatDate(post.date);
                const tags = post.tags?.nodes || [];

                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-[#0b0b0b] border border-gray-900 rounded-xl overflow-hidden hover:border-violet-700/40 hover:shadow-2xl hover:shadow-violet-950/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-pointer"
                  >
                    {/* Featured Image or Gradient Cover */}
                    <div className="aspect-video w-full relative overflow-hidden bg-violet-950/10">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={post.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-linear-to-br from-violet-950/40 via-purple-950/20 to-black flex items-center justify-center p-6 border-b border-gray-900">
                          <span className="text-sm text-violet-500 uppercase tracking-widest font-black opacity-30 border border-violet-900/50 px-4 py-2 rounded-full">
                            LYCAN SHADOW
                          </span>
                        </div>
                      )}

                      {/* Floating Category Tag */}
                      {tags.length > 0 && (
                        <span className="absolute top-4 left-4 bg-violet-950/80 backdrop-blur-md border border-violet-600/30 text-violet-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {tags[0].name}
                        </span>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-8 flex flex-col flex-1">
                      {/* Meta info */}
                      <div className="flex items-center gap-6 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-violet-500" />
                          {dateText}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User size={12} className="text-violet-500" />
                          {authorName}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold mb-4 tracking-tight leading-snug group-hover:text-violet-400 transition-colors hover:underline">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                        {stripHtml(post.excerpt)}
                      </p>

                      {/* Action Link */}
                      <div className="pt-4 border-t border-gray-900">
                        <span className="inline-flex items-center gap-2 text-violet-400 group-hover:text-violet-300 font-semibold text-sm transition-all group/link">
                          Access Log
                          <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
