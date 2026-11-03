import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { profile, stats, about } from "../../data/profile";
import { navItems } from "../../data/nav";
import { ArrowRightIcon, ChevronDownIcon } from "../icons";
import Marquee from "../layout/Marquee";
import Reveal from "../layout/Reveal";

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

// A generalized, composite walk-through of how a project actually moves
// through her hands — not a named client case, just the method itself.
const process = [
  {
    step: "01",
    title: "Map the journey",
    text: "I start by walking in the user's shoes — tracing every touchpoint from first click to final action in GA4, Glassbox and Power BI, until I can see exactly where attention goes."
  },
  {
    step: "02",
    title: "Find the friction",
    text: "Behind every drop-off is a reason. I dig into the data to pinpoint exactly where people hesitate, get confused or give up — turning noisy numbers into a clear diagnosis."
  },
  {
    step: "03",
    title: "Design the fix",
    text: "A diagnosis only matters with a plan behind it. I translate findings into concrete UX, product and content recommendations that teams can actually ship."
  },
  {
    step: "04",
    title: "Prove the impact",
    text: "The work isn't done until the numbers move. I track the result after launch — conversion, retention, satisfaction — and feed it back into the next cycle."
  }
];

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
                {profile.roles.map(role => (
                  <RolePill key={role}>{role}</RolePill>
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
          </PhotoFrame>
        </PhotoStack>
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

      <Statement>
        <Reveal>
          <StatementText>
            Behind every click, <StatementAccent>there's intent.</StatementAccent>
          </StatementText>
          <StatementSub>
            My work starts where the data gets interesting — the moment a user hesitates,
            drops off or comes back for more.
          </StatementSub>
        </Reveal>
      </Statement>

      <Process>
        <Reveal>
          <ProcessEyebrow>How I work</ProcessEyebrow>
        </Reveal>
        <ProcessList>
          {process.map(item => (
            <Reveal key={item.step}>
              <ProcessStep>
                <ProcessNum>{item.step}</ProcessNum>
                <ProcessBody>
                  <ProcessTitle>{item.title}</ProcessTitle>
                  <ProcessText>{item.text}</ProcessText>
                </ProcessBody>
              </ProcessStep>
            </Reveal>
          ))}
        </ProcessList>
      </Process>

      <Section>
        <Stats>
          {stats.map(stat => (
            <Stat key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </Stat>
          ))}
        </Stats>

        <Quote>
          <QuoteMark>“</QuoteMark>
          <QuoteText>{about[0]}</QuoteText>
        </Quote>

        <GridTitle>Explore</GridTitle>
        <List>
          {quickLinks.map(item => {
            const Icon = item.icon;
            return (
              <ListItem key={item.to} to={item.to}>
                <ListIcon>
                  <Icon />
                </ListIcon>
                <ListText>
                  <ListLabel>{item.label}</ListLabel>
                  <ListBlurb>{blurbFor[item.to]}</ListBlurb>
                </ListText>
                <ArrowRightIcon />
              </ListItem>
            );
          })}
        </List>
      </Section>
    </>
  );
};

export default Home;

const InteractiveHero = styled.div`
  position: relative;
  overflow: hidden;
  height: calc(100vh - 64px);
  min-height: 560px;
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
    rgba(13, 15, 31, 0.3) 0%,
    rgba(13, 15, 31, 0.05) 22%,
    rgba(13, 15, 31, 0.1) 45%,
    rgba(13, 15, 31, 0.8) 78%,
    rgba(13, 15, 31, 0.94) 100%
  );
`;

const HeroContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 28px 20px 88px;
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
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.pink};
  margin-bottom: 12px;
`;

const Line = styled.span`
  display: inline-block;
  width: 24px;
  height: 1px;
  background: ${({ theme }) => theme.colors.pink};
  opacity: 0.6;
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 20px;
  line-height: 1.05;
`;

const First = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.85);
`;

const Last = styled.span`
  display: block;
  font-size: 44px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.01em;
  @media (min-width: 640px) {
    font-size: 58px;
  }
`;

const Roles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 18px;
`;

const RolePill = styled.span`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: 7px 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
`;

const Tagline = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.78);
  max-width: 38ch;
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
  background: #ffffff;
  color: ${({ theme }) => theme.colors.navy};
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.02em;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  svg {
    width: 15px;
    height: 15px;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }
`;

const Secondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.02em;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.16);
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

const Statement = styled.div`
  background: ${({ theme }) => theme.colors.navy};
  padding: 88px 20px;
  text-align: center;
`;

const StatementText = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 26px;
  font-weight: 300;
  line-height: 1.4;
  color: #ffffff;
  max-width: 18ch;
  margin: 0 auto 18px;
  @media (min-width: 640px) {
    font-size: 36px;
  }
`;

const StatementAccent = styled.span`
  display: block;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.pink};
`;

const StatementSub = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  max-width: 42ch;
  margin: 0 auto;
`;

const Process = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 72px 20px 24px;
`;

const ProcessEyebrow = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.roseDeep};
  text-align: center;
  margin-bottom: 48px;
`;

const ProcessList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const ProcessStep = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

const ProcessNum = styled.div`
  flex-shrink: 0;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: 40px;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1.5px ${({ theme }) => theme.colors.pink};
  @media (min-width: 640px) {
    font-size: 52px;
  }
`;

const ProcessBody = styled.div`
  padding-top: 4px;
`;

const ProcessTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 19px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 8px;
`;

const ProcessText = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.inkSoft};
  max-width: 52ch;
`;

const Section = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 72px 20px 48px;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 56px;
`;

const Stat = styled.div`
  min-width: 0;
  text-align: center;
  padding: 0 8px;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  &:first-child {
    border-left: none;
  }
`;

const StatValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
`;

const StatLabel = styled.div`
  font-size: 11.5px;
  color: ${({ theme }) => theme.colors.inkFaint};
  margin-top: 6px;
  line-height: 1.3;
  letter-spacing: 0.02em;
`;

const Quote = styled.div`
  position: relative;
  padding: 8px 0 8px 28px;
  margin-bottom: 64px;
  border-left: 2px solid ${({ theme }) => theme.colors.pink};
`;

const QuoteMark = styled.div`
  position: absolute;
  top: -22px;
  left: 14px;
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 64px;
  color: ${({ theme }) => theme.colors.pink};
  line-height: 1;
`;

const QuoteText = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.inkSoft};
`;

const GridTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.roseDeep};
  margin-bottom: 20px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 4px;
  text-decoration: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition: padding-left 0.2s ease, opacity 0.2s ease;
  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  &:hover {
    padding-left: 10px;
  }
  svg:last-child {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.inkFaint};
    flex-shrink: 0;
    margin-left: auto;
  }
`;

const ListIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.pinkPale};
  color: ${({ theme }) => theme.colors.roseDeep};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ListText = styled.div``;

const ListLabel = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 2px;
`;

const ListBlurb = styled.div`
  font-size: 12px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.inkFaint};
`;
