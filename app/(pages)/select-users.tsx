import { User, useTransferStore } from '@/stores/transferStore';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    RefreshControl,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBlock from '../components/Header';

const mockUsers: User[] = [
    { id: '201', name: 'Priscila', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: '202', name: 'Silvia', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: '203', name: 'Brittany', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: '204', name: 'Sian', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: '205', name: 'Chiara', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
];

export default function SelectUsersPage() {
    const router = useRouter();
    const { setAllUsers, selectedUserIds, setSelectedUserIds } = useTransferStore();
    const [selected, setSelected] = useState<string[]>(selectedUserIds);
    const [search, setSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>(mockUsers);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setAllUsers(mockUsers);
            setRefreshing(false);
        }, 1000);
    };

    useEffect(() => {
        setAllUsers(mockUsers);
    }, []);

    useEffect(() => {
        const lower = search.toLowerCase();
        const filtered = mockUsers.filter((user) => user.name.toLowerCase().includes(lower));
        setFilteredUsers(filtered);
    }, [search]);

    const toggleUser = (id: string) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
        );
    };

    const handleConfirm = () => {
        setSelectedUserIds(selected);
        router.back();
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView className="flex-1 bg-white">
                    <HeaderBlock title="Select Users" showConfirm onConfirm={handleConfirm} />
                    <View className="px-4">
                        <View className="flex-row items-center border border-gray-300 rounded-xl px-3 py-2 mb-4 bg-white">
                            <TextInput
                                value={search}
                                onChangeText={setSearch}
                                placeholder="Search User..."
                                placeholderTextColor="#9CA3AF"
                                className="flex-1 text-lg font-rubik-regular"
                                textAlignVertical="center"
                            />
                        </View>
                        <View className="flex-row justify-between items-center mb-2">
                            <Text className="text-md font-rubik-medium text-black">
                                Users ({filteredUsers.length})
                            </Text>
                            <Text className="text-md font-rubik-regular text-gray-500">
                                Choose {selected.length}
                            </Text>
                        </View>
                        {filteredUsers.length === 0 ? (
                            <Text className="text-center text-gray-400">User not found.</Text>
                        ) : (
                            <ScrollView
                                contentContainerStyle={{ paddingBottom: 300 }}
                                refreshControl={
                                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                                }
                            >
                                {filteredUsers.map((user) => {
                                    const isSelected = selected.includes(user.id);
                                    return (
                                        <TouchableOpacity
                                            key={user.id}
                                            onPress={() => toggleUser(user.id)}
                                            className="flex-row items-center justify-between py-4 border-b border-gray-100"
                                        >
                                            <View className="flex-row items-center gap-3">
                                                <Image source={{ uri: user.avatar }} className="w-14 h-14 rounded-full" />
                                                <Text className="text-base text-black font-rubik-regular">{user.name}</Text>
                                            </View>

                                            <View
                                                className={`w-8 h-8 rounded-md border-2 justify-center items-center ${isSelected ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'
                                                    }`}
                                            >
                                                {isSelected && <Text className="text-white text-md font-bold">✓</Text>}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                        )}
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
