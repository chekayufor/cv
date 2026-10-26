import { useEffect, useState } from "react";
import { posts as fallbackPosts } from "../data/profile";

// Posts are stored in Netlify Blobs and managed from /admin. If the API is
// unreachable (e.g. running `yarn start` without `netlify dev`) or nothing
// has been published yet, the site falls back to the static list in
// src/data/profile.js.
export const fetchPosts = async () => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const res = await fetch("/api/posts", { cache: "no-store", signal: controller.signal });
    if (!res.ok) return fallbackPosts;
    const data = await res.json();
    return Array.isArray(data.posts) && data.posts.length ? data.posts : fallbackPosts;
  } catch (err) {
    return fallbackPosts;
  } finally {
    clearTimeout(timer);
  }
};

const usePosts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let active = true;
    fetchPosts().then(list => {
      if (active) setPosts(list);
    });
    return () => {
      active = false;
    };
  }, []);

  return posts;
};

export default usePosts;
