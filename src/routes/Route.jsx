import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { LandingPage } from '../pages';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
]);

export const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  );
};
