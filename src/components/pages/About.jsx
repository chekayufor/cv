import React from "react";
import styled from "styled-components";
import { PageContainer, ChapterHeader } from "../layout/Page";
import { about, languages } from "../../data/profile";

const levelScore = {
  "Native or Bilingual": 5,
  "Full Professional": 4,
  "Professional Working": 3,
  "Limited Working": 2,
  Elementary: 1
};

const About = () => (
  <PageContainer>
    <ChapterHeader
      index="01"
      eyebrow="Get to know me"
      title="About Me"
      lead="The story behind the dashboards, strategy decks and product roadmaps."
    />

    <Card>
      {about.map(paragraph => (
        <Paragraph key={paragraph.slice(0, 24)}>{paragraph}</Paragraph>
      ))}
    </Card>

    <SectionTitle>Languages</SectionTitle>
    <LangGrid>
      {languages.map(lang => (
        <LangCard key={lang.name}>
          <LangName>{lang.name}</LangName>
          <Dots>
            {Array.from({ length: 5 }).map((_, i) => (
              <Dot key={i} filled={i < (levelScore[lang.level] || 0)} />
            ))}
          </Dots>
          <LangLevel>{lang.level}</LangLevel>
        </LangCard>
      ))}
    </LangGrid>
  </PageContainer>
);

export default About;

const Card = styled.div`
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadow.pop};
  padding: 22px;
  margin-bottom: 36px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 19px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 14px;
`;

const LangGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const LangCard = styled.div`
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.popSm};
  padding: 14px;
`;

const LangName = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 8px;
`;

const Dots = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 6px;
`;

const Dot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ theme, filled }) => (filled ? theme.colors.rose : theme.colors.pinkPale)};
`;

const LangLevel = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.inkFaint};
`;
