export const dynamic = "force-static";

export default function robot() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
  };
}
