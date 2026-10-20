import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { about } from "../../data/profile";

const About = () => (
  <Section id="about" title="About">
    {about.map(paragraph => (
      <Paragraph key={paragraph.slice(0, 24)}>{paragraph}</Paragraph>
    ))}
  </Section>
);

export default About;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.9);
  white-space: pre-line;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;
