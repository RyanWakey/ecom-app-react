import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from '../api/axios';

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, passwordConfirmation: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    axios.get('/user').then(response => {
      setUser(response.data);
    }).catch(() => {
      setUser(null);
    });
  }, []);

  const login = async (email: string, password: string) => {
    const response = await axios.post('/login', { email, password });
    setUser(response.data.user);
    // Save token to localStorage or cookies if needed
  };

  const register = async (name: string, email: string, password: string, passwordConfirmation: string) => {
    const response = await axios.post('/register', {
      name, email, password, password_confirmation: passwordConfirmation
    });
    setUser(response.data.user);
    // Save token to localStorage or cookies if needed
  };

  const logout = async () => {
    await axios.post('/logout');
    setUser(null);
    // Remove token from localStorage or cookies if needed
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
