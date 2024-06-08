import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from '../api/axios'; 
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, passwordConfirmation: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
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

const setAuthorizationHeader = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setAuthorizationHeader(token);
      try {
        const { data } = await axios.get('/api/user');
        setUser(data);
      } catch (error) {
        setUser(null);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchCsrfToken = async () => {
    await axios.get('/sanctum/csrf-cookie');
  };
  
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await fetchCsrfToken();
      const { data } = await axios.post('/api/login', { email, password });
      localStorage.setItem('auth_token', data.token);
      setAuthorizationHeader(data.token);
      setUser(data.user);
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, passwordConfirmation: string) => {
    setLoading(true);
    setError(null);
    try {
      await fetchCsrfToken();
      const { data } = await axios.post('/api/register', { 
        name, email, password, password_confirmation: passwordConfirmation  
      });
      localStorage.setItem('auth_token', data.token);
      setAuthorizationHeader(data.token);
      setUser(data.user);
    } catch (error) {
      console.error('Registration error:', error);
      setError('Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await fetchCsrfToken();
      await axios.post('/api/logout');
      localStorage.removeItem('auth_token');
      setAuthorizationHeader(null);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      setError('Failed to logout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
