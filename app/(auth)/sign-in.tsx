import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter, useNavigation } from 'expo-router';

import icons from '@/constants/icons';
import { useAuth } from '@/contexts/AuthContext';

export default function SignIn() {
  const router = useRouter();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const { from } = useLocalSearchParams();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { login } = useAuth();

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      await login(username, password);
      router.replace('/');
    } catch (error: any) {
      console.log(error);
      setErrorMessage('Username หรือ Password ไม่ถูกต้อง');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      router.replace('/');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView className="flex-1 bg-white">
        {from === 'welcome' && (
          <TouchableOpacity
            onPress={handleBack}
            style={{
              position: 'absolute',
              top: insets.top + 0,
              left: insets.left + 10,
              zIndex: 10,
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 2,
            }}
          >
            <Image source={icons.backArrow} style={{ width: 20, height: 20 }} resizeMode="contain" />
          </TouchableOpacity>
        )}

        <View className="flex-1 px-6 pt-16">
          <View className="items-center mb-6">
            <View className="w-24 h-24 bg-gray-100 rounded-full justify-center items-center">
              <Image source={icons.dog} className="w-12 h-12" />
            </View>
          </View>

          <Text className="text-3xl font-bold text-black mb-1">Login</Text>
          <Text className="text-gray-500 mb-8">Login to continue using the app</Text>

          <Text className="text-gray-700 mb-2">Username</Text>
          <View className="mb-4">
            <TextInput
              placeholder="Enter your username"
              placeholderTextColor="#999"
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                setErrorMessage('');
              }}
              autoCapitalize="none"
              className="bg-gray-100 rounded-xl px-4 py-3"
            />
          </View>

          <Text className="text-gray-700 mb-2">Password</Text>
          <View className="flex-row items-center bg-gray-100 rounded-xl mb-2 px-4">
            <TextInput
              placeholder="Enter password"
              placeholderTextColor="#999"
              secureTextEntry={!showPwd}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrorMessage('');
              }}
              className="flex-1 py-3"
            />
            <TouchableOpacity onPress={() => setShowPwd(!showPwd)}>
              {/* <Image source={icons.eye} className="w-6 h-6" resizeMode="contain" /> */}
            </TouchableOpacity>
          </View>

          {errorMessage !== '' && (
            <Text className="text-red-500 text-start mt-4">{errorMessage}</Text>
          )}

          <TouchableOpacity
            onPress={handleLogin}
            disabled={isLoading}
            className={`rounded-full py-4 mb-6 flex-row justify-center items-center mt-8 ${isLoading ? 'bg-[#95bfeb]' : 'bg-[#6c9cd6]'
              }`}
          >
            {isLoading ? (
              <>
                <ActivityIndicator color="#fff" size="small" />
                <Text className="text-white font-bold text-lg ml-2">กำลังเข้าสู่ระบบ</Text>
              </>
            ) : (
              <Text className="text-white font-bold text-lg">เข้าสู่ระบบ</Text>
            )}
          </TouchableOpacity>

          <View className="flex-row justify-center">
            <Text className="text-gray-500">ลืมรหัสผ่านโปรดติดต่อ </Text>
            <TouchableOpacity onPress={() => router.push('/welcome')}>
              <Text className="text-[#6c9cd6] font-bold">ติดต่อ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
