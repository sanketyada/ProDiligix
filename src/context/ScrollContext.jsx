import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const { pathname } = useLocation();

  // Automatically scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const scrollToTop = (smooth = true) => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  return (
    <ScrollContext.Provider value={{ scrollToTop }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
