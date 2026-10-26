import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../data/nav";
import { MenuIcon, CloseIcon } from "../icons";
import MobileMenu from "./MobileMenu";

const TopBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const current = navItems.find(item =>
    item.exact ? location.pathname === item.to : location.pathname.startsWith(item.to)
  );

  return (
    <>
      <Bar>
        <Inner>
          <Brand to="/" onClick={() => setOpen(false)}>
            <Monogram>ED</Monogram>
            <BrandText>
              <BrandName>Elena Dubinsky</BrandName>
              <BrandSub>{current ? current.label : ""}</BrandSub>
            </BrandText>
          </Brand>

          <DesktopLinks>
            {navItems.map(item => (
              <StyledLink key={item.to} to={item.to} exact={item.exact} activeClassName="active">
                {item.label}
              </StyledLink>
            ))}
          </DesktopLinks>

          <MenuButton onClick={() => setOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </MenuButton>
        </Inner>
      </Bar>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default TopBar;

const Bar = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(253, 249, 244, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  max-width: 920px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 20px;
`;

const Brand = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex: 1;
  min-width: 0;
`;

const Monogram = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const BrandName = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.ink};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BrandSub = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.rose};
  font-weight: 600;
  @media (min-width: 860px) {
    display: none;
  }
`;

const DesktopLinks = styled.nav`
  display: none;
  gap: 28px;
  @media (min-width: 860px) {
    display: flex;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.inkSoft};
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  white-space: nowrap;
  &:hover {
    color: ${({ theme }) => theme.colors.roseDeep};
  }
  &.active {
    color: ${({ theme }) => theme.colors.roseDeep};
  }
  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.gradient};
  }
`;

const MenuButton = styled.button`
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
  flex-shrink: 0;
  @media (min-width: 860px) {
    display: none;
  }
`;
