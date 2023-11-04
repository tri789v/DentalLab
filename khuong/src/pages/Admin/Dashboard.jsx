import React from "react";
import MenuNavbar from "../../components/MenuNavbar";
import { Sidebar } from "../../components/Admin/Sidebar";
import { UsersManagement } from "../../components/Admin/UsersManagement";

function Dashboard() {
  return (
    <>
      <MenuNavbar />
      <div class="flex flex-col h-screen bg-gray-100">
        <div class="flex-1 flex">
          <Sidebar />

          <UsersManagement />
        </div>
      </div>

    </>
  );
}
export default Dashboard;
