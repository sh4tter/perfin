import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User, LoginRequest, RegisterRequest, AuthContextType } from '../types/auth';
import { authAPI } from '../services/api';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth data on app load
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser && storedUser !== 'undefined') {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        // Clear invalid data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginRequest): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await authAPI.login(credentials);
      
      const { token: newToken, user: newUser } = response.data;
      
      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      setToken(newToken);
      setUser(newUser);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterRequest): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await authAPI.register(userData);
      
      const { token: newToken, user: newUser } = response.data;
      
      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      setToken(newToken);
      setUser(newUser);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
