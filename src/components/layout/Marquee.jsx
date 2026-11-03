import React from "react";
import styled, { keyframes } from "styled-components";

const Marquee = ({ items }) => (
  <Band>
    <Track>
      {[0, 1].map(copy => (
        <Group key={copy} aria-hidden={copy === 1}>
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              <Star>·</Star>
            </React.Fragment>
          ))}
        </Group>
      ))}
    </Track>
  </Band>
);

export default Marquee;

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Band = styled.div`
  overflow: hidden;
  width: 100%;
  background: ${({ theme }) => theme.colors.navy};
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 32s linear infinite;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 16px 0;
  span {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    white-space: nowrap;
    padding: 0 20px;
  }
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.pink} !important;
  font-size: 18px !important;
`;
