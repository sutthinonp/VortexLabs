import { signIn as signInService, signOut as signOutService } from '@/services/authService';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean | null;
  isAuthChecked: boolean; // ✅ เพิ่ม
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false); // ✅ เพิ่ม
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const token = await SecureStore.getItemAsync('authToken');
        setIsAuthenticated(!!token);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setIsAuthChecked(true); // ✅ รู้ว่าโหลดเสร็จแล้ว ไม่ว่า token มีหรือไม่
      }
    })();
  }, []);

  const login = async (username: string, password: string) => {
    const { token } = await signInService(username, password);
    await SecureStore.setItemAsync('authToken', token);
    setIsAuthenticated(true);
    router.replace('/');
  };

  const logout = async () => {
    await signOutService();
    await SecureStore.deleteItemAsync('authToken');
    setIsAuthenticated(false);
    router.replace('/welcome');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAuthChecked, login, logout }}>
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
