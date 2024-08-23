import create from "zustand";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || null, // Rehydrate token from localStorage

  setToken: (newToken) => {
    localStorage.setItem("token", newToken);
    set({ token: newToken });
  },

  clearToken: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));

export default useAuthStore;
