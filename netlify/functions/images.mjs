import { getStore } from '@netlify/blobs';
import { randomBytes } from 'node:crypto';
import { checkAuth, json } from '../lib/auth.mjs';

// POST /api/images — upload a photo (request body = raw image bytes),
//                     responds with { path: '/img/<name>' }
const TYPES = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };
const MAX_BYTES = 5 * 1024 * 1024;

export default async req => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  const denied = await checkAuth(req);
  if (denied) return denied;

  const contentType = (req.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
  const ext = TYPES[contentType];
  if (!ext) return json({ error: 'Only JPG, PNG and WEBP are supported' }, 415);

  const data = await req.arrayBuffer();
  if (!data.byteLength) return json({ error: 'Empty file' }, 400);
  if (data.byteLength > MAX_BYTES) return json({ error: 'File is larger than 5 MB' }, 413);

  const key = `${Date.now()}-${randomBytes(4).toString('hex')}.${ext}`;
  const store = getStore({ name: 'images', consistency: 'strong' });
  await store.set(key, data, { metadata: { contentType } });
  return json({ path: `/img/${key}` });
};

export const config = { path: '/api/images' };
