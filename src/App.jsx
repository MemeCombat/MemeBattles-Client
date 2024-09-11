import { createBrowserRouter, RouterProvider } from "react-router-dom";

import io from "socket.io-client";
import HomePage from "./views/HomePage";
import AddUsername from "./views/AddUsername";
import MainLayout from "./views/MainLayout";

const socket = io("http://localhost:3000");

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddUsername />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        element: <HomePage />,
        path: "/play",
      },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
