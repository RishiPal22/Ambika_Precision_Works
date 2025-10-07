import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "smooth" for smooth scroll, "instant" for immediate
    });
  }, [pathname]);

  return null; // This component does not render anything
}