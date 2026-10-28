import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { profile, stats, about } from "../../data/profile";
import { navItems } from "../../data/nav";
import { ArrowRightIcon } from "../icons";
import Marquee from "../layout/Marquee";

const quickLinks = navItems.filter(item => item.to !== "/");

const blurbFor = {
  "/about": "My story and the languages I work in",
  "/experience": "15+ years across analytics & product",
  "/education": "Degrees, bootcamps & courses",
  "/skills": "Tools and skills I work with",
  "/activity": "Recent posts, straight from LinkedIn",
  "/contact": "Let's talk — reach out"
};

const tilts = [-2, 1.5, -1, 2, -1.5, 1];

const [firstName, ...restName] = profile.name.split(" ");
const lastName = restName.join(" ");

const Home = () => (
  <>
    <Hero>
      <Shape className="one" />
      <Shape className="two" />
      <SideLabel className="left">
        <span>Data</span>
        <span>Strategy</span>
        <span>Trust</span>
      </SideLabel>
      <SideLabel className="right">
        <span>Analytics</span>
        <span>AI</span>
        <span>Growth</span>
      </SideLabel>
      <HeroInner>
        <FrameWrap>
          <Frame>
            <Avatar src={profile.avatar} alt={profile.name} />
          </Frame>
          <Stamp>ED</Stamp>
        </FrameWrap>
        <Eyebrow>
          <Line /> 00 · Hello, I'm <Line />
        </Eyebrow>
        <Name>
          <First>{firstName}</First>
          <Last>{lastName}</Last>
        </Name>
        <Roles>
          {profile.roles.map((role, i) => (
            <RolePill key={role} tilt={tilts[i % tilts.length]}>
              {role}
            </RolePill>
          ))}
        </Roles>
        <Tagline>{profile.tagline}</Tagline>
        <Ctas>
          <Primary to="/experience">
            See my experience <ArrowRightIcon />
          </Primary>
          <Secondary to="/contact">Get in touch</Secondary>
        </Ctas>
      </HeroInner>
    </Hero>

    <Marquee
      items={[
        "Digital Analytics",
        "AI Product Strategy",
        "Full Stack Development",
        "Leadership",
        "Banking & Insurance"
      ]}
    />

    <Section>
      <Stats>
        {stats.map((stat, i) => (
          <Stat key={stat.label} tilt={tilts[i % tilts.length]}>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </Stat>
        ))}
      </Stats>

      <Quote>
        <QuoteMark>“</QuoteMark>
        <QuoteText>{about[0]}</QuoteText>
      </Quote>

      <GridTitle>
        <Dash /> Explore
      </GridTitle>
      <Grid>
        {quickLinks.map(item => {
          const Icon = item.icon;
          return (
            <Card key={item.to} to={item.to}>
              <CardIcon>
                <Icon />
              </CardIcon>
              <CardLabel>{item.label}</CardLabel>
              <CardBlurb>{blurbFor[item.to]}</CardBlurb>
            </Card>
          );
        })}
      </Grid>
    </Section>
  </>
);

export default Home;

const Hero = styled.div`
  position: relative;
  overflow: hidden;
  padding: 56px 20px 48px;
  background: ${({ theme }) => theme.colors.navy};
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1.2px, transparent 1.2px);
  background-size: 22px 22px;
`;

const Shape = styled.div`
  position: absolute;
  border-radius: 28px;
  opacity: 0.9;
  &.one {
    width: 160px;
    height: 160px;
    background: ${({ theme }) => theme.colors.rose};
    top: -50px;
    right: -40px;
    transform: rotate(18deg);
    opacity: 0.85;
  }
  &.two {
    width: 110px;
    height: 110px;
    border: 3px solid rgba(255, 255, 255, 0.18);
    border-radius: 50%;
    bottom: -30px;
    left: -30px;
  }
`;

const SideLabel = styled.div`
  display: none;
  position: absolute;
  top: 56px;
  flex-direction: column;
  gap: 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  @media (min-width: 900px) {
    display: flex;
  }
  &.left {
    left: 32px;
  }
  &.right {
    right: 32px;
    text-align: right;
    align-items: flex-end;
  }
`;

const HeroInner = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FrameWrap = styled.div`
  position: relative;
  margin-bottom: 22px;
`;

const Frame = styled.div`
  width: 118px;
  height: 118px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: #ffffff;
  padding: 5px;
  transform: rotate(-4deg);
  box-shadow: ${({ theme }) => theme.shadow.popRose};
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  object-fit: cover;
  display: block;
`;

const Stamp = styled.span`
  position: absolute;
  bottom: -10px;
  right: -14px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.rose};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 800;
  font-size: 13px;
  transform: rotate(10deg);
  border: 3px solid ${({ theme }) => theme.colors.navy};
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.pinkStrong};
  margin-bottom: 10px;
`;

const Line = styled.span`
  display: inline-block;
  width: 20px;
  height: 1px;
  background: ${({ theme }) => theme.colors.pinkStrong};
  opacity: 0.7;
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 18px;
  line-height: 1.02;
`;

const First = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.78);
`;

const Last = styled.span`
  display: block;
  font-size: 50px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.01em;
  text-shadow: 4px 4px 0 ${({ theme }) => theme.colors.rose};
  @media (min-width: 640px) {
    font-size: 64px;
    text-shadow: 5px 5px 0 ${({ theme }) => theme.colors.rose};
  }
`;

const Roles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 18px;
`;

const RolePill = styled.span`
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.navy};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 13px;
  border-radius: ${({ theme }) => theme.radii.pill};
  box-shadow: ${({ theme }) => theme.shadow.popSm};
  transform: rotate(${({ tilt }) => tilt}deg);
`;

const Tagline = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
  max-width: 42ch;
  margin-bottom: 26px;
`;

const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
`;

const Primary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.rose};
  border: 2px solid #ffffff;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  padding: 12px 22px;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;
  box-shadow: 4px 4px 0 rgba(255, 255, 255, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 rgba(255, 255, 255, 0.35);
  }
`;

const Secondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  padding: 12px 22px;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;
  transition: background 0.15s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Section = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 40px 20px 24px;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 36px;
`;

const Stat = styled.div`
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px 8px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow.popSm};
  transform: rotate(${({ tilt }) => tilt}deg);
`;

const StatValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 22px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.rose};
`;

const StatLabel = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-top: 4px;
  line-height: 1.3;
`;

const Quote = styled.div`
  position: relative;
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 24px 22px 22px;
  margin-bottom: 40px;
  box-shadow: ${({ theme }) => theme.shadow.pop};
`;

const QuoteMark = styled.div`
  position: absolute;
  top: -26px;
  left: 16px;
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 80px;
  color: ${({ theme }) => theme.colors.rose};
  line-height: 1;
`;

const QuoteText = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.ink};
`;

const GridTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 16px;
`;

const Dash = styled.span`
  display: inline-block;
  width: 26px;
  height: 10px;
  background: ${({ theme }) => theme.colors.rose};
  border-radius: 2px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
`;

const Card = styled(Link)`
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 18px;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadow.popSm};
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 6px 6px 0 ${({ theme }) => theme.colors.navy};
  }
`;

const CardIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.pinkPale};
  color: ${({ theme }) => theme.colors.roseDeep};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const CardLabel = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 4px;
`;

const CardBlurb = styled.div`
  font-size: 12px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.inkSoft};
`;
