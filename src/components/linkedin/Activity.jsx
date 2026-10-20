import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { posts, profile } from "../../data/profile";

const Activity = () => (
  <Section id="activity" title="Activity">
    {posts.length === 0 ? (
      <Empty>
        <EmptyText>
          Posts from the last two weeks will appear here, each linking back
          to the original post on LinkedIn.
        </EmptyText>
        <EmptyHint>
          To add them, edit the <code>posts</code> array in{" "}
          <code>src/data/profile.js</code> with the post date, text and its
          direct LinkedIn link.
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
    <SeeAll
      href={profile.linkedinActivityUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      See all activity on LinkedIn ↗
    </SeeAll>
  </Section>
);

export default Activity;

const Empty = styled.div`
  background: #f3f2ef;
  border: 1px dashed #c7c6c4;
  border-radius: 8px;
  padding: 20px;
`;

const EmptyText = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 8px;
`;

const EmptyHint = styled.p`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.5;
  code {
    background: #ffffff;
    border: 1px solid #e0dfdc;
    border-radius: 4px;
    padding: 1px 5px;
    font-size: 12px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Post = styled.div`
  border: 1px solid #e0dfdc;
  border-radius: 8px;
  padding: 16px;
`;

const PostDate = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 6px;
`;

const PostText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  white-space: pre-line;
  margin-bottom: 10px;
`;

const PostLink = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: #0a66c2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SeeAll = styled.a`
  display: inline-block;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #0a66c2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
