// stores/useTransferStore.ts
import { create } from 'zustand';

export type User = {
  id: string;
  name: string;
  avatar: string;
};

type TransferState = {
  latestUsers: User[];
  allUsers: User[];
  selectedUserIds: string[];
  transferTypeId: string;
};

type TransferActions = {
  setLatestUsers: (users: User[]) => void;
  setAllUsers: (users: User[]) => void;
  setSelectedUserIds: (ids: string[]) => void;
  setTransferTypeId: (id: string) => void;
};

export const useTransferStore = create<TransferState & TransferActions>((set) => ({
  latestUsers: [],
  allUsers: [],
  selectedUserIds: [],
  transferTypeId: '',

  setLatestUsers: (users) => set({ latestUsers: users }),
  setAllUsers: (users) => set({ allUsers: users }),
  setSelectedUserIds: (ids) => set({ selectedUserIds: ids }),
  setTransferTypeId: (id) => set({ transferTypeId: id }),
}));
