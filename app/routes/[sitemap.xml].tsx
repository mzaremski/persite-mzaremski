import type { LoaderFunction } from "@remix-run/node";
import { getPosts } from "~/getPosts";

export const loader: LoaderFunction = () => {
  const baseUrl = process.env.SITE_URL || "https://mzaremski.com";
  const currentDate = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date()).replace(/\//g, '-');

  // Get all blog posts
  const posts = getPosts();

  // console.log(posts)

  // Define static routes
  const staticRoutes = [
    { path: "", priority: "1.0" },
    { path: "freelancer", priority: "0.8" },
    { path: "business", priority: "0.8" },
  ];

  // Generate URLs for static routes
  const staticUrls = staticRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route.path ? `/${route.path}` : ""}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join("");

  // Generate URLs for blog posts
  const postUrls = posts.map(post => `
  <url>
    <loc>${baseUrl}${post.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}${postUrls}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      "encoding": "UTF-8",
    },
  });
};
