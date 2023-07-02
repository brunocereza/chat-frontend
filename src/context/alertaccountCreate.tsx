import { ReactNode, createContext, useContext, useState } from "react";

const Context = createContext({
  alertState: false,
  setAlertState: (e: any) => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [alertState, setAlertState] = useState(false);

  return (
    <Context.Provider value={{ alertState, setAlertState }}>
      {children}
    </Context.Provider>
  );
};

export const contextAlert = () => useContext(Context);
