import React from "react";
import styled from "styled-components";
import { profile } from "../../data/profile";

const Footer = () => (
  <Wrap>
    <Row>
      <a href={`mailto:${profile.email}`}>Email</a>
      <Dot>·</Dot>
      <a href={`tel:${profile.phone}`}>Call</a>
      <Dot>·</Dot>
      <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
        LinkedIn ↗
      </a>
    </Row>
    <Copy>
      &copy; {new Date().getFullYear()} {profile.name}
    </Copy>
  </Wrap>
);

export default Footer;

const Wrap = styled.footer`
  text-align: center;
  padding: 32px 20px 90px;
  @media (min-width: 860px) {
    padding: 32px 20px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 8px;
  a {
    color: ${({ theme }) => theme.colors.roseDeep};
    font-weight: 600;
    font-size: 13px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Dot = styled.span`
  color: ${({ theme }) => theme.colors.inkFaint};
`;

const Copy = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.inkFaint};
`;
