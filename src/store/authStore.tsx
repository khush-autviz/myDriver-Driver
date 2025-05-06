import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define a proper User type
interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

// Define the state interface (only the data we want to persist)
interface AuthStateData {
  user: User | null;
  token: string | null;
}

// Define the full state interface including methods
interface AuthState extends AuthStateData {
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  logout: () => void;
}

type AuthStorePersist = PersistOptions<AuthState, AuthStateData>

const persistConfig: AuthStorePersist = {
  name: 'auth-storage',
  storage: {
    getItem: async (name) => {
      const value = await AsyncStorage.getItem(name);
      return value ? JSON.parse(value) : null;
    },
    setItem: async (name, value) => {
      await AsyncStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: async (name) => {
      await AsyncStorage.removeItem(name);
    },
  },
  partialize: (state) => ({
    user: state.user,
    token: state.token,
  }),
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      logout: () => set({ user: null, token: null }),
    }),
    persistConfig
  )
);