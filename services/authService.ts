import * as SecureStore from 'expo-secure-store';

export const signIn = async (username: string, password: string): Promise<{ token: string }> => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (username === 'testuser' && password === '123456') {
        return { token: 'dummyToken123' };
    }
    throw new Error('Username or password is incorrect.');
};

export const signOut = async () => {
    await SecureStore.deleteItemAsync('authToken');
};
