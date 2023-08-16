import { FC, ChangeEvent, HTMLInputTypeAttribute } from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

interface CustomPaginationProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  totalPages: number;
}

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[800],
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
    },
  },
});

const CustomPagination: FC<CustomPaginationProps> = ({
  page,
  setPage,
  totalPages = 5,
}) => {
  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    e.preventDefault();
    setPage(value);
  };
  return (
    <div className="flex font-rubik justify-center items-center md:pb-0 pt-[40px] pb-[90px]">
      <ThemeProvider theme={theme}>
        <Pagination
          count={totalPages}
          page={page}
          color="primary"
          onChange={handleChange}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
