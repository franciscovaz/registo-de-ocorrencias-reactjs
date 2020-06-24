import React, { createContext, useState, useCallback, useContext } from 'react';

interface ModalData {
  isShowing: boolean;
  toggle(): void;
}

const ModalContext = createContext<ModalData>({} as ModalData);

const ModalProvider: React.FC = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = useCallback(() => {
    setIsShowing(!isShowing);
  }, []);

  return (
    <ModalContext.Provider value={{ isShowing, toggle }}>
      {children}
    </ModalContext.Provider>
  );
};

//hook
function useModal(): ModalData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be within an ModalProvider.');
  }
  return context;
}

export { useModal, ModalProvider };
