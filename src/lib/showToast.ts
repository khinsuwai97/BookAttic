import { toast } from 'react-hot-toast';

export const successToast = (title: string | undefined, message: string) => {
  toast.success(`${title} ${message}`, {
    style: {
      background: '#a64fe7',
      color: '#fff',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#a64fe7',
    },
  });
};

export const errorToast = (title: string | undefined, message: string) => {
  toast.error(`${title} ${message}`, {
    style: {
      background: 'rgb(201, 61, 61)',
      color: '#fff',
    },
    iconTheme: {
      primary: 'rgb(201, 61, 61)',
      secondary: '#fff',
    },
  });
};
