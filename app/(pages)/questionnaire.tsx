import { View, Text } from 'react-native'
import React from 'react'
import HeaderBlock from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const questionnaire = () => {
  return (
    <SafeAreaView>
      <View>
        <HeaderBlock title="Questionnaire" />
        <Text>Questionnaire</Text>
      </View>
    </SafeAreaView>
  )
}

export default questionnaire