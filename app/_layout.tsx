// app/_layout.tsx
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import './global.css';
import { SplashScreen } from 'expo-router';

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
      headerShown: false,       // ✅ ซ่อน Header ของ Stack
      gestureEnabled: true,     // ✅ เปิด Swipe Back
      animation: 'slide_from_right', // ✅ ให้ความรู้สึกเหมือน push ธรรมดา
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
