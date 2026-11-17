import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getAllPosts().map((post) => ({ slug: post.slug }));
  // output: "export" refuses an empty list; a placeholder 404s until the first post exists.
  return posts.length ? posts : [{ slug: "_empty" }];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = `${post.title} | Animux Blog`;
  return {
    title,
    description: post.description,
    openGraph: {
      type: "article",
      title,
      description: post.description,
      url: `https://animux.dev/blog/${slug}`,
      siteName: "Animux | Aminul Islam",
      publishedTime: post.date,
      tags: post.tags,
      images: post.thumbnail ? [{ url: post.thumbnail, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 pt-32 pb-24 md:pt-40">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-signal"
      >
        <span aria-hidden>←</span> All posts
      </Link>

      <header className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
          {post.draft && (
            <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
              Draft — not published
            </span>
          )}
        </div>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          {post.title}
        </h1>
        {post.description && (
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {post.description}
          </p>
        )}
        {post.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-emerald-500/30 px-2.5 py-0.5 text-xs text-emerald-700 dark:border-mint/20 dark:text-mint"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt=""
          className="mb-12 aspect-[1200/630] w-full rounded-2xl border border-zinc-200 object-cover dark:border-mint/10"
        />
      )}

      <article
        className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-emerald-600 dark:prose-a:text-signal prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-mint/10 prose-pre:bg-ink prose-pre:whitespace-pre-wrap prose-img:rounded-xl prose-blockquote:border-l-emerald-500"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </main>
  );
}
