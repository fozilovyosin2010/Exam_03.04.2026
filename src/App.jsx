import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Discover from "./Pages/Discover";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/discover",
          element: <Discover />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
