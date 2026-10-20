import React from "react";
import styled from "styled-components";
import { profile } from "../../data/profile";

const TopNav = () => (
  <Bar>
    <Inner>
      <Brand href="#top">
        <Badge>in</Badge>
        <BrandName>{profile.name}</BrandName>
      </Brand>
      <Links>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#activity">Activity</NavLink>
      </Links>
      <CtaLink href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
        View on LinkedIn
      </CtaLink>
    </Inner>
  </Bar>
);

export default TopNav;

const Bar = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1px solid #e0dfdc;
`;

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: #0a66c2;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
`;

const BrandName = styled.span`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
  font-size: 16px;
  white-space: nowrap;
  display: none;
  @media (min-width: 640px) {
    display: inline;
  }
`;

const Links = styled.nav`
  display: none;
  gap: 20px;
  flex: 1;
  @media (min-width: 760px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  &:hover {
    color: #0a66c2;
  }
`;

const CtaLink = styled.a`
  margin-left: auto;
  border: 1px solid #0a66c2;
  color: #0a66c2;
  background: #ffffff;
  border-radius: 16px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    background: rgba(10, 102, 194, 0.08);
  }
`;
