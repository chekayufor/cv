import React from "react";
import styled from "styled-components";
import Section from "./Section";
import {
  topSkills,
  tools,
  languages,
  certifications,
  publications
} from "../../data/profile";

const SkillsLanguages = () => (
  <Section id="skills" title="Skills">
    <Group>
      <GroupTitle>Top Skills</GroupTitle>
      <Pills>
        {topSkills.map(skill => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </Pills>
    </Group>

    <Group>
      <GroupTitle>Tools & Platforms</GroupTitle>
      <Pills>
        {tools.map(tool => (
          <Pill key={tool}>{tool}</Pill>
        ))}
      </Pills>
    </Group>

    <Group>
      <GroupTitle>Languages</GroupTitle>
      <List>
        {languages.map(lang => (
          <li key={lang.name}>
            <strong>{lang.name}</strong> — {lang.level}
          </li>
        ))}
      </List>
    </Group>

    <Group>
      <GroupTitle>Certifications</GroupTitle>
      <List>
        {certifications.map(cert => (
          <li key={cert}>{cert}</li>
        ))}
      </List>
    </Group>

    <Group last>
      <GroupTitle>Publications</GroupTitle>
      <List>
        {publications.map(pub => (
          <li key={pub}>{pub}</li>
        ))}
      </List>
    </Group>
  </Section>
);

export default SkillsLanguages;

const Group = styled.div`
  margin-bottom: 20px;
  ${({ last }) => last && "margin-bottom: 0;"}
`;

const GroupTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Pill = styled.span`
  background: #f3f2ef;
  border: 1px solid #e0dfdc;
  border-radius: 16px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
`;

const List = styled.ul`
  padding-left: 18px;
  li {
    list-style: disc;
    font-size: 14px;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.9);
  }
`;
