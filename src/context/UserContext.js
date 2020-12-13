import React, { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ signed: true }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;