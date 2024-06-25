import { create } from "zustand";

const modalStore = (set, get) => ({
  zIndex: 50,
  incrementZIndex: () => set((state) => ({ zIndex: state.zIndex + 10 })),
  modals: {
    WpmMgt: true,
    LgsOverview: true,
  },
  openModal: (name) =>
    set((state) => ({ modals: { ...state.modals, [name]: true } })),
  closeModal: (name) =>
    set((state) => ({ modals: { ...state.modals, [name]: false } })),
});

const useModalStore = create(modalStore);
export default useModalStore;
