import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderBlock from '../components/Header'
import QuestTabs from '../components/QuestTabs'

const quests = () => {
  const [selectedTab, setSelectedTab] = useState('Holding')

  const questTabs = [
    { key: 'Holding', label: 'Holding', count: 3 },
    { key: 'Completed', label: 'Completed' },
    { key: 'Period', label: 'Period' },
    { key: 'Expired', label: 'Expired' },
  ]

  const questList = Array.from({ length: 20 }, (_, i) => `Quest ${i + 1}`)

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <HeaderBlock title="My Quest" titleClassName="text-black font-rubik-semibold" />

      {/* Background Image */}
      <View style={[StyleSheet.absoluteFillObject, { height: 256, zIndex: -1 }]}>
        <View className="h-52 rounded-b-3xl overflow-hidden">
          <Image
            source={require('../../assets/images/background-1.jpeg')}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Floating Card */}
      <View className="absolute inset-x-0 top-40 z-10 px-5">
        <View className="bg-[#fcf9e3] p-5 rounded-2xl w-full">
          <View className="flex-row justify-between items-center border-b border-dashed border-gray-300 pb-3">
            <Text className="text-yellow-600 font-rubik-bold text-lg">
              My Point (s)
            </Text>
            <Text className="text-blue-600 font-rubik-semibold text-xl">
              800
              <Text className="text-black font-rubik-semibold text-xl"> / 500</Text>
            </Text>
          </View>

          <View style={{ height: 2, overflow: 'hidden' }} className="my-2">
            <View
              style={{
                height: 2,
                borderWidth: 2,
                borderColor: '#ddd',
                borderStyle: 'dashed',
              }}
            />
          </View>

          <View className="relative mt-2">
            <View className="space-y-2 pr-24">
              <Text className="text-gray-400 text-base font-rubik-regular">
                Time left until period ends
              </Text>
              <Text className="text-red-500 font-rubik-bold text-lg">
                5 Months 29 Days
              </Text>
              <Text className="text-gray-700 font-rubik-regular text-base">
                31/05/2022 – 30/11/2022
              </Text>
            </View>

            <Image
              source={require('../../assets/images/robot.png')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                position: 'absolute',
                right: 0,
                top: -10,
              }}
            />
          </View>
        </View>
      </View>

      {/* Content: Tabs + Scrollable QuestList */}
      <View className="flex-1">
        <QuestTabs
          tabs={questTabs}
          selected={selectedTab}
          onSelect={setSelectedTab}
        />

        <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}>
          <View className="space-y-3 mt-4">
            {questList.map((q, idx) => (
              <View key={idx} className="bg-white p-4 rounded-xl shadow-sm">
                <Text className="font-rubik-regular text-gray-800">{q}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default quests
