// hooks/useTransferActions.ts
import { useTransferStore } from '@/stores/transferStore';

export const useTransferActions = () => {
    const {
        setSelectedUserIds,
        setTransferTypeId,
        setLatestUsers,
    } = useTransferStore();

    const resetTransfer = () => {
        setSelectedUserIds([]);
        setTransferTypeId('');
        setLatestUsers([
            { id: '101', name: 'John', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
            { id: '102', name: 'Alice', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
            { id: '103', name: 'Max', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
            { id: '104', name: 'Emily', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
            { id: '105', name: 'Leo', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
        ]);
    };

    const toggleUser = (id: string, currentSelected: string[]) => {
        if (currentSelected.includes(id)) {
            setSelectedUserIds(currentSelected.filter((uid) => uid !== id));
        } else {
            setSelectedUserIds([...currentSelected, id]);
        }
    };

    return {
        resetTransfer,
        toggleUser,
    };
};
