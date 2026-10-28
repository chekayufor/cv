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
  border: 2px solid rgba(255, 255, 255, 0.4);
  background: transparent;
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
  font-weight: 700;
  color: ${({ theme }) => theme.colors.rose};
`;

const StyledLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 34px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  &.active {
    color: #ffffff;
    text-shadow: 3px 3px 0 ${({ theme }) => theme.colors.rose};
  }
`;

const Footer = styled.div`
  margin-top: 32px;
  a {
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.rose};
    padding-bottom: 2px;
  }
`;
