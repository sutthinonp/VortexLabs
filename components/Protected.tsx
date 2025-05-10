import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'expo-router';
import React, { ReactNode, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

interface ProtectedProps {
    children: ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [isRouterReady, setIsRouterReady] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsRouterReady(true);
        }, 10);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (isRouterReady && isAuthenticated === false) {
            router.replace('/welcome');
        }
    }, [isAuthenticated, isRouterReady]);

    if (isAuthenticated === null || !isRouterReady) {
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
