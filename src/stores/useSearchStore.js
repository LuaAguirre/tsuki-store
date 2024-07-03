import { create } from "zustand";

const useSearchStore = create((set) => ({
    search: '',
    setSearch: () => set(state => setSearch(state))
}))