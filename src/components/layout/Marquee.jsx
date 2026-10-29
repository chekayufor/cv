import React from "react";
import styled, { keyframes } from "styled-components";

const Marquee = ({ items, tilt = -1.2 }) => (
  <Clip>
    <Band tilt={tilt}>
      <Track>
        {[0, 1].map(copy => (
          <Group key={copy} aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <React.Fragment key={i}>
                <span>{item}</span>
                <Star>✦</Star>
              </React.Fragment>
            ))}
          </Group>
        ))}
      </Track>
    </Band>
  </Clip>
);

export default Marquee;

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

// Clips the rotated, intentionally-too-wide Band so its tilted bounding box
// never contributes to the page's scrollable width.
const Clip = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Band = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.navy};
  border-top: 3px solid ${({ theme }) => theme.colors.navyDeep};
  border-bottom: 3px solid ${({ theme }) => theme.colors.navyDeep};
  transform: rotate(${({ tilt }) => tilt}deg);
  margin: 0 -4vw;
  width: 108vw;
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 22s linear infinite;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 10px 0;
  span {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #ffffff;
    white-space: nowrap;
    padding: 0 18px;
  }
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.rose} !important;
  font-size: 14px !important;
`;
