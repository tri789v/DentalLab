import React from "react";
import MenuNavbar from "../../components/MenuNavbar";
import {Sidebar} from "../../components/Admin/Sidebar";
import {UsersManagement} from "./UsersManagement";

function Dashboard({componentChild}) {
  return (
    <>
      <MenuNavbar />
      <div class="flex flex-col bg-gray-100 mt-1">
        <div class="flex-1 flex">
          <Sidebar />

          {componentChild}
        </div>
      </div>
    </>
  );
}
export default Dashboard;
