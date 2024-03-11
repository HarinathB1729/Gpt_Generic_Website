import React, { useContext, useState } from "react";

export const CommitteeContext = React.createContext();

export const useCommitteeContextProvider = () => {
  return useContext(CommitteeContext);
};

export default function AdminCommitteeProvider({ children }) {
  const [committee, setCommittee] = useState({});

  return (
    <CommitteeContext.Provider value={[committee, setCommittee]}>
      {children}
    </CommitteeContext.Provider>
  );
}
