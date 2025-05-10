import { useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CoinBalanceCard from '../components/CoinBalanceCard';
import HeaderBlock from '../components/Header';

import QuestIcon from '@/assets/icons/game-potion.svg';
import BattleIcon from '@/assets/icons/game-xbox.svg';
import RulesIcon from '@/assets/icons/paper-list.svg';
import RankingIcon from '@/assets/icons/ranking-list.svg';
import HistoryIcon from '@/assets/icons/task-coin.svg';

type MenuItem = {
    label: string;
    color: string;
    gradient: [string, string];
    badge: any;
    icon: any;
};

const menuItems: MenuItem[] = [
    {
        label: 'Battle',
        color: '#6b7bf8',
        gradient: ['#c4b5fd', '#8b5cf6'],
        icon: BattleIcon,
        badge: 3,
    },
    {
        label: 'Quest',
        color: '#fde68a',
        gradient: ['#fcd34d', '#fbbf24'],
        icon: QuestIcon,
        badge: 3,
    },
    {
        label: 'Ranking',
        color: '#fcd34d',
        gradient: ['#fde68a', '#facc15'],
        icon: RankingIcon,
        badge: null,
    },
    {
        label: 'History',
        color: '#79bb90',
        gradient: ['#34d399', '#10b981'],
        icon: HistoryIcon,
        badge: null,
    },
    {
        label: 'Rules',
        color: '#9ae69a',
        gradient: ['#bbf7d0', '#6ee7b7'],
        icon: RulesIcon,
        badge: null,
    },
];

const coins = () => {
    const router = useRouter();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1500);
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <HeaderBlock title="Coin" />
            <ScrollView
                className="p-0"
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <CoinBalanceCard />

                <Text className="text-lg font-rubik-semibold px-5 mt-4">Coins transfer</Text>
                <View className="bg-gray-100 rounded-2xl mx-4 mt-2 p-5 shadow-none">
                    <Text className="text-gray-500 text-md mb-4 font-rubik-regular">
                        Coins amount you can transfer today.
                    </Text>

                    <Text className="text-center text-2xl font-rubik-bold text-blue-600">
                        35.45 <Text className="text-black text-xl">/40</Text>
                    </Text>

                    <View style={{ height: 2, overflow: 'hidden' }} className="my-4">
                        <View
                            style={{
                                height: 2,
                                borderWidth: 2,
                                borderColor: '#ddd',
                                borderStyle: 'dashed',
                            }}
                        />
                    </View>

                    <TouchableOpacity className="bg-yellow-400 rounded-full py-3 mb-3" onPress={() => router.push('/(pages)/transfer')}>
                        <Text className="text-center text-white font-rubik-bold text-base">
                            Coin transfer
                        </Text>
                    </TouchableOpacity>

                    <View className="w-full flex-row items-start gap-3">
                        <Text className="text-gray-500 text-sm font-bold">⚠</Text>
                        <Text className="flex-1 text-sm text-gray-500 leading-5 font-rubik-regular text-left">
                            If your coin transferring is not active every day.{"\n"}
                            Your coins will be automatically cut by the system.{"\n"}
                            Please be active on coin transferring every day.
                        </Text>
                    </View>
                </View>

                {/* Other Menu */}
                <View className="mx-4 mt-2">
                    <Text className="text-lg font-semibold mb-3">Other menu</Text>

                    <View className="flex-row flex-wrap gap-4 justify-between">
                        {menuItems.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <View key={index} className="items-center w-[20%]">
                                    <View className="relative">
                                        <TouchableOpacity
                                            className="w-[64px] h-[64px] rounded-2xl items-center justify-center"
                                            style={{ backgroundColor: item.color }}
                                        >
                                            <IconComponent width="60%" height="60%" />
                                        </TouchableOpacity>

                                        {item.badge && (
                                            <View className="absolute -top-1 -right-1 bg-white rounded-full w-5 h-5 items-center justify-center shadow-sm">
                                                <Text className="text-black text-xs font-rubik-regular">{item.badge}</Text>
                                            </View>
                                        )}
                                    </View>

                                    <Text className="text-xs font-rubik-medium text-black mt-2 text-center">
                                        {item.label}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default coins;
