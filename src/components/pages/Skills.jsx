import React from "react";
import styled from "styled-components";
import { PageContainer, Eyebrow, PageTitle, PageLead } from "../layout/Page";
import { topSkills, tools } from "../../data/profile";

const Skills = () => (
  <PageContainer>
    <Eyebrow>What I bring</Eyebrow>
    <PageTitle>Skills</PageTitle>
    <PageLead>The capabilities and tools I rely on to turn data into decisions.</PageLead>

    <SectionTitle>Top Skills</SectionTitle>
    <Pills>
      {topSkills.map(skill => (
        <Pill key={skill} featured>
          {skill}
        </Pill>
      ))}
    </Pills>

    <SectionTitle>Tools &amp; Platforms</SectionTitle>
    <Pills>
      {tools.map(tool => (
        <Pill key={tool}>{tool}</Pill>
      ))}
    </Pills>
  </PageContainer>
);

export default Skills;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 14px;
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
`;

const Pill = styled.span`
  background: ${({ featured, theme }) => (featured ? theme.colors.gradient : "#ffffff")};
  border: 1px solid ${({ featured, theme }) => (featured ? "transparent" : theme.colors.border)};
  color: ${({ featured, theme }) => (featured ? "#ffffff" : theme.colors.roseDeep)};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 10px 18px;
  font-size: 13px;
  font-weight: 600;
`;
