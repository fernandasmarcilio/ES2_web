import React, { useState, createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);

  const login = () => {
    setSigned(true);
  }

  const logout = () => {
    setSigned(false);
  }

  return (
    <UserContext.Provider value={{
      signed,
      login,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;