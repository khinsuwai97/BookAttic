import { create } from 'zustand';

interface PasscodeStore {
  passcode: string;
  getPasscode: (code: string) => void;
  isLoggedIn: boolean;
  logIn: () => void;
}

const usePasscode = create<PasscodeStore>((set) => ({
  passcode: '',
  getPasscode: (code: string) => set({ passcode: code }),
  isLoggedIn: false,
  logIn: () => set({ isLoggedIn: true }),
}));

export default usePasscode;
