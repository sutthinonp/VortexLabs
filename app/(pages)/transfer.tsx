import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    InteractionManager,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'expo-router';
import HeaderBlock from '../components/Header';
import CoinIcon from '@/assets/icons/coin.svg';

const amountOptions = [5, 10, 15, 20, 30, 40];

export default function Transfer() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const scrollRef = useRef<ScrollView>(null);
    const [amount, setAmount] = useState<number | null>(5);

    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', () => {
            InteractionManager.runAfterInteractions(() => {
                setTimeout(() => {
                    scrollRef.current?.scrollToEnd({ animated: true });
                }, 0);
            });
        });

        return () => {
            showSub.remove();
        };
    }, []);

    const handleSelectAmount = (value: number) => {
        setAmount(value);
    };

    const handleBack = () => {
        if (router.canGoBack?.()) {
            router.back();
        } else {
            router.replace('/');
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
            >
                <ScrollView
                    ref={scrollRef}
                    className="p-0"
                    contentContainerStyle={{ paddingBottom: 0, flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <HeaderBlock title="Coin Transfer" />
                    <View className="bg-white p-4">
                        <Text className="text-base font-semibold">5 Latest lists</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                            {[1, 2, 3, 4, 5].map((item, index) => (
                                <View key={index} className="items-center mr-4">
                                    <Image source={{ uri: 'https://via.placeholder.com/60' }} className="w-14 h-14 rounded-full" />
                                    <Text className="text-xs text-gray-600">User {item}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    <View className='bg-white p-4 mt-4'>
                        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-gray-200">
                            <View>
                                <Text className="text-sm text-gray-400">Transfer to</Text>
                                <Text className="text-base text-black font-medium">Select user for Transfer</Text>
                            </View>
                            <Text className="text-blue-500">2 Users</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-gray-200">
                            <View>
                                <Text className="text-sm text-gray-400">Transfer Type</Text>
                                <Text className="text-base text-black font-medium">Select Transfer Type</Text>
                            </View>
                            <Text className="text-blue-500">ให้ด้วยความเสน่หา</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="bg-white p-4 mt-4">
                        <Text className="font-semibold text-base mb-4">Amount</Text>
                        <View className="flex-row flex-wrap gap-2 justify-between">
                            {amountOptions.map((value) => (
                                <TouchableOpacity
                                    key={value}
                                    className={`w-[30%] py-3 rounded-xl border ${amount === value ? 'bg-blue-100 border-blue-500' : 'border-gray-300'
                                        }`}
                                    onPress={() => handleSelectAmount(value)}
                                >
                                    <Text
                                        className={`text-center font-medium text-lg ${amount === value ? 'text-blue-500' : 'text-base'
                                            }`}
                                    >
                                        {value}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View className="flex-row justify-between items-center py-2 border-b border-gray-200"></View>

                        <Text className="mt-4 mb-4 font-semibold text-base">
                            Amount <Text className="text-sm text-gray-400">(Coins transfer today 35.03)</Text>
                        </Text>
                        <View className="flex-row items-center gap-4 border border-gray-300 rounded-xl px-4 py-3">
                            <CoinIcon width={28} height={28} />
                            <TextInput
                                value={amount?.toString() ?? ''}
                                onChangeText={(text) => setAmount(Number(text))}
                                keyboardType="numeric"
                                className="text-2xl font-semibold text-blue-500 flex-1"
                                placeholder="0"
                            />
                        </View>
                    </View>

                    <View className="bg-white px-4 py-4">
                        <TouchableOpacity className="bg-blue-500 py-4 rounded-xl">
                            <Text className="text-center text-white text-lg font-bold">Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
