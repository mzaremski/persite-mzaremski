import persiteData from "PERSITE_SOURCE";

interface MetaFunction {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
}

export function generateMetaTags({
  title,
  description,
  image = '/og',
  type = 'website',
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
    { property: 'og:locale', content: persiteData.seo.locale },
    
    // siteName
    // og:title might be "My Blog Post About Coding"
    // og:site_name would be "Marcin Zaremski's Blog"
    { property: 'og:site_name', content: persiteData.mainPageTitle },
    ...(persiteData.seo.twitterUsername ? [
      { name: 'twitter:site', content: `@${persiteData.seo.twitterUsername}` },
      { name: 'twitter:creator', content: `@${persiteData.seo.twitterUsername}` }
    ] : []),
    ...(image ? [
      { property: 'og:image', content: image },
      { name: 'twitter:image', content: image },
      { property: 'og:image:alt', content: title }
    ] : []),
  ];
}
