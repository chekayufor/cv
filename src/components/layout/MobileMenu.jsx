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
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: ${({ theme }) => theme.colors.gradientSoft};
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
  background: ${({ theme }) => theme.colors.pinkPale};
  color: ${({ theme }) => theme.colors.roseDeep};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

const Item = styled.li`
  opacity: 0;
  animation: ${fadeIn} 0.35s ease forwards;
`;

const StyledLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.inkSoft};
  text-decoration: none;
  &.active {
    color: ${({ theme }) => theme.colors.roseDeep};
  }
`;

const Footer = styled.div`
  margin-top: 32px;
  a {
    color: ${({ theme }) => theme.colors.roseDeep};
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.roseDeep};
    padding-bottom: 2px;
  }
`;
