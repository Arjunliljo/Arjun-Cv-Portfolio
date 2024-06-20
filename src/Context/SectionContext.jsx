import { createContext } from "preact";
import { useContext, useEffect, useReducer, useRef } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";

const SectionContext = createContext();

function SectionProvider({ children }) {
  const reduxDispatch = useDispatch();

  return (
    <SectionContext.Provider value={{}}>{children}</SectionContext.Provider>
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
