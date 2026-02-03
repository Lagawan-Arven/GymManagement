import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";
import Landing from "../pages/public/Landing";
import About from "../pages/public/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
