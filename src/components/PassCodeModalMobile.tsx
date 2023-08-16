import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import usePasscodeModalMobile from '../hooks/usePasscodeModalMobile';
import usePasscode from '../hooks/usePasscode';

interface PassCodeModalMobileProps {
  closeNav: () => void;
}
const PassCodeModalMobile = ({ closeNav }: PassCodeModalMobileProps) => {
  const { onClose } = usePasscodeModalMobile();
  const { passcode, getPasscode, logIn } = usePasscode();

  const navigate = useNavigate();
  const vitePassCode = import.meta.env.VITE_PASSCODE;
  const handlePasscode = () => {
    if (vitePassCode === passcode) {
      logIn();
      navigate('/admin');
      onClose();
      getPasscode('');
      closeNav();
    } else {
      alert('Wrong Passcode');
    }
  };
  return (
    <div className="toggle-login-mobile ">
      <div className="flex flex-col relative">
        <button
          className="text-slate-400 text-[16px] flex justify-end mb-2"
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
        <input
          type="text"
          className="text-center bg-[#292f3d] rounded-md font-rubik font-[16px] text-slate-100 "
          value={passcode}
          onChange={(e) => getPasscode(e.target.value)}
        />
        <button
          className="flex justify-center items-center gap-2 cursor-pointer text-sm text-slate-100 mt-1"
          type="button"
          onClick={handlePasscode}
        >
          Enter Passcode
        </button>
      </div>
    </div>
  );
};

export default PassCodeModalMobile;
