// Copies every non-Markdown file in content/blog/<slug>/ (thumbnails, inline
// images) to public/blog/<slug>/ so the static export can serve them.
// public/blog/ is generated — never edit it by hand.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "content", "blog");
const DEST = path.join(root, "public", "blog");

export function copyBlogAssets() {
  fs.rmSync(DEST, { recursive: true, force: true });
  if (!fs.existsSync(SRC)) return;

  for (const slug of fs.readdirSync(SRC)) {
    const dir = path.join(SRC, slug);
    if (!fs.statSync(dir).isDirectory()) continue;

    for (const file of fs.readdirSync(dir)) {
      if (file.endsWith(".md") || file.startsWith(".")) continue;
      const from = path.join(dir, file);
      if (!fs.statSync(from).isFile()) continue;
      fs.mkdirSync(path.join(DEST, slug), { recursive: true });
      fs.copyFileSync(from, path.join(DEST, slug, file));
    }
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  copyBlogAssets();
  console.log("Blog assets copied to public/blog/");
}
