import { createBrowserRouter, RouterProvider } from "react-router-dom";


import HomePage from "./views/HomePage";
import AddUsername from "./views/AddUsername";
import MainLayout from "./views/MainLayout";


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
