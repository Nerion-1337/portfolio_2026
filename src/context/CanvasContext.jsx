import { createContext, useContext, useRef } from "react";

const CanvasContext = createContext(null);

export const CanvasProvider = ({ children }) => {
  const textRef = useRef(null);

  return (
    <CanvasContext.Provider value={{ textRef }}>
      {children}
    </CanvasContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCanvasContext = () => useContext(CanvasContext);
