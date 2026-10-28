import { getStore } from '@netlify/blobs';
import { checkAuth, json } from '../lib/auth.mjs';

// GET /api/posts — list of posts (null if nothing saved yet — the site then
//                  falls back to the `posts` array in src/data/profile.js)
// PUT /api/posts — save the full list of posts (admin password required)

const TEXT_FIELDS = ['topic', 'title', 'excerpt', 'text', 'date', 'linkedinUrl'];
const IMG_PATH = /^\/(img)\/[\w\-./%]+\.(jpe?g|png|webp|gif)$/i;

const clean = (post, index) => {
  if (!post || typeof post !== 'object') throw new Error(`Post #${index + 1}: invalid format`);
  const _id = String(post._id || '').trim();
  if (!/^[\w-]{1,80}$/.test(_id)) throw new Error(`Post #${index + 1}: invalid id`);
  const out = { _id };
  for (const f of TEXT_FIELDS) {
    if (post[f] !== undefined && post[f] !== null) {
      out[f] = String(post[f]).slice(0, f === 'text' ? 20000 : f === 'excerpt' ? 400 : 200);
    }
  }
  if (!out.title || !out.title.trim()) throw new Error(`Post #${index + 1}: needs a title`);
  if (!out.topic || !out.topic.trim()) out.topic = 'General';
  out.img = (Array.isArray(post.img) ? post.img : [])
    .map(i => (typeof i === 'string' ? i : i && i.path))
    .filter(p => typeof p === 'string' && IMG_PATH.test(p) && !p.includes('..'))
    .slice(0, 10)
    .map(path => ({ path, filename: path.split('/').pop() }));
  return out;
};

export default async req => {
  const store = getStore({ name: 'content', consistency: 'strong' });

  if (req.method === 'GET') {
    const posts = await store.get('posts', { type: 'json' });
    return json({ posts: posts || null });
  }

  if (req.method === 'PUT') {
    const denied = await checkAuth(req);
    if (denied) return denied;
    let body;
    try {
      body = await req.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400);
    }
    if (!Array.isArray(body.posts) || body.posts.length > 500) {
      return json({ error: 'Expected a list of posts' }, 400);
    }
    let posts;
    try {
      posts = body.posts.map(clean);
    } catch (e) {
      return json({ error: e.message }, 400);
    }
    const ids = new Set(posts.map(p => p._id));
    if (ids.size !== posts.length) return json({ error: 'Duplicate post ids' }, 400);
    await store.setJSON('posts', posts);
    return json({ ok: true, posts });
  }

  return json({ error: 'Method not allowed' }, 405);
};

export const config = { path: '/api/posts' };
