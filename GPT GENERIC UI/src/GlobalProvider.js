import React, {  useContext, useState } from "react";

export const GlobalContext = React.createContext();

export const useGlobalProvider=()=>{
return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const [glbVals, setGlbVals] = useState({
    telugu: false,
    scrollTop: false,
  });

  return (
    <GlobalContext.Provider value={[glbVals, setGlbVals]}>
      {children}
    </GlobalContext.Provider>
  );
}
