import { create } from 'zustand';

export type User = {
  id: string;
  name: string;
  avatar: string;
};

type TransferStore = {
  latestUsers: User[];
  setLatestUsers: (users: User[]) => void;

  allUsers: User[];
  setAllUsers: (users: User[]) => void;

  selectedUserIds: string[];
  setSelectedUserIds: (ids: string[]) => void;

  transferTypeId: string;
  setTransferTypeId: (id: string) => void;
};

export const useTransferStore = create<TransferStore>((set) => ({
  latestUsers: [],
  setLatestUsers: (users) => set({ latestUsers: users }),

  allUsers: [],
  setAllUsers: (users) => set({ allUsers: users }),

  selectedUserIds: [],
  setSelectedUserIds: (ids) => set({ selectedUserIds: ids }),

  transferTypeId: '',
  setTransferTypeId: (id) => set({ transferTypeId: id }),
}));
