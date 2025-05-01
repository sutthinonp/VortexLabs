import { View, Text } from 'react-native'
import React from 'react'
import HeaderBlock from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const task = () => {
  return (
    <SafeAreaView>
      <View>
        <HeaderBlock title="Task" />
        <Text>task</Text>
      </View>
    </SafeAreaView>
  )
}

export default task