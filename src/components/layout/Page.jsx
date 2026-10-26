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

export const Eyebrow = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.rose};
  margin-bottom: 6px;
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 10px;
`;

export const PageLead = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.inkSoft};
  max-width: 56ch;
  margin-bottom: 28px;
`;
