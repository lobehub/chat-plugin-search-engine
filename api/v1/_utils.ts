import { OrganicResults, Result } from '../../src/type';
import { Settings } from './_types';

const BASE_URL = 'https://serpapi.com/search';

const fetchResult = async (args: { query: string }, settings: Settings): Promise<Result> => {
  const apiKey = settings.SERPAPI_API_KEY;
  const showStyle = settings.SHOW_STYLE ?? 'list';

  const { default: querystring } = await import('query-string');

  const params = {
    api_key: apiKey,
    engine: 'google',
    gl: 'cn',
    google_domain: 'google.com',
    hl: 'zh-cn',
    location: 'China',
    q: args.query,
  };
  const query = querystring.stringify(params);

  const res = await fetch(`${BASE_URL}?${query}`);

  const data = await res.json();

  if (data.error) throw data;

  const results = data.organic_results as OrganicResults;

  return {
    search_items: results.map((r) => ({
      content: r.snippet,
      date: r.date,
      displayed_link: r.displayed_link,
      favicon: r.favicon,
      link: r.link,
      source: r.source,
      title: r.title,
    })),
    show_style: showStyle,
  };
};

export default fetchResult;
