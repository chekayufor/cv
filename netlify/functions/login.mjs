import { checkAuth, json } from '../lib/auth.mjs';

// POST /api/login — check the admin password
export default async req => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  const denied = await checkAuth(req);
  return denied || json({ ok: true });
};

export const config = { path: '/api/login' };
