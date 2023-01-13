import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // browser buttons (back, forward) force rerender
  // to avoid this handler intercept it
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    // always remove event listeners
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  // path w`ll navigate to (ex '/dropdown')
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};
export { NavigationProvider };
export default NavigationContext;
