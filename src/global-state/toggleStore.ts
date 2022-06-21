import create from 'zustand';
interface storeTypes {
  isOpen: boolean;
  toggle: () => void;
}
const useToggleStore = create((set) => ({
  isOpen: false,
  toggle: (forceToggle?: boolean) =>
    set((state: { isOpen: boolean }) => ({
      isOpen: forceToggle !== undefined ? forceToggle : !state.isOpen,
    })),
}));

export default useToggleStore;
