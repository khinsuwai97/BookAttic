import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from '../RootLayout';
import HomePage from './HomePage';
import BooksPage from './BooksPage';
import BookmarkPage from './BookmarkPage';
import AdminPage from './AdminPage';
import CreateBooks from '../Admin/CreateBooks';
import EditBooks from '../Admin/EditBooks';
import usePasscode from '../../hooks/usePasscode';
import AdminBooksPage from '../Admin/AdminBooksPage';

const Pages = () => {
  const { isLoggedIn } = usePasscode();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/books', element: <BooksPage /> },
        { path: '/bookmark', element: <BookmarkPage /> },
        {
          path: '/admin',
          element: isLoggedIn ? (
            <AdminPage />
          ) : (
            <Navigate to="/" replace={true} />
          ),

          children: [
            { index: true, element: <AdminBooksPage /> },
            { path: '/admin/create', element: <CreateBooks /> },
            { path: '/admin/:id/edit', element: <EditBooks /> },
          ],
        },

        { path: '*', element: <Navigate to="/" replace={true} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Pages;
