import runner from './_utils';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  const args = await req.json();

  const result = await runner(args);

  return new Response(JSON.stringify(result));
};
