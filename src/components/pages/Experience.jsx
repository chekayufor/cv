import React, { useState } from "react";
import styled from "styled-components";
import { PageContainer, Eyebrow, PageTitle, PageLead } from "../layout/Page";
import { experience } from "../../data/profile";
import { ChevronDownIcon } from "../icons";

const initials = name =>
  name
    .split(" ")
    .map(word => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Experience = () => {
  const [expanded, setExpanded] = useState(() => new Set(["0-0"]));

  const toggle = key => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <PageContainer>
      <Eyebrow>Career Journey</Eyebrow>
      <PageTitle>Experience</PageTitle>
      <PageLead>
        15+ years across business analysis, project management and digital analytics. Tap a role
        to see the details.
      </PageLead>

      <Timeline>
        {experience.map((entry, companyIndex) => (
          <Company key={entry.company}>
            <CompanyHeader>
              <Logo>
                {entry.logo ? (
                  <img src={entry.logo} alt={entry.company} />
                ) : (
                  <Placeholder>{initials(entry.company)}</Placeholder>
                )}
              </Logo>
              <div>
                <CompanyName>{entry.company}</CompanyName>
                {entry.totalDuration && <Duration>{entry.totalDuration}</Duration>}
              </div>
            </CompanyHeader>

            <Roles>
              {entry.roles.map((role, roleIndex) => {
                const key = `${companyIndex}-${roleIndex}`;
                const isOpen = expanded.has(key);
                const hasBullets = role.bullets.length > 0;
                return (
                  <Role key={key}>
                    <RoleHeader
                      as={hasBullets ? "button" : "div"}
                      onClick={hasBullets ? () => toggle(key) : undefined}
                    >
                      <div>
                        <RoleTitle>{role.title}</RoleTitle>
                        <Meta>
                          {role.period} · {role.duration}
                        </Meta>
                        <Meta>{role.location}</Meta>
                      </div>
                      {hasBullets && (
                        <Chevron open={isOpen}>
                          <ChevronDownIcon />
                        </Chevron>
                      )}
                    </RoleHeader>
                    {hasBullets && isOpen && (
                      <Bullets>
                        {role.bullets.map(bullet => (
                          <li key={bullet.slice(0, 32)}>{bullet}</li>
                        ))}
                      </Bullets>
                    )}
                  </Role>
                );
              })}
            </Roles>
          </Company>
        ))}
      </Timeline>
    </PageContainer>
  );
};

export default Experience;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Company = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 18px;
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
`;

const Logo = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
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
  background: ${({ theme }) => theme.colors.gradient};
  color: #ffffff;
  font-weight: 700;
  font-size: 13px;
`;

const CompanyName = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.navy};
`;

const Duration = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.inkFaint};
`;

const Roles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 14px;
  border-left: 2px solid ${({ theme }) => theme.colors.pinkPale};
`;

const Role = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  &:last-child {
    border-bottom: none;
  }
`;

const RoleHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  cursor: ${({ as }) => (as === "button" ? "pointer" : "default")};
  padding: 0;
  font: inherit;
  color: inherit;
`;

const RoleTitle = styled.div`
  font-weight: 600;
  font-size: 13.5px;
  color: ${({ theme }) => theme.colors.ink};
`;

const Meta = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.inkFaint};
  margin-top: 2px;
`;

const Chevron = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.roseDeep};
  transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
  transition: transform 0.2s ease;
  margin-top: 2px;
`;

const Bullets = styled.ul`
  margin-top: 10px;
  padding-left: 18px;
  li {
    list-style: disc;
    font-size: 13px;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.inkSoft};
    margin-bottom: 6px;
  }
`;
