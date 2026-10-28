import { createHash, timingSafeEqual } from 'node:crypto';

export const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

const sha = value => createHash('sha256').update(String(value)).digest();

// Admin password lives in Netlify: Project configuration -> Environment variables -> ADMIN_PASSWORD.
// Returns an error Response, or null if the password is correct.
export const checkAuth = async req => {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return json({ error: 'not_configured' }, 503);
  const given = req.headers.get('x-admin-password') || '';
  if (!timingSafeEqual(sha(given), sha(expected))) {
    // small delay to slow down brute-forcing
    await new Promise(r => setTimeout(r, 800));
    return json({ error: 'unauthorized' }, 401);
  }
  return null;
};
