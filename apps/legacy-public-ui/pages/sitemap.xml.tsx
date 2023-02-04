const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://ezsailingcharters.com';

  // Only added base URL and paths with content
  const paths = [
    ['', '2023-01-01'],
    ['charters', '2023-01-01'],
    ['special-occasions', '2023-01-01'],
    ['story', '2023-01-01'],
    ['faq', '2023-01-01'],
    ['catering', '2023-01-01'],
    ['reserve', new Date().toISOString()],
  ];

  const urls = paths.map(
    (path) =>
      `<url>
        <loc>${BASE_URL}/${path[0]}</loc>
        <lastmod>${path[1]}</lastmod>
      </url>`
  );

  // Important that there isn't a newline or space before XML declaration tag
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.gsitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
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
