import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";
import {
  Landing,
  About,
  Services,
  Coaches,
  Contact,
  SignIn,
} from "../pages/public";

const PublicRouter = createBrowserRouter([
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
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "coaches",
        element: <Coaches />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={PublicRouter} />;
};

export default AppRoutes;
