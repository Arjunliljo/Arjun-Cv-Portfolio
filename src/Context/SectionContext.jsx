import { createContext } from "preact";
import {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";

const SectionContext = createContext();

function SectionProvider({ children }) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 600 && window.innerWidth < 900
  );

  const [isTab, setIsTab] = useState(
    window.innerWidth > 600 && window.innerWidth <= 1400
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600 && window.innerWidth < 900);
      setIsTab(window.innerWidth > 600 && window.innerWidth <= 1400);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
