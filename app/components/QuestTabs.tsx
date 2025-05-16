import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

type TabType = {
  key: string
  label: string
  count?: number
}

type QuestTabsProps = {
  tabs: TabType[]
  selected: string
  onSelect: (key: string) => void
}

export default function QuestTabs({ tabs, selected, onSelect }: QuestTabsProps) {
  return (
    <View className="h-20 mb-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
      >
        <View className="flex-row mt-4">
          {tabs.map((tab, index) => {
            const isActive = selected === tab.key
            return (
              <Pressable
                key={tab.key}
                onPress={() => onSelect(tab.key)}
                className={`min-w-[100px] px-6 py-2 rounded-full border ${
                  isActive
                    ? 'bg-blue-100 border-blue-500'
                    : 'bg-white border-gray-200'
                } ${index !== tabs.length - 1 ? 'mr-1' : ''}`}
              >
                <View className="flex-row items-center justify-center">
                  <Text
                    className={`text-base font-rubik-semibold ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  >
                    {tab.label}
                  </Text>
                  {tab.count !== undefined && (
                    <View className="ml-2 bg-red-500 rounded-full px-2 py-0.5">
                      <Text className="text-white text-xs font-bold">
                        {tab.count}
                      </Text>
                    </View>
                  )}
                </View>
              </Pressable>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
