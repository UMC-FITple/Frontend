import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || null, // Rehydrate token from localStorage
  authenticate: false,
  setToken: (newToken) => {
    localStorage.setItem("token", newToken);
    set({ token: newToken });
  },
  setAuthenticate: (state) => {
    set({ authenticate: state });
  },

  clearToken: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));

export default useAuthStore;
