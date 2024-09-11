import { createBrowserRouter, RouterProvider } from "react-router-dom";

import io from "socket.io-client";
import HomePage from "./views/HomePage";
import AddUsername from "./views/AddUsername";

const socket = io("http://localhost:3000");

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/addusername",
    element: <AddUsername />,
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
