import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="lg:flex min-h-screen bg-gray-100">
      <div className="lg:block lg:w-1/4 ">
        <SideBar />
      </div>
      <div className="flex-auto">
        <header className="flex shadow-sm lg:hidden sm:p-4"></header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
