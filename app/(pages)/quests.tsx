import CoinIcon from '@/assets/icons/coin.svg'
import React, { useMemo, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderBlock from '../components/Header'
import QuestTabs from '../components/QuestTabs'

const quests = () => {
  const [selectedTab, setSelectedTab] = useState('Holding')

  const questTabs = [
    { key: 'Holding', label: 'Holding', count: 1 },
    { key: 'Completed', label: 'Completed', count: 1 },
    { key: 'Period', label: 'Period', count: 1 },
    { key: 'Expired', label: 'Expired', count: 0 },
  ]

  const questList = [
    {
      title: 'โครงสร้าง หลังบ้านตัวใหม่ Vortex Server',
      dueDate: '28/10/2022, 17:00',
      dueStatus: '(3 days)',
      coins: 80,
      points: 50,
      dueStatusColor: 'text-yellow-500',
      status: 'Holding',
    },
    {
      title: 'Portfolio บ.',
      dueDate: '23/10/2022, 17:00',
      dueStatus: 'Late 7 days',
      coins: 100,
      points: 80,
      dueStatusColor: 'text-red-500',
      status: 'Completed',
    },
    {
      title: 'ทดลองไปพักผ่อนต่างจังหวัด 7 วัน 6 คืน',
      dueDate: '23/12/2022, 17:00',
      dueStatus: '(32 days)',
      coins: 200,
      points: 100,
      dueStatusColor: 'text-gray-400',
      status: 'Period',
    },
    {
      title: 'เขียนรายงานผลประกอบการไตรมาส 2',
      dueDate: '10/06/2023, 12:00',
      dueStatus: '(15 days)',
      coins: 120,
      points: 90,
      dueStatusColor: 'text-yellow-500',
      status: 'Holding',
    },
    {
      title: 'ประชุมวางแผนกลยุทธ์ประจำปี',
      dueDate: '15/07/2023, 09:00',
      dueStatus: '(30 days)',
      coins: 90,
      points: 70,
      dueStatusColor: 'text-yellow-500',
      status: 'Holding',
    },
    {
      title: 'ส่งแบบฟอร์มประเมินผลพนักงาน',
      dueDate: '01/05/2023, 17:00',
      dueStatus: 'Late 2 days',
      coins: 60,
      points: 40,
      dueStatusColor: 'text-red-500',
      status: 'Completed',
    },
    {
      title: 'ปรับปรุง UI หน้าเว็บหลัก',
      dueDate: '20/04/2023, 14:00',
      dueStatus: 'Late 10 days',
      coins: 150,
      points: 120,
      dueStatusColor: 'text-red-500',
      status: 'Completed',
    },
    {
      title: 'ตรวจสอบและอัปเดตฐานข้อมูลลูกค้า',
      dueDate: '30/08/2023, 10:00',
      dueStatus: '(60 days)',
      coins: 180,
      points: 140,
      dueStatusColor: 'text-gray-400',
      status: 'Period',
    },
    {
      title: 'ฝึกอบรมเทคโนโลยีใหม่',
      dueDate: '15/09/2023, 15:00',
      dueStatus: '(75 days)',
      coins: 130,
      points: 100,
      dueStatusColor: 'text-gray-400',
      status: 'Period',
    },
    {
      title: 'ส่งเอกสารขออนุมัติโครงการ',
      dueDate: '01/01/2023, 09:00',
      dueStatus: 'Expired',
      coins: 50,
      points: 30,
      dueStatusColor: 'text-gray-400',
      status: 'Expired',
    },
    {
      title: 'จัดทำรายงานงบประมาณ',
      dueDate: '15/02/2023, 18:00',
      dueStatus: 'Expired',
      coins: 70,
      points: 60,
      dueStatusColor: 'text-gray-400',
      status: 'Expired',
    },
  ]

  const filteredList = useMemo(() => {
    if (selectedTab === 'Expired') return []
    return questList.filter(q => q.status === selectedTab)
  }, [selectedTab])

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <HeaderBlock
        title="My Quest"
        titleClassName="text-black font-rubik-semibold"
      />

      <View style={[StyleSheet.absoluteFillObject, { height: 256, zIndex: -1 }]}>
        <View className="h-52 rounded-b-3xl overflow-hidden">
          <Image
            source={require('../../assets/images/background-1.jpeg')}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      </View>

      <View className="absolute inset-x-0 top-32 z-10 px-4">
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

      <View className="flex-1 mt-[170px]">
        <QuestTabs
          tabs={questTabs}
          selected={selectedTab}
          onSelect={setSelectedTab}
        />

        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="px-4">
          <View className="bg-white rounded-2xl p-4">
            {filteredList.length === 0 ? (
              <Text className="text-center py-10 text-gray-400">No quests found.</Text>
            ) : (
              filteredList.map((q, idx) => (
                <View key={idx}>
                  <View>
                    <Text className="font-rubik-semibold text-gray-900 mb-2">
                      {q.title}
                    </Text>
                    <Text className={`font-rubik-regular ${q.dueStatusColor} mb-3`}>
                      Due Date : {q.dueDate} <Text>{q.dueStatus}</Text>
                    </Text>
                    <View className="flex-row space-x-4 gap-2">
                      {/* แสดง CoinIcon */}
                      <View className="flex-row items-center bg-yellow-100 px-3 py-1 rounded-full gap-2">
                        <CoinIcon width={18} height={18} />
                        <Text className="text-yellow-700 font-rubik-semibold">{q.coins} Coins</Text>
                      </View>

                      <View className="flex-row items-center bg-blue-100 px-3 py-1 rounded-full">
                        <Text className="text-blue-700 font-rubik-semibold">{q.points} Points</Text>
                      </View>
                    </View>
                  </View>
                  {idx !== filteredList.length - 1 && (
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
                  )}
                </View>
              ))
            )}
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default quests
