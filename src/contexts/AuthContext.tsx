import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from '../api/axios'; 
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, passwordConfirmation: string) => Promise<void>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        try {
          const { data } = await axios.get('/api/user');
          setUser(data);
        } catch (error) {
          setUser(null);
        }
      }
    };

    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    const { data } = await axios.post('/login', { email, password });
    localStorage.setItem('auth_token', data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    setUser(data.user);
  };

  const register = async (name: string, email: string, password: string, passwordConfirmation: string) => {
    try {
      const { data } = await axios.post('/api/register', { 
        name, email, password, password_confirmation: passwordConfirmation  
      },{
      withCredentials: true
    });
      localStorage.setItem('auth_token', data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      setUser(data.user);
   
    } catch (error) {
      console.error('Failed to register', error);
      throw error; 
    }
  };

  const logout = async () => {
    await axios.post('/logout');
    localStorage.removeItem('auth_token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
