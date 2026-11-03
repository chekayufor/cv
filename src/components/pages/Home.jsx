import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { profile, stats, about } from "../../data/profile";
import { navItems } from "../../data/nav";
import { ArrowRightIcon, ChevronDownIcon } from "../icons";
import Marquee from "../layout/Marquee";

import heroCenter from "../../images/hero/hero-center.webp";
import heroSmile from "../../images/hero/hero-smile.webp";
import heroLeft2 from "../../images/hero/hero-left-2.webp";

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

// Interaction tuning for the full-bleed photo hero: how long the cursor has
// to rest in the center zone before the smile variant kicks in, and how
// often touch devices (no mouse) auto-cycle through the looks instead.
const DWELL_MS = 2200;
const IDLE_CYCLE_MS = 3600;

const photos = [
  { key: "center", src: heroCenter, mirror: false },
  { key: "left", src: heroLeft2, mirror: false },
  { key: "right", src: heroLeft2, mirror: true },
  { key: "smile", src: heroSmile, mirror: false }
];

const cycleOrder = ["center", "left", "smile", "right"];

const Home = () => {
  const [activeKey, setActiveKey] = useState("center");
  const [scrolled, setScrolled] = useState(false);
  const dwellTimer = useRef(null);
  const zoneRef = useRef("center");

  const clearDwell = () => {
    if (dwellTimer.current) {
      clearTimeout(dwellTimer.current);
      dwellTimer.current = null;
    }
  };

  const setZone = useCallback(zone => {
    if (zoneRef.current === zone) return;
    zoneRef.current = zone;
    clearDwell();
    setActiveKey(zone);
    if (zone === "center") {
      dwellTimer.current = setTimeout(() => {
        if (zoneRef.current === "center") setActiveKey("smile");
      }, DWELL_MS);
    }
  }, []);

  const handlePointerX = useCallback(
    clientX => {
      const ratio = clientX / window.innerWidth;
      if (ratio < 0.33) setZone("left");
      else if (ratio > 0.67) setZone("right");
      else setZone("center");
    },
    [setZone]
  );

  useEffect(() => {
    const onMouseMove = e => handlePointerX(e.clientX);
    const onTouchMove = e => {
      if (e.touches && e.touches[0]) handlePointerX(e.touches[0].clientX);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      clearDwell();
    };
  }, [handlePointerX]);

  // Devices with no hover (phones/tablets) won't fire mousemove, so the
  // eyes auto-cycle through the looks instead of staying static — finger
  // drags on the photo still override this via the touchmove handler above.
  useEffect(() => {
    const supportsHover =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(hover: hover)").matches;
    if (supportsHover) return undefined;

    let idx = 0;
    const id = setInterval(() => {
      idx = (idx + 1) % cycleOrder.length;
      zoneRef.current = cycleOrder[idx];
      setActiveKey(cycleOrder[idx]);
    }, IDLE_CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const triggerSmile = () => {
    clearDwell();
    zoneRef.current = "smile";
    setActiveKey("smile");
  };

  const releaseSmile = () => {
    zoneRef.current = "__reset__";
    handlePointerX(window.innerWidth / 2);
  };

  return (
    <>
      <InteractiveHero>
        <PhotoStack>
          <PhotoFrame>
            {photos.map(p => (
              <Photo
                key={p.key}
                src={p.src}
                alt={profile.name}
                $mirror={p.mirror}
                $active={activeKey === p.key}
              />
            ))}
          </PhotoFrame>
        </PhotoStack>
        <Scrim />

        <HeroContent>
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
            <Primary to="/experience" onMouseEnter={triggerSmile} onMouseLeave={releaseSmile}>
              See my experience <ArrowRightIcon />
            </Primary>
            <Secondary to="/contact" onMouseEnter={triggerSmile} onMouseLeave={releaseSmile}>
              Get in touch
            </Secondary>
          </Ctas>
        </HeroContent>

        <ScrollCue $hidden={scrolled} aria-hidden="true">
          <ScrollLabel>Scroll</ScrollLabel>
          <ChevronDownIcon />
        </ScrollCue>
      </InteractiveHero>

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
          {quickLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={item.to} to={item.to}>
                <CardIcon alt={i % 2 === 1}>
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
};

export default Home;

const InteractiveHero = styled.div`
  position: relative;
  overflow: hidden;
  height: calc(100vh - 64px);
  min-height: 520px;
  background: ${({ theme }) => theme.colors.navyDeep};

  @supports (height: 100svh) {
    height: calc(100svh - 64px);
  }
`;

// On wide screens a bare "object-fit: cover" would stretch a square
// close-up portrait across the whole ultra-wide viewport, cropping away
// almost everything but eyes/forehead. Past 760px we instead constrain the
// photo to a tall portrait frame (full hero height, capped width) so the
// whole face-to-hands pose stays in view with the navy background filling
// the sides; below that, mobile viewports are narrow enough that a plain
// full-bleed cover already frames the pose well.
const PhotoStack = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
`;

const PhotoFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media (min-width: 760px) {
    width: auto;
    aspect-ratio: 4 / 5;
    max-width: 100%;
  }
`;

const Photo = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 12%;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: ${({ $mirror }) => ($mirror ? "scaleX(-1)" : "none")};
  transition: opacity 0.6s ease;
`;

const Scrim = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(13, 15, 31, 0.35) 0%,
    rgba(13, 15, 31, 0.05) 22%,
    rgba(13, 15, 31, 0.1) 45%,
    rgba(13, 15, 31, 0.82) 78%,
    rgba(13, 15, 31, 0.96) 100%
  );
`;

const HeroContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 28px 20px 96px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: #ffffff;
`;

const Last = styled.span`
  display: block;
  font-size: 50px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.01em;
  text-shadow: 4px 4px 0 rgba(214, 0, 140, 0.5);
  @media (min-width: 640px) {
    font-size: 64px;
    text-shadow: 5px 5px 0 rgba(214, 0, 140, 0.5);
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 13px;
  border-radius: ${({ theme }) => theme.radii.pill};
  transform: rotate(${({ tilt }) => tilt}deg);
`;

const Tagline = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.84);
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
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.3);
  }
`;

const Secondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  border: 2px solid #ffffff;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  padding: 12px 22px;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

const ScrollCue = styled.div`
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.85);
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  pointer-events: none;
  transition: opacity 0.4s ease;
  svg {
    width: 20px;
    height: 20px;
    animation: ${bounce} 1.6s ease-in-out infinite;
  }
`;

const ScrollLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
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
  background: ${({ theme, alt }) => (alt ? theme.colors.bluePale : theme.colors.pinkPale)};
  color: ${({ theme, alt }) => (alt ? theme.colors.blue : theme.colors.roseDeep)};
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
