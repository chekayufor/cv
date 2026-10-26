import React from "react";
import styled from "styled-components";
import { PageContainer, Eyebrow, PageTitle, PageLead } from "../layout/Page";
import { profile } from "../../data/profile";
import { MailIcon, PhoneIcon, LinkedInIcon } from "../icons";

const contactCards = [
  {
    icon: MailIcon,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "View full profile ↗",
    href: profile.linkedinUrl,
    external: true
  }
];

const Contact = () => (
  <PageContainer>
    <Eyebrow>Say hello</Eyebrow>
    <PageTitle>Let's Connect</PageTitle>
    <PageLead>
      Open to conversations about digital analytics, product strategy and AI integration — reach
      out any time.
    </PageLead>

    <Cards>
      {contactCards.map(card => {
        const Icon = card.icon;
        return (
          <Card
            key={card.label}
            href={card.href}
            target={card.external ? "_blank" : undefined}
            rel={card.external ? "noopener noreferrer" : undefined}
          >
            <IconWrap>
              <Icon />
            </IconWrap>
            <div>
              <CardLabel>{card.label}</CardLabel>
              <CardValue>{card.value}</CardValue>
            </div>
          </Card>
        );
      })}
    </Cards>

    <Note>{profile.location}</Note>
  </PageContainer>
);

export default Contact;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const Card = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 16px 18px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.card};
  }
`;

const IconWrap = styled.div`
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.inkFaint};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const CardValue = styled.div`
  font-size: 14.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
`;

const Note = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.inkFaint};
`;
