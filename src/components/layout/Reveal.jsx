import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Fades + slides a section into place the first time it scrolls into view —
// the "each scroll beat lands cleanly" transition principle from the
// reference site, without pinning/scroll-jacking the page.
const Reveal = ({ children, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver !== "function") {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Large bottom margin so the reveal fires well before the section
      // reaches the viewport — a safety margin against full-page capture
      // tools and fast/instant scrolls that can otherwise skip the
      // intersection entirely and leave the section stuck invisible.
      { threshold: 0, rootMargin: "0px 0px 600px 0px" }
    );
    observer.observe(node);

    // Hard fallback: never leave content permanently hidden even if the
    // observer never fires for some reason.
    const fallback = setTimeout(() => setVisible(true), 1800);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <Box ref={ref} $visible={visible} {...rest}>
      {children}
    </Box>
  );
};

export default Reveal;

const Box = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : "28px")});
  transition: opacity 0.7s ease, transform 0.7s ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;
