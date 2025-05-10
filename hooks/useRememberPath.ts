import { usePathname } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';

export const useRememberPath = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname &&
      pathname !== '/sign-in' &&
      pathname !== '/welcome' &&
      pathname !== '/'
    ) {
      SecureStore.setItemAsync('lastPath', pathname);
    }
  }, [pathname]);
};
