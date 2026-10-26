import React from "react";
import styled from "styled-components";
import { PageContainer, Eyebrow, PageTitle, PageLead } from "../layout/Page";
import { education } from "../../data/profile";

const initials = name =>
  name
    .split(" ")
    .map(word => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Education = () => (
  <PageContainer>
    <Eyebrow>Learning Path</Eyebrow>
    <PageTitle>Education</PageTitle>
    <PageLead>From civil engineering and economics to full-stack development and product design.</PageLead>

    <Grid>
      {education.map(entry => (
        <Card key={entry.school + entry.degree}>
          <Logo>
            {entry.logo ? (
              <img src={entry.logo} alt={entry.school} />
            ) : (
              <Placeholder>{initials(entry.school)}</Placeholder>
            )}
          </Logo>
          <School>{entry.school}</School>
          <Degree>{entry.degree}</Degree>
          <Period>{entry.period}</Period>
        </Card>
      ))}
    </Grid>
  </PageContainer>
);

export default Education;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 18px;
`;

const Logo = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  margin-bottom: 12px;
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
  background: ${({ theme }) => theme.colors.gradient};
  color: #ffffff;
  font-weight: 700;
  font-size: 13px;
`;

const School = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 4px;
`;

const Degree = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-bottom: 6px;
`;

const Period = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.inkFaint};
`;
