/* eslint-disable import/extensions */
import {
  createContext, useContext, useEffect, useState,
} from 'react';

import { init, login as authLogin } from '../lib/auth.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    init((user) => {
      setUser(user);
    });
  }, []);

  function login() {
    authLogin();
    console.log('logged in');
  }

  const contextValue = { user, login };

  return (
    <AuthContext.Provider value={{
      test: true,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
