import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

export default function App() {

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}