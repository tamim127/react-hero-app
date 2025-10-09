import { createBrowserRouter } from 'react-router';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Pages/Apps/AppDetails';
import ErrorPage from '../Pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      { index: true, element: <Home /> },
      { path: '/apps', element: <Apps /> },
      { path: '/installation', element: <Installation /> },
      { path: '/apps/:id', element: <AppDetails /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);
