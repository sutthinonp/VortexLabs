// app/_layout.tsx
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import './global.css';

SplashScreen.preventAutoHideAsync();

function RootNavigator() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0061FF" />
      </View>
    );
  }

  return <Stack
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      animation: 'slide_from_right',
    }}
  />;
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-ExtraBold': require('../assets/fonts/Rubik-ExtraBold.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
