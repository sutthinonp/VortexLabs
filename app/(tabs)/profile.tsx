import icons from '@/constants/icons';
import images from '@/constants/images';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useState } from 'react';
import {
    Image,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    const router = useRouter();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleConfirmLogout = async () => {
        setShowLogoutModal(false);
        await SecureStore.deleteItemAsync('authToken');
        router.replace('/sign-in');
    };

    return (
        <SafeAreaView className="h-full bg-gray-100">
            <ScrollView contentContainerClassName="pb-20 px-3">
                <View className="bg-white rounded-2xl p-5 mt-5 shadow-none">
                    <View className="flex-row justify-between items-center">
                        <View className="flex-row items-center">
                            <Image source={images.avatar} className="w-16 h-16 rounded-full" />
                            <View className="ml-3">
                                <Text className="text-lg font-bold">Namphuu DEV</Text>
                                <Text className="text-gray-400">Programmer</Text>
                            </View>
                        </View>
                        <TouchableOpacity className="bg-gray-100 px-3 py-1 rounded-lg">
                            <Text className="text-primary-500 font-medium">Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="bg-white rounded-2xl p-5 mt-5 shadow-none">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="font-bold text-lg">Statistics</Text>
                        <TouchableOpacity>
                            <Text className="text-primary-500">More Details</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-between">
                        <View className="items-center">
                            <Text className="font-bold text-xl">125</Text>
                            <Text className="text-gray-400 text-sm">Total Shipping</Text>
                        </View>
                        <View className="items-center">
                            <Text className="font-bold text-xl">5 ⭐</Text>
                            <Text className="text-gray-400 text-sm">Rating</Text>
                        </View>
                        <View className="items-center">
                            <Text className="font-bold text-xl">1500</Text>
                            <Text className="text-gray-400 text-sm">Point</Text>
                        </View>
                        <View className="items-center">
                            <Text className="font-bold text-xl">25</Text>
                            <Text className="text-gray-400 text-sm">Review</Text>
                        </View>
                    </View>
                </View>
                <View className="bg-white rounded-2xl p-5 mt-5 shadow-none">
                    {[
                        { title: 'Privacy & Security', icon: icons.shield },
                        { title: 'Notification Preference', icon: icons.bell },
                        { title: 'Payment Method', icon: icons.wallet },
                        { title: 'Language', icon: icons.language },
                    ].map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            className="flex-row justify-between items-center py-4 border-b border-gray-200"
                        >
                            <View className="flex-row items-center">
                                <Image source={item.icon} className="w-6 h-6 mr-4" />
                                <Text className="text-base">{item.title}</Text>
                            </View>
                            <Image source={icons.rightArrow} className="w-4 h-4" />
                        </TouchableOpacity>
                    ))}
                </View>
                <View className="bg-white rounded-2xl p-5 mt-5 shadow-none">
                    <TouchableOpacity
                        onPress={() => setShowLogoutModal(true)}
                        className="flex-row justify-between items-center"
                    >
                        <View className="flex-row items-center">
                            <Image source={icons.logout} className="w-6 h-6 mr-4" />
                            <Text className="text-base text-danger">Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal
                visible={showLogoutModal}
                transparent
                animationType="fade"
                onRequestClose={() => setShowLogoutModal(false)}
            >
                <View className="flex-1 justify-center items-center bg-black/40 px-6">
                    <View className="bg-white p-4 rounded-2xl w-full">
                        <Text className="text-lg font-bold text-center mb-4">ยืนยันออกจากระบบ?</Text>
                        <View className="flex-row justify-between mt-4">
                            <TouchableOpacity
                                className="flex-1 mr-2 py-3 rounded-2xl bg-gray-200"
                                onPress={() => setShowLogoutModal(false)}
                            >
                                <Text className="text-center font-semibold">ยกเลิก</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                className="flex-1 ml-2 py-3 rounded-2xl bg-red-500"
                                onPress={handleConfirmLogout}
                            >
                                <Text className="text-center text-white font-semibold">ออกจากระบบ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
};

export default Profile;
