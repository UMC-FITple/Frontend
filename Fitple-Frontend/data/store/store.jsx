import { create } from 'zustand';

const useAuthStore = create((set) => ({
    token: null,
    setToken: (newToken) => set({ token: newToken }),
    clearToken: () => set({ token: null }),
}));

export default useAuthStore;