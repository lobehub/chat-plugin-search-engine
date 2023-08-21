import { OrganicResults, Result } from '../../src/type';

const BASE_URL = 'https://serpapi.com/search';

const API_KEY = process.env.SERPAI_API_KEY;

const fetchResult = async ({ keywords }: { keywords: string }): Promise<Result> => {
  const params = {
    api_key: API_KEY,
    engine: 'google',
    gl: 'cn',
    google_domain: 'google.com',
    hl: 'zh-cn',
    location: 'China',
    q: keywords,
  };

  const { default: querystring } = await import('query-string');

  const query = querystring.stringify(params);

  const res = await fetch(`${BASE_URL}?${query}`);

  const data = await res.json();

  const results = data.organic_results as OrganicResults;

  return results.map((r) => ({
    content: r.snippet,
    date: r.date,
    displayed_link: r.displayed_link,
    favicon: r.favicon,
    link: r.link,
    source: r.source,
    title: r.title,
  }));
};

export default fetchResult;
