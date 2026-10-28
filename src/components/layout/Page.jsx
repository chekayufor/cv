import React from "react";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageContainer = styled.main`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 28px 20px 24px;
  min-height: calc(100vh - 64px - 160px);
  animation: ${fadeUp} 0.45s ease both;
`;

export const ChapterHeader = ({ index, eyebrow, title, lead }) => (
  <Header>
    <Index aria-hidden="true">{index}</Index>
    <HeaderBody>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title>{title}</Title>
      <Rule />
      {lead && <Lead>{lead}</Lead>}
    </HeaderBody>
  </Header>
);

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 28px;
`;

const Index = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 800;
  font-size: 56px;
  line-height: 0.8;
  color: transparent;
  -webkit-text-stroke: 1.5px ${({ theme }) => theme.colors.navy};
  opacity: 0.22;
  flex-shrink: 0;
  margin-top: 4px;
  @media (min-width: 640px) {
    font-size: 72px;
  }
`;

const HeaderBody = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Eyebrow = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.rose};
  margin-bottom: 4px;
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
`;

const Title = PageTitle;

const Rule = styled.div`
  width: 46px;
  height: 4px;
  background: ${({ theme }) => theme.colors.rose};
  border-radius: 2px;
  margin: 10px 0 12px;
`;

export const PageLead = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.inkSoft};
  max-width: 56ch;
`;

const Lead = PageLead;
