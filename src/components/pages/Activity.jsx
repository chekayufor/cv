import React from "react";
import styled from "styled-components";
import { PageContainer, Eyebrow, PageTitle, PageLead } from "../layout/Page";
import { posts, profile } from "../../data/profile";

const Activity = () => (
  <PageContainer>
    <Eyebrow>Fresh off LinkedIn</Eyebrow>
    <PageTitle>Activity</PageTitle>
    <PageLead>Recent posts and updates, linking straight back to the original on LinkedIn.</PageLead>

    {posts.length === 0 ? (
      <Empty>
        <EmptyText>
          Posts from the last two weeks will appear here, each linking back to the original post
          on LinkedIn.
        </EmptyText>
        <EmptyHint>
          To add them, edit the <code>posts</code> array in <code>src/data/profile.js</code> with
          the post date, text and its direct LinkedIn link.
        </EmptyHint>
      </Empty>
    ) : (
      <List>
        {posts.map(post => (
          <Post key={post.url}>
            <PostDate>{post.date}</PostDate>
            <PostText>{post.text}</PostText>
            <PostLink href={post.url} target="_blank" rel="noopener noreferrer">
              View post on LinkedIn ↗
            </PostLink>
          </Post>
        ))}
      </List>
    )}

    <SeeAll href={profile.linkedinActivityUrl} target="_blank" rel="noopener noreferrer">
      See all activity on LinkedIn ↗
    </SeeAll>
  </PageContainer>
);

export default Activity;

const Empty = styled.div`
  background: ${({ theme }) => theme.colors.pinkPale};
  border: 1px dashed ${({ theme }) => theme.colors.pink};
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

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

const Post = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px;
`;

const PostDate = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.inkFaint};
  margin-bottom: 6px;
`;

const PostText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.ink};
  white-space: pre-line;
  margin-bottom: 10px;
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
