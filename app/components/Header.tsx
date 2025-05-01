import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import icons from '@/constants/icons';
import React from 'react';

type HeaderBlockProps = {
    title: string;
};

export default function HeaderBlock({ title }: HeaderBlockProps) {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const handleBack = () => {
        try {
            router.back();
        } catch {
            router.replace('/');
        }
    };

    return (
        <View style={{ paddingBottom: 12 }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <TouchableOpacity
                    onPress={handleBack}
                    style={{
                        position: 'absolute',
                        left: insets.left,
                        width: 40,
                        height: 30,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 20,
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2,
                    }}
                >
                    <Image source={icons.backArrow} style={{ width: 20, height: 20 }} resizeMode="contain" />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 8 }}>{title}</Text>
            </View>
        </View>
    );
}

