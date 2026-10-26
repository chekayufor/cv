import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { fetchPosts } from "../../hooks/usePosts";
import { imgSrc } from "../../utils/images";

// Posts and photos live in Netlify Blobs — no external database.
// The password is the ADMIN_PASSWORD environment variable in the Netlify
// project settings.

const PASS_KEY = "adminPassword";

const api = async (url, options = {}) => {
  const res = await fetch(url, {
    ...options,
    headers: { "x-admin-password": sessionStorage.getItem(PASS_KEY) || "", ...(options.headers || {}) }
  });
  let data = {};
  try {
    data = await res.json();
  } catch (e) {
    /* not json */
  }
  if (!res.ok) {
    const err = new Error(data.error || `Server error (${res.status})`);
    err.status = res.status;
    throw err;
  }
  return data;
};

// Shrink photos in the browser to 1600px — faster uploads and a lighter site
const resizeImage = (file, max = 1600, quality = 0.85) =>
  new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob(b => (b ? resolve(b) : reject(new Error("Could not process the photo"))), "image/jpeg", quality);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(`"${file.name}" is not a supported format (use JPG/PNG/WEBP)`));
    };
    img.src = url;
  });

const today = () =>
  new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const newPost = () => ({
  _id: `post-${Date.now()}`,
  topic: "General",
  title: "New post",
  date: today(),
  excerpt: "",
  text: "",
  linkedinUrl: "",
  img: []
});

const Admin = () => {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [posts, setPosts] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const fileInput = useRef(null);

  const notify = (text, type = "info") => setMessage({ text, type });

  const login = async pass => {
    sessionStorage.setItem(PASS_KEY, pass);
    setBusy(true);
    try {
      await api("/api/login", { method: "POST" });
      setAuthed(true);
      setMessage(null);
      const list = await fetchPosts();
      setPosts(JSON.parse(JSON.stringify(list)));
      setSelectedId(list[0] ? list[0]._id : null);
    } catch (e) {
      sessionStorage.removeItem(PASS_KEY);
      if (e.status === 503) {
        notify(
          "The admin password isn't set up yet. Add an ADMIN_PASSWORD environment variable in Netlify (Project configuration → Environment variables) and reload.",
          "error"
        );
      } else if (e.status === 401) {
        notify("Wrong password", "error");
      } else {
        notify("The admin only works on the deployed Netlify site (or via `netlify dev`). " + e.message, "error");
      }
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    const saved = sessionStorage.getItem(PASS_KEY);
    if (saved) login(saved);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const warn = e => {
      if (dirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  const selected = posts && posts.find(p => p._id === selectedId);
  const topics = posts ? Array.from(new Set(posts.map(p => p.topic || "General"))).sort() : [];

  const update = patch => {
    setPosts(list => list.map(p => (p._id === selectedId ? { ...p, ...patch } : p)));
    setDirty(true);
  };

  const moveImage = (index, delta) => {
    const img = [...selected.img];
    const to = index + delta;
    if (to < 0 || to >= img.length) return;
    [img[index], img[to]] = [img[to], img[index]];
    update({ img });
  };

  const removeImage = index => update({ img: selected.img.filter((_, i) => i !== index) });

  const onUpload = async e => {
    const files = [...e.target.files];
    e.target.value = "";
    if (!files.length) return;
    setBusy(true);
    const added = [];
    try {
      for (let i = 0; i < files.length; i++) {
        notify(`Uploading photo ${i + 1} of ${files.length}…`);
        const blob = await resizeImage(files[i]);
        const { path } = await api("/api/images", {
          method: "POST",
          headers: { "content-type": "image/jpeg" },
          body: blob
        });
        added.push({ path, filename: files[i].name });
      }
      notify(`Uploaded ${added.length} photo(s). Don't forget to press "Save".`, "success");
    } catch (err) {
      notify(err.message, "error");
    } finally {
      if (added.length) update({ img: [...selected.img, ...added] });
      setBusy(false);
    }
  };

  const addPost = () => {
    const p = newPost();
    setPosts(list => [p, ...list]);
    setSelectedId(p._id);
    setDirty(true);
  };

  const deletePost = () => {
    if (!window.confirm(`Delete "${selected.title}"?`)) return;
    const rest = posts.filter(p => p._id !== selectedId);
    setPosts(rest);
    setSelectedId(rest[0] ? rest[0]._id : null);
    setDirty(true);
  };

  const save = async () => {
    setBusy(true);
    try {
      const data = await api("/api/posts", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ posts })
      });
      setPosts(data.posts);
      setDirty(false);
      notify("Saved! The changes are already live on the site.", "success");
    } catch (e) {
      notify("Not saved: " + e.message, "error");
    } finally {
      setBusy(false);
    }
  };

  const logout = () => {
    if (dirty && !window.confirm("You have unsaved changes. Log out anyway?")) return;
    sessionStorage.removeItem(PASS_KEY);
    setAuthed(false);
    setPosts(null);
    setDirty(false);
  };

  if (!authed) {
    return (
      <Page>
        <LoginBox
          onSubmit={e => {
            e.preventDefault();
            login(password);
          }}
        >
          <h4>Admin sign in</h4>
          <label htmlFor="admin-pass">Password</label>
          <input
            id="admin-pass"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Btn type="submit" disabled={busy || !password}>
            {busy ? "Checking…" : "Sign in"}
          </Btn>
          {message && <Msg type={message.type}>{message.text}</Msg>}
        </LoginBox>
      </Page>
    );
  }

  if (!posts) {
    return (
      <Page>
        <Msg>Loading…</Msg>
      </Page>
    );
  }

  return (
    <Page>
      <TopBar>
        <h4>Admin</h4>
        <Spacer />
        {dirty && <Unsaved>Unsaved changes</Unsaved>}
        <Btn onClick={save} disabled={busy || !dirty}>
          Save
        </Btn>
        <BtnLight onClick={logout}>Log out</BtnLight>
      </TopBar>
      {message && <Msg type={message.type}>{message.text}</Msg>}
      <Layout>
        <Sidebar>
          <BtnLight onClick={addPost} style={{ width: "100%" }}>
            + New post
          </BtnLight>
          {topics.map(topic => (
            <div key={topic}>
              <SectionTitle>{topic}</SectionTitle>
              {posts
                .filter(p => (p.topic || "General") === topic)
                .map(p => (
                  <PostItem key={p._id} active={p._id === selectedId} onClick={() => setSelectedId(p._id)}>
                    {p.img && p.img.length > 0 ? (
                      <Thumb src={imgSrc(p.img[0])} alt="" />
                    ) : (
                      <ThumbPlaceholder />
                    )}
                    <span>{p.title}</span>
                  </PostItem>
                ))}
            </div>
          ))}
        </Sidebar>

        {selected ? (
          <Editor>
            <Row>
              <Field style={{ flex: 2 }}>
                <label htmlFor="f-title">Title</label>
                <input id="f-title" value={selected.title || ""} onChange={e => update({ title: e.target.value })} />
              </Field>
              <Field style={{ flex: 1 }}>
                <label htmlFor="f-topic">Topic</label>
                <input
                  id="f-topic"
                  list="topic-options"
                  value={selected.topic || ""}
                  onChange={e => update({ topic: e.target.value })}
                />
                <datalist id="topic-options">
                  {topics.map(t => (
                    <option key={t} value={t} />
                  ))}
                </datalist>
              </Field>
              <Field style={{ flex: 1 }}>
                <label htmlFor="f-date">Date</label>
                <input id="f-date" value={selected.date || ""} onChange={e => update({ date: e.target.value })} />
              </Field>
            </Row>

            <h5>Photos ({selected.img ? selected.img.length : 0})</h5>
            <Gallery>
              {(selected.img || []).map((im, i) => (
                <Photo key={im.path + i}>
                  <img src={imgSrc(im)} alt="" />
                  {i === 0 && <MainBadge>cover</MainBadge>}
                  <PhotoBar>
                    <button type="button" title="Move left" onClick={() => moveImage(i, -1)} disabled={i === 0}>
                      ◀
                    </button>
                    <button type="button" title="Remove" onClick={() => removeImage(i)}>
                      ✕
                    </button>
                    <button
                      type="button"
                      title="Move right"
                      onClick={() => moveImage(i, 1)}
                      disabled={i === selected.img.length - 1}
                    >
                      ▶
                    </button>
                  </PhotoBar>
                </Photo>
              ))}
              <AddPhoto type="button" onClick={() => fileInput.current.click()} disabled={busy}>
                <span>+</span>Add photo
              </AddPhoto>
              <input
                ref={fileInput}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                hidden
                onChange={onUpload}
              />
            </Gallery>

            <Field>
              <label htmlFor="f-excerpt">Excerpt (shown in the list)</label>
              <textarea
                id="f-excerpt"
                rows={3}
                value={selected.excerpt || ""}
                onChange={e => update({ excerpt: e.target.value })}
              />
            </Field>

            <Field>
              <label htmlFor="f-text">Full text</label>
              <textarea
                id="f-text"
                rows={10}
                value={selected.text || ""}
                onChange={e => update({ text: e.target.value })}
              />
            </Field>

            <Field>
              <label htmlFor="f-linkedin">LinkedIn link (optional)</label>
              <input
                id="f-linkedin"
                type="url"
                placeholder="https://www.linkedin.com/posts/..."
                value={selected.linkedinUrl || ""}
                onChange={e => update({ linkedinUrl: e.target.value })}
              />
            </Field>

            <Row style={{ marginTop: 24 }}>
              <Btn onClick={save} disabled={busy || !dirty}>
                Save
              </Btn>
              <a href="/#/activity" target="_blank" rel="noopener noreferrer">
                Open on the site
              </a>
              <Spacer />
              <BtnDanger onClick={deletePost}>Delete post</BtnDanger>
            </Row>
          </Editor>
        ) : (
          <Editor>
            <p>Select a post on the left, or create a new one.</p>
          </Editor>
        )}
      </Layout>
    </Page>
  );
};

export default Admin;

const Page = styled.div`
  padding: 32px 16px 40px;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.ink};
  h4 {
    font-size: 1.4rem;
    margin: 0;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.navy};
  }
  h5 {
    font-size: 1rem;
    margin: 22px 0 10px;
    color: ${({ theme }) => theme.colors.navy};
  }
  input:not([type="file"]),
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    padding: 9px 11px;
    margin: 0;
    background: #fff;
    font-size: 0.95rem;
    font-family: inherit;
  }
  textarea {
    resize: vertical;
  }
  label {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.inkSoft};
    display: block;
    margin-bottom: 4px;
  }
`;

const LoginBox = styled.form`
  max-width: 380px;
  margin: 60px auto;
  background: #fff;
  padding: 26px;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto 12px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Unsaved = styled.span`
  color: ${({ theme }) => theme.colors.roseDeep};
  font-size: 0.85rem;
  font-weight: 600;
`;

const Btn = styled.button`
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 10px 18px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const BtnLight = styled(Btn)`
  background: #fff;
  color: ${({ theme }) => theme.colors.navy};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const BtnDanger = styled(Btn)`
  background: #b23a3a;
`;

const Msg = styled.div`
  max-width: 1300px;
  margin: 0 auto 12px;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  background: ${p => (p.type === "error" ? "#fdecea" : p.type === "success" ? "#e8f5ea" : "#eef1f7")};
  color: ${p => (p.type === "error" ? "#9c3030" : p.type === "success" ? "#1e6b38" : "#2a3350")};
`;

const Layout = styled.div`
  display: grid;
  gap: 16px;
  max-width: 1300px;
  margin: 0 auto;
  @media (min-width: 900px) {
    grid-template-columns: 300px 1fr;
  }
`;

const Sidebar = styled.div`
  background: #fff;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 12px;
  align-self: start;
  max-height: 80vh;
  overflow-y: auto;
  @media (max-width: 899px) {
    max-height: 320px;
  }
`;

const SectionTitle = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.inkFaint};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 14px 6px 6px;
`;

const PostItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  border: none;
  border-radius: 8px;
  padding: 7px 6px;
  cursor: pointer;
  background: ${p => (p.active ? p.theme.colors.pinkPale : "transparent")};
  font-weight: ${p => (p.active ? 600 : 400)};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.ink};
  &:hover {
    background: ${({ theme }) => theme.colors.pinkPale};
  }
`;

const Thumb = styled.img`
  width: 40px;
  height: 32px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
`;

const ThumbPlaceholder = styled.div`
  width: 40px;
  height: 32px;
  border-radius: 4px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.pinkPale};
`;

const Editor = styled.div`
  background: #fff;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 16px;
  @media (min-width: 900px) {
    padding: 24px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

const Field = styled.div`
  margin-top: 12px;
  min-width: 200px;
  flex: 1;
`;

const Gallery = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
`;

const Photo = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.pinkPale};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MainBadge = styled.span`
  position: absolute;
  top: 6px;
  left: 6px;
  background: ${({ theme }) => theme.colors.roseDeep};
  color: #fff;
  font-size: 0.65rem;
  padding: 2px 6px;
  border-radius: 4px;
`;

const PhotoBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background: rgba(20, 30, 54, 0.6);
  button {
    flex: 1;
    background: none;
    border: none;
    color: #fff;
    padding: 6px 0;
    cursor: pointer;
    font-size: 0.9rem;
    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.2);
    }
    &:disabled {
      opacity: 0.3;
      cursor: default;
    }
  }
`;

const AddPhoto = styled.button`
  aspect-ratio: 4 / 3;
  border: 2px dashed ${({ theme }) => theme.colors.pink};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.roseDeep};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 1.8rem;
    line-height: 1;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
