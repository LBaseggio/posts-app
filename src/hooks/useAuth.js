import { createContext, useContext, useEffect, useState } from 'react';

import { auth, init, login as authLogin, logout as authLogout } from '../lib/auth.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    init((user) => {
      setUser(user)
    });

    auth.on('login', setUser);

    return () => {
      auth.off('login', setUser);
    }
  }, []);

  function login() {
    authLogin((user) => {
      setUser(user)
    })
  }

  function logout() {
    authLogout(() => {
      setUser(undefined)
    })
  }

  const contextValue = {
    user,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={contextValue}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}