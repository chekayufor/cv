import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { experience } from "../../data/profile";

const initials = name =>
  name
    .split(" ")
    .map(word => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Experience = () => (
  <Section id="experience" title="Experience">
    {experience.map(entry => (
      <Company key={entry.company}>
        <Logo>
          {entry.logo ? (
            <img src={entry.logo} alt={entry.company} />
          ) : (
            <Placeholder>{initials(entry.company)}</Placeholder>
          )}
        </Logo>
        <CompanyBody>
          <CompanyName>{entry.company}</CompanyName>
          {entry.totalDuration && <Duration>{entry.totalDuration}</Duration>}
          <Roles multi={entry.roles.length > 1}>
            {entry.roles.map(role => (
              <Role key={role.title + role.period}>
                <RoleTitle>{role.title}</RoleTitle>
                <Meta>
                  {role.period} · {role.duration}
                </Meta>
                <Meta>{role.location}</Meta>
                {role.bullets.length > 0 && (
                  <Bullets>
                    {role.bullets.map(bullet => (
                      <li key={bullet.slice(0, 32)}>{bullet}</li>
                    ))}
                  </Bullets>
                )}
              </Role>
            ))}
          </Roles>
        </CompanyBody>
      </Company>
    ))}
  </Section>
);

export default Experience;

const Company = styled.div`
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

const CompanyBody = styled.div`
  flex: 1;
  min-width: 0;
`;

const CompanyName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
`;

const Duration = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 8px;
`;

const Roles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${({ multi }) =>
    multi &&
    `
    margin-top: 8px;
    padding-left: 16px;
    border-left: 2px solid #e0dfdc;
  `}
`;

const Role = styled.div``;

const RoleTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
`;

const Meta = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
`;

const Bullets = styled.ul`
  margin-top: 8px;
  padding-left: 18px;
  li {
    list-style: disc;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
    margin-bottom: 4px;
  }
`;
