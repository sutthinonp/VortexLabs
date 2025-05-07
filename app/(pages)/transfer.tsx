import ChevronRight from '@/assets/icons/chevron-right.svg';
import CoinIcon from '@/assets/icons/coin.svg';
import { useTransferStore } from '@/stores/transferStore';
import { useTransferActions } from '@/stores/useTransferActions';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  InteractionManager,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBlock from '../components/Header';

const amountOptions = [5, 10, 15, 20, 30, 40];

export default function Transfer() {
  const { resetTransfer, toggleUser } = useTransferActions();
  const scrollRef = useRef<ScrollView>(null);
  const [amount, setAmount] = useState<number | null>(5);
  const router = useRouter();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setAmount(null);
      resetTransfer(); // ✅ เรียก helper ที่แยก logic ออกมา
      setRefreshing(false);
    }, 1000);
  };

  const {
    latestUsers,
    selectedUserIds,
    setSelectedUserIds,
    setTransferTypeId,
    setLatestUsers,
    transferTypeId,
  } = useTransferStore();

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => {
      InteractionManager.runAfterInteractions(() => {
        setTimeout(() => {
          scrollRef.current?.scrollToEnd({ animated: true });
        }, 0);
      });
    });

    setLatestUsers([
      { id: '101', name: 'John', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { id: '102', name: 'Alice', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
      { id: '103', name: 'Max', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
      { id: '104', name: 'Emily', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
      { id: '105', name: 'Leo', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    ]);

    return () => showSub.remove();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <HeaderBlock title="Coin Transfer" />

        <ScrollView
          ref={scrollRef}
          className="p-0"
          contentContainerStyle={{ paddingBottom: 16 }}
          keyboardShouldPersistTaps="handled"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View className="bg-white p-4">
            <Text className="text-base font-rubik-semibold mb-2">5 latest lists</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row" >
              {latestUsers.map((user) => {
                const isSelected = selectedUserIds.includes(user.id);
                return (
                  <TouchableOpacity
                    key={user.id}
                    className="items-center mr-4"
                    onPress={() => toggleUser(user.id, selectedUserIds)}
                  >
                    <View
                      className={`w-16 h-16 rounded-full border-2 ${isSelected ? 'border-blue-500' : 'border-transparent'
                        }`}
                    >
                      <Image source={{ uri: user.avatar }} className="w-full h-full rounded-full" />
                    </View>
                    <Text
                      className={`text-sm text-center mt-1 font-rubik-medium ${isSelected ? 'text-blue-500 font-bold' : 'text-gray-600'
                        }`}
                    >
                      {user.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          <View className="bg-white p-4 mt-4">
            <TouchableOpacity
              className="flex-row justify-between items-center py-4 border-b border-gray-200"
              onPress={() => router.push('/(pages)/select-users')}
            >
              <View>
                <Text className="text-md font-rubik-semibold text-black">Transfer to</Text>
                <Text className="text-base text-gray-400 font-rubik-regular">Select user for Transfer</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-blue-500">{selectedUserIds.length} Users</Text>
                <ChevronRight width={14} height={14} style={{ marginLeft: 8 }} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row justify-between items-center py-4 border-b border-gray-200"
              onPress={() => router.push('/(pages)/select-transfer-type')}
            >
              <View>
                <Text className="text-md font-rubik-semibold text-black">Transfer Type</Text>
                <Text className="text-base text-gray-400 font-rubik-regular">Select Transfer Type</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-blue-500">{transferTypeId || 'None'}</Text>
                <ChevronRight width={14} height={14} style={{ marginLeft: 8 }} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Amount + Confirm */}
          <View className="bg-white p-4 mt-4">
            <Text className="font-rubik-semibold text-base mb-4">Amount</Text>
            <View className="flex-row flex-wrap gap-2 justify-between">
              {amountOptions.map((value) => (
                <TouchableOpacity
                  key={value}
                  className={`w-[30%] py-3 rounded-xl border ${amount === value ? 'bg-blue-100 border-blue-500' : 'border-gray-300'
                    }`}
                  onPress={() => setAmount(value)}
                >
                  <Text
                    className={`text-center font-rubik-regular text-lg ${amount === value ? 'text-blue-500' : 'text-base'
                      }`}
                  >
                    {value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text className="mt-4 mb-4 font-rubik-semibold text-base">
              Amount{' '}
              <Text className="text-md text-gray-400 font-rubik-regular">
                (Coins transfer today 35.03)
              </Text>
            </Text>

            <View className="flex-row items-center gap-4 border border-gray-300 rounded-xl px-4 py-3">
              <CoinIcon width={28} height={28} />
              <TextInput
                value={amount?.toString() ?? ''}
                onChangeText={(text) => setAmount(Number(text))}
                keyboardType="numeric"
                className="text-2xl font-rubik-semibold text-blue-500 flex-1"
                placeholder="0"
              />
            </View>
          </View>

          <View className="bg-white px-4 py-4">
            <TouchableOpacity className="bg-blue-500 py-4 rounded-2xl">
              <Text className="text-center text-white text-lg font-rubik-regular">Confirm</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
