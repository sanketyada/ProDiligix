import { use } from "react";
import UserContext from "./UserContext";
import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollContext = createContext();

function UserContextProvider({ children }) {
  const name = "sanket Yadav";
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
    <UserContext.Provider value={{ name,scrollToTop  }}>{children}</UserContext.Provider>
  );
}

export default UserContextProvider;
