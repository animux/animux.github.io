// Usage: npm run new-post "My Post Title"
// Creates content/blog/<slug>/index.md. Drop the thumbnail into the same folder.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Usage: npm run new-post "My Post Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const dir = path.join(root, "content", "blog", slug);
if (fs.existsSync(dir)) {
  console.error(`A post already exists at content/blog/${slug}/`);
  process.exit(1);
}

const now = new Date();
const today = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, "0"),
  String(now.getDate()).padStart(2, "0"),
].join("-");
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(
  path.join(dir, "index.md"),
  `---
title: ${JSON.stringify(title)}
date: ${today}
description: ""
thumbnail: ./thumbnail.jpg
tags: []
draft: false
---

Start writing here.
`,
);

console.log(`Created content/blog/${slug}/index.md`);
console.log(`Add your thumbnail as content/blog/${slug}/thumbnail.jpg`);
