import { create } from 'zustand';

interface PasscodeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePasscodeModal = create<PasscodeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePasscodeModal;
