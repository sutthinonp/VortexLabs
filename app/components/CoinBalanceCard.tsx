import React from 'react';
import { ImageBackground, Text } from 'react-native';

const CoinBalanceCard = () => {
    return (
        <ImageBackground
            source={require('@/assets/images/background-2.jpeg')}
            resizeMode="cover"
            className="rounded-2xl overflow-hidden mx-4 mt-4 h-48 justify-center items-center"
        >
            <Text className="text-white text-sm font-rubik-semibold">Your Coin Balance</Text>
            <Text className="text-white text-4xl font-rubik-bold mt-1">1209</Text>
        </ImageBackground>
    );
};

export default CoinBalanceCard;
