import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// "./cover.png" in a post folder → "/blog/<slug>/cover.png" (copied there at build)
function resolveAsset(slug, src) {
  if (!src) return null;
  if (/^(https?:)?\/\//.test(src) || src.startsWith("/")) return src;
  return `/blog/${slug}/${src.replace(/^\.\//, "")}`;
}

function readPost(slug) {
  const file = path.join(BLOG_DIR, slug, "index.md");
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const date = data.date ? new Date(data.date) : new Date();
  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: data.title ?? slug,
    date: date.toISOString(),
    description: data.description ?? "",
    thumbnail: resolveAsset(slug, data.thumbnail),
    tags: Array.isArray(data.tags) ? data.tags : [],
    draft: data.draft === true,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    content,
  };
}

const isPublished = (post) =>
  post && (!post.draft || process.env.NODE_ENV === "development");

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .map(readPost)
    .filter(isPublished)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPost(slug) {
  const post = readPost(slug);
  if (!isPublished(post)) return null;

  // Point relative image links (![](./img.png)) at the copied asset path.
  const body = post.content.replace(
    /(!\[[^\]]*\]\()(\.\/)?([^)\s/][^)\s]*)/g,
    (match, open, _dot, src) =>
      /^(https?:)?\/\//.test(src) ? match : open + resolveAsset(slug, src),
  );

  const html = String(
    await remark().use(remarkGfm).use(remarkHtml).process(body),
  );
  return { ...post, html };
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
