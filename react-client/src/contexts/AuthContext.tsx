import React, { createContext, useState, ReactNode, useContext } from 'react';
import { SignInData, SignInResponse, User } from '../interfaces/User';
import { signIn } from '../api/api';

interface AuthContextType {
  auth: User | null;
  setAuth: (auth: User | null) => void;
  login: (data: SignInData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<User | null>(null);

  const login = async (data: SignInData) => {
    const userData = await signIn(data);
    setAuth(userData);
    console.log(auth);
    
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
