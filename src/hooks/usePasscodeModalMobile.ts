import { create } from 'zustand';

interface PasscodeModalMobileStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePasscodeModalMobile = create<PasscodeModalMobileStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePasscodeModalMobile;
