import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderBlock from '../components/Header'

const task = () => {
  return (
    <SafeAreaView>
      <View>
        <HeaderBlock title="Task" />
        <Text>google</Text>
      </View>
    </SafeAreaView>
  )
}

export default task