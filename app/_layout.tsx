// app/_layout.tsx
import { Slot, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';
import './global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Rubik-Bold':      require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-ExtraBold': require('../assets/fonts/Rubik-ExtraBold.ttf'),
    'Rubik-Light':     require('../assets/fonts/Rubik-Light.ttf'),
    'Rubik-Medium':    require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular':   require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-SemiBold':  require('../assets/fonts/Rubik-SemiBold.ttf'),
  });

  const router = useRouter();

  useEffect(() => {
    if (!fontsLoaded) return;
    (async () => {

      const token = await SecureStore.getItemAsync('authToken');
      console.log('Token:', token);
      router.replace(token ? '/' : '/welcome');

      await SplashScreen.hideAsync();
    })();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Slot />;
}
