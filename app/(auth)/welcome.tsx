// app/welcome.tsx
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import images from '@/constants/images';

export default function Welcome() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-white px-6 justify-center">
            <Image
                source={images.onboarding}
                className="w-full h-2/5 mb-8"
                resizeMode="contain"
            />
            <Text className="text-2xl font-bold text-black mb-2">Localshop</Text>
            <Text className="text-lg text-black mb-4">
                Everything you need is in one place
            </Text>
            <Text className="text-gray-500 mb-12">
                Find your daily necessities at Brand. The world’s largest fashion e-commerce has arrived in a mobile app—shop now!
            </Text>


            <TouchableOpacity
                onPress={() => router.push('/sign-in?from=welcome')}
                className="bg-purple-500 rounded-full py-4 mb-4"
            >
                <Text className="text-center text-white font-bold text-lg">
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.push('/sign-in')}
                className="border border-purple-500 rounded-full py-4"
            >
                <Text className="text-center text-purple-500 font-bold text-lg">
                    Register
                </Text>
            </TouchableOpacity>
        </View>
    );
}
