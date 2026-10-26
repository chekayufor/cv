import React from "react";
import styled from "styled-components";
import { PageContainer, Eyebrow, PageTitle, PageLead } from "../layout/Page";
import { about, languages, certifications, publications } from "../../data/profile";

const levelScore = {
  "Native or Bilingual": 5,
  "Full Professional": 4,
  "Professional Working": 3,
  "Limited Working": 2,
  Elementary: 1
};

const About = () => (
  <PageContainer>
    <Eyebrow>Get to know me</Eyebrow>
    <PageTitle>About Me</PageTitle>
    <PageLead>The story behind the dashboards, strategy decks and product roadmaps.</PageLead>

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

    <SectionTitle>Certifications</SectionTitle>
    <List>
      {certifications.map(cert => (
        <ListItem key={cert}>{cert}</ListItem>
      ))}
    </List>

    <SectionTitle>Publications</SectionTitle>
    <List>
      {publications.map(pub => (
        <ListItem key={pub}>{pub}</ListItem>
      ))}
    </List>
  </PageContainer>
);

export default About;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 22px;
  margin-bottom: 32px;
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
  margin-bottom: 32px;
`;

const LangCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
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

const List = styled.ul`
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 6px 18px;
  margin-bottom: 32px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ListItem = styled.li`
  list-style: disc;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.inkSoft};
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  &:last-child {
    border-bottom: none;
  }
`;
