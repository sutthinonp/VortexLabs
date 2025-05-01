import { View, Text } from 'react-native'
import React from 'react'
import HeaderBlock from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const coins = () => {
    return (
        <SafeAreaView>
            <View>
                <HeaderBlock title="Coin" />
                <Text>Coin</Text>
            </View>
        </SafeAreaView>
    )
}

export default coins