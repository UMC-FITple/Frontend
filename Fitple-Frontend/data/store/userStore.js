import { create } from 'zustand';

const userStore = create((set) => ({
    userInfo: {
        nickname: '',
        email: '',
        user_id: ''
    },
    setUserInfo: (userInfo) => set({ userInfo }),
}));

export default userStore;
