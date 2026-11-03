import React from "react";
import styled from "styled-components";
import { PageContainer, ChapterHeader } from "../layout/Page";
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
    <ChapterHeader
      index="06"
      eyebrow="Say hello"
      title="Let's Connect"
      lead="Open to conversations about digital analytics, product strategy and AI integration — reach out any time."
    />

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
  margin-bottom: 32px;
`;

const Card = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 4px;
  text-decoration: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition: padding-left 0.2s ease;
  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  &:hover {
    padding-left: 10px;
  }
`;

const IconWrap = styled.div`
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.pinkPale};
  color: ${({ theme }) => theme.colors.roseDeep};
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
