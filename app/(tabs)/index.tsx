import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { useRouter } from 'expo-router';

import TaskListIcon from '@/assets/icons/ListTodo.svg';
import TreasureIcon from '@/assets/icons/treasure.svg';
import SpaceShipIcon from '@/assets/icons/SpaceShip.svg';
import QuestionListIcon from '@/assets/icons/question-list.svg';

type ProgramItem = {
  title: string;
  description: string;
  color: string;
  gradient: [string, string];
  borderColor: string;
  badge: string | null;
  icon: any;
  badgeColor: string | null;
  borderClass: string;
  textClass: string;
};

const programs: ProgramItem[] = [
  {
    title: 'Task',
    description: 'Manage your task\nand clear them',
    color: '#e7effe',
    gradient: ['#f0f5ff', '#e0ecff'],
    borderColor: '#93c5fd',
    badge: '10',
    icon: TaskListIcon,
    badgeColor: 'text-blue-500',
    borderClass: 'border-blue-500',
    textClass: 'text-black',
  },
  {
    title: 'Coin',
    description: 'Anakin!! I am your father',
    color: '#fcf9e3',
    gradient: ['#fefce8', '#fef9c3'],
    borderColor: '#facc15',
    badge: null,
    icon: TreasureIcon,
    badgeColor: null,
    borderClass: 'border-yellow-500',
    textClass: 'text-black',
  },
  {
    title: 'Quest',
    description: 'Hurry up! You have\nquests to do',
    color: '#ddf7d9',
    gradient: ['#e0fbe2', '#c6f6d5'],
    borderColor: '#4ade80',
    badge: '3',
    icon: SpaceShipIcon,
    badgeColor: 'text-green-500',
    borderClass: 'border-green-500',
    textClass: 'text-green-700',
  },
  {
    title: 'Questionnaire',
    description: 'Hello, I am wondering...',
    color: '#f9e4e2',
    gradient: ['#fde8e8', '#fcd5ce'],
    borderColor: '#f87171',
    badge: '1',
    icon: QuestionListIcon,
    badgeColor: 'text-red-500',
    borderClass: 'border-red-500',
    textClass: 'text-red-700',
  },
];

export default function Home() {

  const router = useRouter();
  const handlePress = (index: number) => {
    switch (index) {
      case 0:
        router.push('/(pages)/task');
        break;
      case 1:
        router.push('/(pages)/coins');
        break;
      case 2:
        router.push('/(pages)/quests');
        break;
      case 3:
        router.push('/(pages)/questionnaire');
        break;
      default:
        break;
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="relative">
        <View className="relative h-64 rounded-b-3xl overflow-hidden">
          <Image
            source={require('../../assets/images/background.jpeg')}
            className="absolute w-full h-full"
            resizeMode="cover"
          />
          <View className="flex-1 px-5 pt-2 pb-20 justify-end">
            <Text className="text-white text-xl font-bold">Welcome back!</Text>
            <Text className="text-white text-lg">Take a breath. You're doing great.</Text>
            <Text className="text-white text-sm mt-1">Vortex Labs.</Text>
          </View>
        </View>
        <View className="absolute left-5 right-5 top-52 bg-[#fcf9e3] p-4 shadow-none rounded-2xl z-20">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-gray-800 text-lg">
              <Text className="font-bold">Coin: </Text>
              <Text className="text-yellow-700 font-bold">225.80</Text>
            </Text>
            <Text className="text-lg">
              <Text className="text-blue-600 font-bold">0</Text>
              <Text className="text-black font-bold"> / 40</Text>
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-500 text-md flex-1 pr-3">
              Coin amount that can{''}be transferred today
            </Text>
            <TouchableOpacity className="bg-yellow-400 px-12 py-2.5 rounded-full"
              onPress={() => router.push('/(pages)/transfer')}>
              <Text className="text-white font-rubik-bold text-md">Transfer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView className="p-5 mt-20">
        <Text className="text-lg font-bold text-gray-800 mb-4">{programs.length} Programs</Text>

        {programs.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(index)}
              className="p-4 rounded-xl mb-3 flex-row justify-between items-center"
              style={{ backgroundColor: item.color }}
            >
              <View className="flex-row items-center gap-4">
                <View className="relative">
                  <LinearGradient
                    colors={item.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 16,
                      borderWidth: 2,
                      borderColor: item.borderColor,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <View
                      style={{
                        width: 44,
                        height: 44,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <IconComponent
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </View>
                  </LinearGradient>

                  {item.badge && (
                    <View
                      className={`absolute -top-2 -left-2 bg-white rounded-full border-1 w-6 h-6 flex items-center justify-center shadow-xl ${item.borderClass}`}
                    >
                      <Text className={`text-xs font-semibold ${item.badgeColor}`}>{item.badge}</Text>
                    </View>
                  )}
                </View>

                <View>
                  <Text className={`font-semibold text-base ${item.textClass}`}>{item.title}</Text>
                  <Text className="text-gray-500 text-md">{item.description}</Text>
                </View>
              </View>

              <View
                className={`w-12 h-12 rounded-full bg-white border flex items-center justify-center ${item.borderClass}`}
              >
                <Ionicons name="arrow-forward" size={16} color="#4B5563" />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
