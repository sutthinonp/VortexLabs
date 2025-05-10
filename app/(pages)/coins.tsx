import React, { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CoinBalanceCard from '../components/CoinBalanceCard';
import HeaderBlock from '../components/Header';

const coins = () => {

    useEffect(() => {
        console.log('[DEBUG] 🪙 Coins screen mounted');
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView className="flex-1">
                <HeaderBlock title="Coin" />
                <CoinBalanceCard />

                <View className="bg-gray-100 rounded-2xl mx-4 mt-6 p-5 shadow-none">
                    <Text className="text-lg font-semibold mb-2">Coins transfer</Text>
                    <Text className="text-gray-500 text-sm mb-4">
                        Coins amount you can transfer today.
                    </Text>

                    <Text className="text-center text-2xl font-bold text-blue-500 mb-2">
                        35.80 <Text className="text-gray-400 text-xl">/40</Text>
                    </Text>

                    <TouchableOpacity className="bg-yellow-400 rounded-full py-3 mb-3">
                        <Text className="text-center text-white font-bold text-base">
                            Coin transfer
                        </Text>
                    </TouchableOpacity>

                    <Text className="text-xs text-gray-500 leading-4">
                        ⚠ If your coin transferring is not active every day.{"\n"}
                        Your coins will be automatically cut by the system. Please be
                        active on coin transferring every day.
                    </Text>
                </View>

                <View className="mx-4 mt-6">
                    <Text className="text-lg font-semibold mb-3">Other menu</Text>

                    <View className="flex-row flex-wrap gap-4">
                        {[
                            { label: 'Battle', color: 'bg-purple-400', badge: 3 },
                            { label: 'Quest', color: 'bg-yellow-300', badge: 1 },
                            { label: 'Ranking', color: 'bg-yellow-400' },
                            { label: 'History', color: 'bg-green-300' },
                            { label: 'Rules', color: 'bg-green-100' },
                        ].map((item, i) => (
                            <TouchableOpacity
                                key={i}
                                className={`w-[18%] aspect-square justify-center items-center rounded-2xl ${item.color} relative`}
                            >
                                <Text className="text-sm text-white font-bold">{item.label}</Text>
                                {item.badge && (
                                    <View className="absolute top-[-4] right-[-4] bg-red-500 rounded-full w-5 h-5 justify-center items-center">
                                        <Text className="text-white text-xs font-bold">{item.badge}</Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default coins;
