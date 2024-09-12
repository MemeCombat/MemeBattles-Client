import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./views/HomePage";
import AddUsername from "./views/AddUsername";
import MainLayout from "./views/MainLayout";
import { GameProvider } from "./context/GameContext";
import MainPage from "./views/MainPage";

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
      {
        path:"/menu",
        element:<MainPage/>
      }
    ],
  },
]);

export default function App() {
  return (
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  );
}
