import Footer from "../components/Footer";
import React from "react";
import MenuNavbar from "../components/MenuNavbar";

export const NotFound = () => (
  <>
    <MenuNavbar />
    <div class="grid h-screen px-4 place-content-center">
      <div class="text-center">
        <h1 class="font-black text-gray-200 text-9xl">404</h1>
        <p class="mt-4 text-gray-500">Không thể tìm thấy trang bạn yêu cầu.</p>
        <br />
        <a href="/" className="btn btn-primary">
          Trở lại trang chủ
        </a>
      </div>
    </div>
  </>
);
