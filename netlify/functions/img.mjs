import { getStore } from '@netlify/blobs';

// GET /img/<name> — serves a photo uploaded through the admin
export default async (req, context) => {
  const key = context.params.key || '';
  if (!/^\d+-[0-9a-f]{8}\.(jpg|png|webp)$/.test(key)) return new Response('Not found', { status: 404 });

  const store = getStore({ name: 'images' });
  const entry = await store.getWithMetadata(key, { type: 'arrayBuffer' });
  if (!entry) return new Response('Not found', { status: 404 });

  return new Response(entry.data, {
    headers: {
      'content-type': (entry.metadata && entry.metadata.contentType) || 'image/jpeg',
      // the filename is unique, so this can be cached forever
      'cache-control': 'public, max-age=31536000, immutable',
    },
  });
};

export const config = { path: '/img/:key' };
