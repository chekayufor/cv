import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data/nav";
import { CloseIcon } from "../icons";
import { profile } from "../../data/profile";

const MobileMenu = ({ open, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <Overlay>
      <CloseButton onClick={onClose} aria-label="Close menu">
        <CloseIcon />
      </CloseButton>
      <List>
        {navItems.map((item, index) => (
          <Item key={item.to} style={{ animationDelay: `${index * 40}ms` }}>
            <Num>{String(index + 1).padStart(2, "0")}</Num>
            <StyledLink to={item.to} exact={item.exact} activeClassName="active" onClick={onClose}>
              {item.label}
            </StyledLink>
          </Item>
        ))}
      </List>
      <Footer>
        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
          View on LinkedIn ↗
        </a>
      </Footer>
    </Overlay>
  );
};

export default MobileMenu;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: ${({ theme }) => theme.colors.navy};
  background-image: radial-gradient(rgba(255, 255, 255, 0.07) 1.2px, transparent 1.2px);
  background-size: 22px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

const Item = styled.li`
  display: flex;
  align-items: baseline;
  gap: 12px;
  opacity: 0;
  animation: ${fadeIn} 0.35s ease forwards;
`;

const Num = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.pink};
`;

const StyledLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 34px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  &.active {
    color: #ffffff;
  }
`;

const Footer = styled.div`
  margin-top: 32px;
  a {
    color: ${({ theme }) => theme.colors.pink};
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
  }
`;
