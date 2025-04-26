import React, { createContext, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { signIn as signInService, signOut as signOutService } from '@/services/authService';
import { useRouter } from 'expo-router';

interface AuthContextType {
  isAuthenticated: boolean | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const token = await SecureStore.getItemAsync('authToken');
        setIsAuthenticated(!!token);
      } catch (error) {
        setIsAuthenticated(false);
      }
    })();
  }, []);

  const login = async (email: string, password: string) => {
    const { token } = await signInService(email, password);
    await SecureStore.setItemAsync('authToken', token);
    setIsAuthenticated(true);
    router.replace('/(tabs)/index');
  };

  const logout = async () => {
    await signOutService();
    await SecureStore.deleteItemAsync('authToken');
    setIsAuthenticated(false);
    router.replace('/welcome');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
