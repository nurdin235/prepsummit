export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/checkout'],
    },
    sitemap: 'https://prepsumit.com/sitemap.xml',
  };
}
