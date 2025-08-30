import { create } from 'zustand';

interface User {
  userId: string | null;
  name: string | null;
  role: string | null;
  isActive: boolean;
  isLoggedIn: boolean;
}

interface UserState {
  user: User;
  setUser: (user: Partial<User>) => void;
  clearUser: () => void;
}

const initialUserState: User = {
  userId: null,
  name: null,
  role: null,
  isActive: false,
  isLoggedIn: false,
};

export const useUserStore = create<UserState>((set) => ({
  user: initialUserState,
  setUser: (newUserData) => set((state) => ({ user: { ...state.user, ...newUserData } })),
  clearUser: () => set({ user: initialUserState }),
}));

export const getUser = () => useUserStore.getState().user;
export const setUser = (user: Partial<User>) => useUserStore.getState().setUser(user);
export const clearUser = () => useUserStore.getState().clearUser();
