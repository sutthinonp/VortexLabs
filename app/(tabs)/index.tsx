import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import TaskListIcon from "@/assets/icons/task-list.svg";

export default function Home() {
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
            <Text className="text-white text-xl font-bold">Hello...</Text>
            <Text className="text-white text-lg">Lorem ipsum!</Text>
            <Text className="text-white text-sm mt-1">Wolves corporation</Text>
          </View>
        </View>
        <View className="absolute left-5 right-5 top-52 bg-yellow-100 p-4 shadow-none rounded-2xl z-20">
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
              Coin amount that can{'\n'}be transferred today
            </Text>
            <TouchableOpacity className="bg-yellow-400 px-12 py-2.5 rounded-full">
              <Text className="text-white font-rubik-bold text-md">Transfer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView className="p-5 mt-20">
        <Text className="text-lg font-bold text-gray-800 mb-4">1 Program</Text>

        {/* Task */}
        <TouchableOpacity className="bg-[#e7effe] p-4 rounded-xl mb-3 flex-row justify-between items-center">
          <View className="flex-row items-center gap-4">
            {/* Icon Box + Badge */}
            <View className="relative">
              <LinearGradient
                colors={['#f0f5ff', '#e0ecff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: '#93c5fd',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TaskListIcon width="70%" height="70%" preserveAspectRatio="xMidYMid meet" />
              </LinearGradient>

              <View className="absolute -top-2 -left-2 bg-white rounded-full border-1 border-blue-300 w-6 h-6 flex items-center justify-center shadow-xl">
                <Text className="text-xs font-semibold text-blue-500">10</Text>
              </View>
            </View>

            {/* Texts */}
            <View>
              <Text className="text-black font-semibold text-base">Task</Text>
              <Text className="text-gray-500 text-sm">Manage your task and clear them</Text>
            </View>
          </View>

          {/* Arrow */}
          <View className="w-12 h-12 rounded-full border border-blue-500 bg-white flex items-center justify-center">
            <Ionicons name="arrow-forward" size={16} color="#4B5563" />
          </View>
        </TouchableOpacity>
        
        {/* Coin */}
        <TouchableOpacity className="bg-[#fcf9e3] p-4 rounded-xl mb-3 flex-row justify-between items-center">
          <View className="flex-row items-center gap-4">
            <View className="relative">
              <LinearGradient
                colors={['#fefce8', '#fef9c3']} // เหลืองนุ่ม ๆ
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: '#facc15',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ionicons name="wallet-outline" size={28} color="#F59E0B" />
              </LinearGradient>
            </View>

            <View>
              <Text className="text-black font-semibold text-base">
                Coin: <Text className="text-yellow-700 font-semibold text-base">255.80</Text>
              </Text>
              <Text className="text-gray-500 text-sm">Anakin!! I am your father</Text>
            </View>
          </View>

          <View className="w-12 h-12 rounded-full border border-yellow-500 bg-white flex items-center justify-center">
            <Ionicons name="arrow-forward" size={16} color="#4B5563" />
          </View>
        </TouchableOpacity>

        {/* Quest */}
        <TouchableOpacity className="bg-[#ddf7d9] p-4 rounded-xl mb-3 flex-row justify-between items-center">
          <View className="flex-row items-center gap-4">
            <View className="relative">
              <LinearGradient
                colors={['#e0fbe2', '#c6f6d5']} // เขียวนวล ๆ
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: '#4ade80',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ionicons name="rocket-outline" size={28} color="#10B981" />
              </LinearGradient>

              <View className="absolute -top-2 -left-2 bg-white rounded-full border-1 border-green-300 w-6 h-6 flex items-center justify-center shadow-xl">
                <Text className="text-sm font-semibold text-green-500">3</Text>
              </View>
            </View>

            <View>
              <Text className="text-green-700 font-bold text-base">Quest</Text>
              <Text className="text-gray-500 text-sm">Hurry up! You have quests to do.</Text>
            </View>
          </View>

          <View className="w-12 h-12 rounded-full border border-green-500 bg-white flex items-center justify-center">
            <Ionicons name="arrow-forward" size={16} color="#4B5563" />
          </View>
        </TouchableOpacity>

        {/* Questionnaire */}
        <TouchableOpacity className="bg-[#f9e4e2] p-4 rounded-xl mb-10 flex-row justify-between items-center">
          <View className="flex-row items-center gap-4">
            <View className="relative">
              <LinearGradient
                colors={['#fde8e8', '#fcd5ce']} // ชมพูนวล ๆ
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: '#f87171',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ionicons name="chatbubble-ellipses-outline" size={28} color="#EF4444" />
              </LinearGradient>

              <View className="absolute -top-2 -left-2 bg-white rounded-full border-1 border-red-300 w-6 h-6 flex items-center justify-center shadow-xl">
                <Text className="text-xs font-semibold text-red-500">1</Text>
              </View>
            </View>

            <View>
              <Text className="text-red-700 font-bold text-base">Questionnaire</Text>
              <Text className="text-gray-500 text-sm">Hello, I am wondering...</Text>
            </View>
          </View>

          <View className="w-12 h-12 rounded-full border border-red-500 bg-white flex items-center justify-center">
            <Ionicons name="arrow-forward" size={16} color="#4B5563" />
          </View>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
}
