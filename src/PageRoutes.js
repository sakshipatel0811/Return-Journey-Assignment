import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./modules/Products/screens/Home";

const PageRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default PageRoutes;
