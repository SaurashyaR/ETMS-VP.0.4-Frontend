import {create} from 'zustand';

export const useAuthStore = create((set) => ({
    user : null,
    token : null,
    setUser : ({user}) => set({user})
}))