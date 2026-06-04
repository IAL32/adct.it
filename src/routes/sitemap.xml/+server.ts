import type { RequestHandler } from './$types';

export const prerender = true;

const XML = (hostname: string, date: Date) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
  <loc>${hostname}</loc>
  <lastmod>${date.toISOString()}</lastmod>
</url>
</urlset>
`;

export const GET: RequestHandler = async () => {
	return new Response(XML('https://adct.it', new Date()), {
		headers: { 'content-type': 'application/xml' }
	});
};
