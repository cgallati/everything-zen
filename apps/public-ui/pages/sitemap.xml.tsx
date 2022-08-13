import React from 'react';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://ezsailingcharters.com';

  const paths = [
    '',
    'charters',
    'special-occasions',
    'story',
    'faq',
    'catering',
  ];

  const urls = paths.map(
    (path) =>
      `<url>
        <loc>${BASE_URL}/${path}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>`
  );

  // Important that there isn't a newline or space before XML declaration tag
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${urls.join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
