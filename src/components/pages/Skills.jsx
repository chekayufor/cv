import React from "react";
import styled from "styled-components";
import { PageContainer, ChapterHeader } from "../layout/Page";
import { topSkills, tools } from "../../data/profile";

const Skills = () => (
  <PageContainer>
    <ChapterHeader
      index="04"
      eyebrow="What I bring"
      title="Skills"
      lead="The capabilities and tools I rely on to turn data into decisions."
    />

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
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 14px;
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
`;

const Pill = styled.span`
  background: ${({ featured, theme }) => (featured ? theme.colors.rose : "#ffffff")};
  border: 2px solid ${({ theme }) => theme.colors.navy};
  color: ${({ featured, theme }) => (featured ? "#ffffff" : theme.colors.navy)};
  border-radius: ${({ theme }) => theme.radii.pill};
  box-shadow: ${({ theme }) => theme.shadow.popSm};
  padding: 10px 18px;
  font-size: 13px;
  font-weight: 700;
`;
