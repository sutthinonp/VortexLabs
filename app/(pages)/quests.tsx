import { View, Text } from 'react-native'
import React from 'react'
import HeaderBlock from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const quests = () => {
  return (
    <SafeAreaView>
      <View>
        <HeaderBlock title="My Quest" />
        <Text>My Quest</Text>
      </View>
    </SafeAreaView>
  )
}

export default quests