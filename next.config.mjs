import { copyBlogAssets } from "./scripts/copy-blog-assets.mjs";

// Copy blog thumbnails/images from content/blog into public/blog on every dev/build.
copyBlogAssets();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

export default nextConfig;
