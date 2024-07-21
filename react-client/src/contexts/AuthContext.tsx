import React, { createContext, useState, ReactNode, FC } from 'react';
import { SignInData } from '../interfaces/User';
import { signIn } from '../api/api';

interface AuthContextType {
  auth: any; 
  setAuth: (auth: any) => void;
  login: (data: SignInData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<any>(null);

  const login = async (data: SignInData) => {
    const userData = await signIn(data);
    setAuth(userData);
  };

  const logout = () => {
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
