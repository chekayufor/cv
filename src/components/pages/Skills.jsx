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
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.roseDeep};
  margin-bottom: 18px;
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
`;

const Pill = styled.span`
  background: ${({ featured, theme }) => (featured ? theme.colors.navy : theme.colors.pinkPale)};
  color: ${({ featured, theme }) => (featured ? "#ffffff" : theme.colors.roseDeep)};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 9px 16px;
  font-size: 13px;
  font-weight: 500;
`;
