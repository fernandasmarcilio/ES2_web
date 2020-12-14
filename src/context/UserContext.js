import React, { useState, createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [loginData, setLoginData] = useState(null);

  const login = (loginObj, callback) => {
    fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      body: JSON.stringify(loginObj),
      headers: { "Content-Type" : "application/json" },
      method: 'POST'
    })
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(json => {
      setLoginData(json);
      setSigned(true);
      callback();
    });
  }

  const logout = () => {
    setSigned(false);
  }

  const register = (userData, callback) => {
    const registerData = {
      matricula: null,
      nome: userData.name,
      email: userData.email,
      professor: false
    };

    fetch(`${process.env.REACT_APP_API_URL}/usuario/`, {
      body: JSON.stringify(registerData),
      headers: { "Content-Type" : "application/json" },
      method: 'POST'
    })
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(json => {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA");
      callback(json);
    });
  }

  return (
    <UserContext.Provider value={{
      signed,
      login,
      logout,
      register,
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;