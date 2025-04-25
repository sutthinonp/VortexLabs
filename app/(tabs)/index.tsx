import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

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
              <Text className="text-blue-600 font-bold">225.80</Text>
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

        <TouchableOpacity className="bg-blue-100 p-4 rounded-xl mb-3 flex-row justify-between items-center">
          <View>
            <Text className="text-blue-800 font-bold text-base">Task</Text>
            <Text className="text-gray-600 text-sm">Manage your task and clear them</Text>
          </View>
          <View className="w-12 h-12 rounded-full border border-blue-500 bg-white flex items-center justify-center">
            <Ionicons name="arrow-forward" size={16} color="#4B5563" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-yellow-100 p-4 rounded-xl mb-3 flex-row justify-between items-center">
          <View>
            <Text className="text-yellow-700 font-bold text-base">Coin: 225.80</Text>
            <Text className="text-gray-600 text-sm">Anakin!! I am your father</Text>
          </View>
          <View className="w-12 h-12 rounded-full border border-yellow-500 bg-white flex items-center justify-center">
            <Ionicons name="arrow-forward" size={16} color="#4B5563" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-green-100 p-4 rounded-xl mb-3 flex-row justify-between items-center">
          <View>
            <Text className="text-green-700 font-bold text-base">Quest</Text>
            <Text className="text-gray-600 text-sm">Hurry up! You have quests to do.</Text>
          </View>
          <View className="w-12 h-12 rounded-full border border-green-500 bg-white flex items-center justify-center">
            <Ionicons name="arrow-forward" size={16} color="#4B5563" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-red-100 p-4 rounded-xl mb-10 flex-row justify-between items-center">
          <View>
            <Text className="text-red-700 font-bold text-base">Questionnaire</Text>
            <Text className="text-gray-600 text-sm">Hello, I am wondering...</Text>
          </View>
          <View className="w-12 h-12 rounded-full border border-red-500 bg-white flex items-center justify-center">
            <Ionicons name="arrow-forward" size={16} color="#4B5563" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
