import { create } from 'zustand'

interface SearchStore {
  search: string
  setSearch: (search: string) => void
}

const useSearchStore = create<SearchStore>((set) => ({
  search: '',
  setSearch: (search) => set({ search })
}))

export { useSearchStore }
