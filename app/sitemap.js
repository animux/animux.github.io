import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://animux.dev",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://acme.com/tools/password-generator",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://animux.dev/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getAllPosts()
      .filter((post) => !post.draft)
      .map((post) => ({
        url: `https://animux.dev/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
      })),
  ];
}
