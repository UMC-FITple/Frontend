import { create } from "zustand";
import { persist } from "zustand/middleware";

// const useAuthStore = create((set) => ({
//   authenticate: false,
//   setAuthenticate: (state) => {
//     set({ authenticate: state });
//   },

//   clearToken: () => {
//     localStorage.removeItem("token");
//     set({ token: null });
//   },
// }));

// zustand persist을 이용해서 로그인 상태를 로컬 스토리지 같은 공간에 저장한다.
const userAuthStore = create(
  persist(
    (set, get) => ({
      authenticate: false,
      setAuthenticate: (state) => {
        set({ authenticate: state });
      },

      clearToken: () => {
        localStorage.removeItem("token");
        set({ token: null });
      },
    }),
    {
      name: "useAuthStorage",
    }
  )
);

export default userAuthStore;
