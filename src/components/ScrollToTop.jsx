import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // This grabs the current URL path
  const { pathname } = useLocation();

  // Every time the pathname changes, this runs and scrolls to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't show anything on the screen!
  return null;
};

export default ScrollToTop;
