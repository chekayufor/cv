import React from "react";
import styled from "styled-components";
import { profile } from "../../data/profile";

const ProfileHeader = () => (
  <Card id="top">
    <Banner />
    <Content>
      <Avatar src={profile.avatar} alt={profile.name} />
      <Name>{profile.name}</Name>
      <Headline>{profile.headline}</Headline>
      <Location>{profile.location}</Location>
      <Actions>
        <Primary href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
          View full profile on LinkedIn ↗
        </Primary>
        <Secondary href={`mailto:${profile.email}`}>Contact</Secondary>
      </Actions>
    </Content>
  </Card>
);

export default ProfileHeader;

const Card = styled.section`
  background: #ffffff;
  border: 1px solid #e0dfdc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
`;

const Banner = styled.div`
  height: 140px;
  background: linear-gradient(135deg, #0a66c2 0%, #378fe9 50%, #a1cafc 100%);
  @media (min-width: 640px) {
    height: 200px;
  }
`;

const Content = styled.div`
  padding: 0 24px 24px;
  position: relative;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  margin-top: -60px;
  background: #ffffff;
  @media (min-width: 640px) {
    width: 152px;
    height: 152px;
    margin-top: -76px;
  }
`;

const Name = styled.h1`
  margin-top: 12px;
  font-size: 24px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
`;

const Headline = styled.p`
  margin-top: 4px;
  font-size: 16px;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.9);
  max-width: 640px;
`;

const Location = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

const Primary = styled.a`
  background: #0a66c2;
  color: #ffffff;
  border-radius: 20px;
  padding: 8px 20px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    background: #004182;
  }
`;

const Secondary = styled.a`
  border: 1px solid rgba(0, 0, 0, 0.6);
  color: rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  padding: 8px 20px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
