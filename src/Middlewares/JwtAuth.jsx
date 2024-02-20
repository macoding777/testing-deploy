const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem('jwtToken');
    return token;
  };
  
import React, { createContext } from 'react';

const JwtAuthContext = createContext();

const JwtAuthProvider = ({ children }) => {
  const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem('jwtToken');
    return token;
  };

  return (
    <JwtAuthContext.Provider value={{ getTokenFromLocalStorage }}>
      {children}
    </JwtAuthContext.Provider>
  );
};

export { JwtAuthContext, JwtAuthProvider };
  