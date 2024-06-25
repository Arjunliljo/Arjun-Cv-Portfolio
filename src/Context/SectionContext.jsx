import { createContext } from "preact";
import {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "preact/hooks";

const SectionContext = createContext();

function SectionProvider({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const contactEl = useRef(null);

  const [isTab, setIsTab] = useState(
    window.innerWidth > 600 && window.innerWidth <= 1400
  );

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 600);
    setIsTab(window.innerWidth > 600 && window.innerWidth <= 1400);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <SectionContext.Provider
      value={{
        isMobile,
        isTab,
        contactEl,
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
