import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // The page itself uses scroll-behavior: smooth (for things like the
    // hero's scroll cue), which would otherwise hijack this and animate
    // from wherever the previous page was scrolled to — "instant" is the
    // standard escape hatch to force an immediate jump to the top instead.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
