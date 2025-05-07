// utils/transfer/resetTransferState.ts
export const resetTransferState = ({
    setAmount,
    setSelectedUserIds,
    setTransferTypeId,
    setLatestUsers,
  }: {
    setAmount: (n: number | null) => void;
    setSelectedUserIds: (ids: string[]) => void;
    setTransferTypeId: (id: string) => void;
    setLatestUsers: (users: { id: string; name: string; avatar: string }[]) => void;
  }) => {
    setAmount(null);
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
  