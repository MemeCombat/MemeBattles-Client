import { createBrowserRouter, RouterProvider } from "react-router-dom";

import io from "socket.io-client";
import HomePage from "./views/HomePage";
import AddUsername from "./views/AddUsername";
<<<<<<< HEAD
import { socket } from "./socket";
=======
import MainLayout from "./views/MainLayout";
>>>>>>> ced026fe52e4319861d89a0f8c0d7684dfd3d133


const router = createBrowserRouter([
  {
    path: "/",
    element: <AddUsername />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/play",
        element: <HomePage />,
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
