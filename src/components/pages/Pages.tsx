import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from '../RootLayout';
import HomePage from './HomePage';
import BooksPage from './BooksPage';
import BookmarkPage from './BookmarkPage';
// import AdminPage from './AdminPage';

const Pages = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/books', element: <BooksPage /> },
        { path: '/bookmark', element: <BookmarkPage /> },
        // { path: '/admin', element: <AdminPage /> },
        { path: '*', element: <Navigate to="/" replace={true} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Pages;
