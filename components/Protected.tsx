import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'expo-router';
import React, { ReactNode, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

interface ProtectedProps {
  children: ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const { isAuthenticated, isAuthChecked } = useAuth();
  const router = useRouter();
  const [isRouterReady, setIsRouterReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRouterReady(true);
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // ✅ แก้ตรงนี้: ห้าม redirect จนกว่า auth จะเช็คเสร็จ
    if (isRouterReady && isAuthChecked && isAuthenticated === false) {
      router.replace('/welcome');
    }
  }, [isAuthenticated, isAuthChecked, isRouterReady]);

  if (!isAuthChecked || !isRouterReady || isAuthenticated === null) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0061FF" />
      </View>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default Protected;
