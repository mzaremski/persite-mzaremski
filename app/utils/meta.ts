interface MetaFunction {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function generateMeta({
  title = 'Default Title',
  description = 'Default description for the page',
  image,
  url,
}: MetaFunction) {
  const meta = [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
  ];

  if (url) {
    meta.push(
      { property: 'og:url', content: url },
      { property: 'twitter:url', content: url }
    );
  }

  if (image) {
    meta.push(
      { property: 'og:image', content: image },
      { property: 'twitter:image', content: image }
    );
  }

  return meta;
}
