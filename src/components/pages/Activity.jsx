import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { PageContainer, ChapterHeader } from "../layout/Page";
import { profile } from "../../data/profile";
import usePosts from "../../hooks/usePosts";
import { imgSrc } from "../../utils/images";

const Activity = () => {
  const posts = usePosts();
  const [topic, setTopic] = useState("All");
  const [openId, setOpenId] = useState(null);

  const topics = useMemo(() => {
    if (!posts) return ["All"];
    return ["All", ...Array.from(new Set(posts.map(p => p.topic || "General")))];
  }, [posts]);

  const visible = useMemo(() => {
    if (!posts) return [];
    if (topic === "All") return posts;
    return posts.filter(p => (p.topic || "General") === topic);
  }, [posts, topic]);

  return (
    <PageContainer>
      <ChapterHeader
        index="05"
        eyebrow="Fresh thoughts"
        title="Activity"
        lead="Posts on digital analytics, AI and product — straight from me, by topic."
      />

      {posts === null ? (
        <Loading>Loading posts…</Loading>
      ) : posts.length === 0 ? (
        <Empty>
          <EmptyText>No posts yet — new ones will show up here as soon as they're published.</EmptyText>
          <EmptyHint>
            Posts are added from <code>/admin</code>.
          </EmptyHint>
        </Empty>
      ) : (
        <>
          {topics.length > 2 && (
            <Topics>
              {topics.map(t => (
                <TopicPill key={t} active={t === topic} onClick={() => setTopic(t)}>
                  {t}
                </TopicPill>
              ))}
            </Topics>
          )}

          <List>
            {visible.map(post => {
              const isOpen = openId === post._id;
              return (
                <Post key={post._id}>
                  {post.img && post.img.length > 0 && (
                    <CoverFrame>
                      <CoverImg src={imgSrc(post.img[0])} alt="" />
                    </CoverFrame>
                  )}
                  <Body>
                    <Meta>
                      <TopicTag>{post.topic || "General"}</TopicTag>
                      {post.date && <PostDate>{post.date}</PostDate>}
                    </Meta>
                    <PostTitle>{post.title}</PostTitle>
                    <PostText>{isOpen ? post.text || post.excerpt : post.excerpt || post.text}</PostText>
                    <Actions>
                      {post.text && post.text !== post.excerpt && (
                        <TextButton onClick={() => setOpenId(isOpen ? null : post._id)}>
                          {isOpen ? "Show less" : "Read more"}
                        </TextButton>
                      )}
                      {post.linkedinUrl && (
                        <PostLink href={post.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          View on LinkedIn ↗
                        </PostLink>
                      )}
                    </Actions>
                  </Body>
                </Post>
              );
            })}
          </List>
        </>
      )}

      <SeeAll href={profile.linkedinActivityUrl} target="_blank" rel="noopener noreferrer">
        See all activity on LinkedIn ↗
      </SeeAll>
    </PageContainer>
  );
};

export default Activity;

const Loading = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-bottom: 20px;
`;

const Empty = styled.div`
  background: ${({ theme }) => theme.colors.pinkPale};
  border: 2px dashed ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 22px;
  margin-bottom: 20px;
`;

const EmptyText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 10px;
  line-height: 1.5;
`;

const EmptyHint = styled.p`
  font-size: 12.5px;
  color: ${({ theme }) => theme.colors.inkSoft};
  line-height: 1.5;
  code {
    background: #ffffff;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    padding: 1px 5px;
    font-size: 11.5px;
  }
`;

const Topics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const TopicPill = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.navy};
  background: ${({ theme, active }) => (active ? theme.colors.rose : "#ffffff")};
  color: ${({ theme, active }) => (active ? "#ffffff" : theme.colors.navy)};
  border-radius: ${({ theme }) => theme.radii.pill};
  box-shadow: ${({ theme }) => theme.shadow.popSm};
  padding: 7px 16px;
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const Post = styled.div`
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadow.pop};
  overflow: hidden;
`;

const CoverFrame = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (min-width: 560px) {
    aspect-ratio: 1 / 1;
  }
`;

const CoverImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Body = styled.div`
  padding: 16px;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const TopicTag = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.roseDeep};
`;

const PostDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.inkFaint};
`;

const PostTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 8px;
`;

const PostText = styled.p`
  font-size: 14px;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.inkSoft};
  white-space: pre-line;
  margin-bottom: 10px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TextButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.roseDeep};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const PostLink = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.roseDeep};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SeeAll = styled.a`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.roseDeep};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
