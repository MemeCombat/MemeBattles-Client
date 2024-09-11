import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function MainLayout() {
  return (
    <div className="flex ">
      <SideBar />
      <Outlet />
    </div>
  );
}
