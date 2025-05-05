import { useTransferStore } from '@/stores/transferStore';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBlock from '../components/Header';

type TransferType = {
  id: string;
  title: string;
  description: string;
  emoji?: string;
};

const mockTypes: TransferType[] = [
  { id: 'affection', title: 'Affection', description: 'There is no power greater than affection.', emoji: '💋' },
  { id: 'boredom', title: 'Boredom', description: 'Why losing coins are too easy? Boring.', emoji: '🥱' },
  { id: 'defeat', title: 'Defeat', description: 'Losing is a part of winning. Keep Going!', emoji: '😮‍💨' },
  { id: 'confusion', title: 'Confusion', description: "I don't even know why...", emoji: '🤔' },
  { id: 'love', title: 'Love', description: 'Love is in the air, wear a gas mask!', emoji: '💖' },
  { id: 'pleasure', title: 'Pleasure', description: "You're doing a great job!", emoji: '😊' },
  { id: 'sympathy', title: 'Sympathy', description: 'Sharing is caring.', emoji: '🤗' },
  { id: 'sarcastic', title: 'Sarcastic', description: 'Just rich people being rich.', emoji: '😏' },
  { id: 'appreciation', title: 'Appreciation', description: 'Pay for a precious moment.', emoji: '😌' },
];

export default function SelectTransferTypePage() {
  const router = useRouter();
  const { transferTypeId, setTransferTypeId } = useTransferStore(); // ✅
  const [selected, setSelected] = useState<string>(transferTypeId);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderBlock
        title="Transfer Type"
        showConfirm
        onConfirm={() => {
          setTransferTypeId(selected);
          router.back();
        }}
      />
      <Text className="text-sm text-gray-500 font-rubik-regular bg-gray-100 px-4 py-2">Choose Transfer Type</Text>
      <View className="px-4">
        <ScrollView>
          {mockTypes.map((type) => (
            <TouchableOpacity
              key={type.id}
              onPress={() => setSelected(type.id)}
              className="py-3 border-b border-gray-100"
            >
              <View className="flex-row items-center">
                <View className="flex-1">
                  <Text
                    className={`text-md font-rubik-semibold ${selected === type.id ? 'text-blue-500' : 'text-black'
                      }`}
                  >
                    {type.emoji} By {type.title}
                  </Text>
                  <Text className="text-sm text-gray-500 font-rubik-regular">
                    {type.description}
                  </Text>
                </View>
                {selected === type.id && (
                  <View className="w-6 h-6 justify-center items-center">
                    <Text className="text-blue-500 text-xl">✓</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
