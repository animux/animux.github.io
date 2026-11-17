import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import { SectionLabel } from "@/components/motion";

export const metadata = {
  title: "Blog | Animux",
  description:
    "Notes on web development, design and building products by Aminul Islam (Animux).",
  openGraph: {
    title: "Blog | Animux",
    description:
      "Notes on web development, design and building products by Aminul Islam (Animux).",
    url: "https://animux.dev/blog",
    siteName: "Animux | Aminul Islam",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-6xl px-4 pt-32 pb-24 md:pt-40">
      <SectionLabel index="01">Blog</SectionLabel>
      <h1 className="mb-12 text-4xl font-bold sm:text-5xl md:mb-16 md:text-7xl">
        Writing &amp; notes
      </h1>

      {posts.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">
          No posts yet. Check back soon.
        </p>
      ) : (
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-mint/10 dark:bg-ink-800 dark:hover:border-signal/50"
    >
      <div className="aspect-[1200/630] overflow-hidden bg-ink">
        {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
          {post.draft && (
            <span className="rounded bg-amber-500/15 px-1.5 py-0.5 font-semibold text-amber-600 dark:text-amber-400">
              Draft
            </span>
          )}
        </div>
        <h2 className="text-xl font-bold leading-snug group-hover:text-emerald-600 dark:group-hover:text-signal">
          {post.title}
        </h2>
        {post.description && (
          <p className="line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
            {post.description}
          </p>
        )}
        {post.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
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
      </div>
    </Link>
  );
}
