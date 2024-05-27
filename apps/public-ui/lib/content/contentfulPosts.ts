import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries({ content_type: 'pageBlogPost' });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries.`);
}

export async function fetchBanner() {
  const res = await client.getEntries({ content_type: 'banner' });
  return res.items[0]?.fields?.text || null;
}

export async function fetchPaths() {
  const res = await client.getEntries({ content_type: 'pageBlogPost' });
  const paths = res.items.map((item) => {
    return {
      params: { id: item.sys.id.toString() },
    };
  });
  return paths;
}

export default { fetchEntries };
