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
  ];
}
