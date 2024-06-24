import { createContext } from "preact";
import { useContext, useEffect, useState, useMemo } from "preact/hooks";

const SectionContext = createContext();

function SectionProvider({ children }) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 600 && window.innerWidth < 900
  );

  const [isTab, setIsTab] = useState(
    window.innerWidth > 600 && window.innerWidth <= 1400
  );

  const handleResize = useMemo(() => {
    return () => {
      setIsMobile(window.innerWidth <= 600 && window.innerWidth < 900);
      setIsTab(window.innerWidth > 600 && window.innerWidth <= 1400);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <SectionContext.Provider
      value={{
        isMobile,
        isTab,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

function useSection() {
  const context = useContext(SectionContext);

  if (!context) {
    throw new Error("useSection must be used within a SectionProvider");
  }

  return context;
}

export { SectionProvider, useSection };
