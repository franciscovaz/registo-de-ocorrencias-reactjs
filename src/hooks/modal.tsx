import React, { createContext, useState, useCallback, useContext } from 'react';

interface ModalContextData {
  isShowing: boolean;
  toggle(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = useCallback(() => {
    setIsShowing(!isShowing);
  }, [isShowing]);

  return (
    <ModalContext.Provider value={{ isShowing, toggle }}>
      {children}
    </ModalContext.Provider>
  );
};

//hook
function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be within an ModalProvider.');
  }
  return context;
}

export { ModalProvider, useModal };
