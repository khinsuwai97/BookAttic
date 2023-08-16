import { AiOutlineClose } from 'react-icons/ai';
import usePasscodeModal from '../hooks/usePasscodeModal';
import usePasscode from '../hooks/usePasscode';
import { useNavigate } from 'react-router-dom';

const PassCodeModal = () => {
  const { onClose } = usePasscodeModal();
  const { passcode, getPasscode, logIn } = usePasscode();

  const navigate = useNavigate();

  const vitePassCode = import.meta.env.VITE_PASSCODE;

  const handlePasscode = () => {
    if (vitePassCode === passcode) {
      logIn();
      onClose();
      getPasscode('');
      navigate('/admin');
    } else {
      alert('Wrong Passcode');
    }
  };

  return (
    <div className="toggle-login ">
      <div className="flex flex-col relative">
        <button
          className="text-slate-400 text-[16px] flex justify-end mb-2"
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
        <input
          type="password"
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

export default PassCodeModal;
