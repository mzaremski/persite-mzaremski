import persiteData from "persite-data";

interface MetaFunction {
  title: string;
  description: string;
  image?: string;
  url?: string;
  author?: string;
  siteName?: string;
  type?: string;
  locale?: string;
  twitterUsername?: string;
}

export function generateMeta({
  title,
  description,
  image,
  url,
  siteName,
  type = 'website',
  locale = 'en_US',
}: MetaFunction) {
  return [
    { title },
    { name: 'description', content: description },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'UTF-8' },
    { name: 'author', content: persiteData.seo.twitterUsername },

    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:locale', content: locale },
    ...(siteName ? [{ property: 'og:site_name', content: siteName }] : []),
    ...(persiteData.seo.twitterUsername ? [
      { name: 'twitter:site', content: `@${persiteData.seo.twitterUsername}` },
      { name: 'twitter:creator', content: `@${persiteData.seo.twitterUsername}` }
    ] : []),
    ...(url ? [
      { property: 'og:url', content: url },
      { name: 'twitter:url', content: url },
    ] : []),
    ...(image ? [
      { property: 'og:image', content: image },
      { name: 'twitter:image', content: image },
      { property: 'og:image:alt', content: title }
    ] : []),
  ];
}
