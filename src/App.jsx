import { createBrowserRouter, RouterProvider } from "react-router-dom";

import io from "socket.io-client";
import Home from "./pages/Home";

const socket = io("http://localhost:3000");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
