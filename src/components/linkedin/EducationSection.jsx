import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { education } from "../../data/profile";

const initials = name =>
  name
    .split(" ")
    .map(word => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const EducationSection = () => (
  <Section id="education" title="Education">
    {education.map(entry => (
      <Entry key={entry.school + entry.degree}>
        <Logo>
          {entry.logo ? (
            <img src={entry.logo} alt={entry.school} />
          ) : (
            <Placeholder>{initials(entry.school)}</Placeholder>
          )}
        </Logo>
        <Body>
          <School>{entry.school}</School>
          <Degree>{entry.degree}</Degree>
          <Period>{entry.period}</Period>
        </Body>
      </Entry>
    ))}
  </Section>
);

export default EducationSection;

const Entry = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #e0dfdc;
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  &:first-child {
    padding-top: 0;
  }
`;

const Logo = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #e0dfdc;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a66c2;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
`;

const Body = styled.div`
  flex: 1;
  min-width: 0;
`;

const School = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
`;

const Degree = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
  margin-top: 2px;
`;

const Period = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 2px;
`;
