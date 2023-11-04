import React from "react";
export function Sidebar() {
  return <div class="p-2 bg-white w-60 flex flex-col hidden md:flex mt-24" id="sideNav">
    <nav>
      <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="/dashboard">
        <i class="fas fa-home mr-2"></i>Quản lý tài khoản
      </a>
      <a href='/dashboard/category' class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white">
        <i class="fas fa-file-alt mr-2"></i>Quản lý vật liệu
      </a>
      <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="/dashboard/product">
        <i class="fas fa-users mr-2"></i>Quản lý sản phẩm
      </a>
      <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="#">
        <i class="fas fa-store mr-2"></i>Quản lý đơn hàng
      </a>
      <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="#">
        <i class="fas fa-exchange-alt mr-2"></i>Quy trình sản xuất
      </a>
    </nav>


  </div>;
}
