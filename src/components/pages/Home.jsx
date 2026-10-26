import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { profile, stats, about } from "../../data/profile";
import { navItems } from "../../data/nav";
import { ArrowRightIcon } from "../icons";

const quickLinks = navItems.filter(item => item.to !== "/");

const blurbFor = {
  "/about": "My story, languages & certifications",
  "/experience": "15+ years across analytics & product",
  "/education": "Degrees, bootcamps & courses",
  "/skills": "Tools and skills I work with",
  "/activity": "Recent posts, straight from LinkedIn",
  "/contact": "Let's talk — reach out"
};

const Home = () => (
  <>
    <Hero>
      <Blob className="one" />
      <Blob className="two" />
      <HeroInner>
        <Avatar src={profile.avatar} alt={profile.name} />
        <Eyebrow>Hello, I'm</Eyebrow>
        <Name>{profile.name}</Name>
        <Roles>
          {profile.roles.map(role => (
            <RolePill key={role}>{role}</RolePill>
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

    <Section>
      <Stats>
        {stats.map(stat => (
          <Stat key={stat.label}>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </Stat>
        ))}
      </Stats>

      <Intro>{about[0]}</Intro>

      <GridTitle>Explore</GridTitle>
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

const floaty = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-12px) scale(1.03); }
`;

const Hero = styled.div`
  position: relative;
  overflow: hidden;
  padding: 48px 20px 40px;
  background: ${({ theme }) => theme.colors.gradientSoft};
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.55;
  animation: ${floaty} 7s ease-in-out infinite;
  &.one {
    width: 220px;
    height: 220px;
    background: ${({ theme }) => theme.colors.pink};
    top: -60px;
    right: -60px;
  }
  &.two {
    width: 180px;
    height: 180px;
    background: ${({ theme }) => theme.colors.pinkStrong};
    bottom: -50px;
    left: -40px;
    animation-delay: 2s;
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

const Avatar = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  margin-bottom: 16px;
`;

const Eyebrow = styled.p`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.rose};
  margin-bottom: 4px;
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 38px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 14px;
`;

const Roles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const RolePill = styled.span`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.roseDeep};
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
`;

const Tagline = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.inkSoft};
  max-width: 42ch;
  margin-bottom: 24px;
`;

const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const Primary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.gradient};
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  padding: 12px 22px;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Secondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.roseDeep};
  font-weight: 600;
  font-size: 14px;
  padding: 12px 22px;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;
`;

const Section = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 32px 20px 24px;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 28px;
`;

const Stat = styled.div`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px 8px;
  text-align: center;
`;

const StatValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.roseDeep};
`;

const StatLabel = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-top: 4px;
  line-height: 1.3;
`;

const Intro = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-bottom: 32px;
`;

const GridTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 14px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const Card = styled(Link)`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 18px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadow.card};
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
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 4px;
`;

const CardBlurb = styled.div`
  font-size: 12px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.inkSoft};
`;
