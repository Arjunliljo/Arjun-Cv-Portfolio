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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  return (
    <SectionContext.Provider
      value={{
        isMobile,
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
