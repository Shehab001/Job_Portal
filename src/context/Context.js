import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = {
    user,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default Context;
