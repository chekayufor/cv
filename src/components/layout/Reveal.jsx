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
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
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
