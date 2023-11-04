import React from "react";
import LocalStorageUtils from "../utils/LocalStorageUtils";

const MenuNavbar = () => {
  const {role, username} = LocalStorageUtils.getCurrentUser() || {
    role: "",
    username: "",
  };

  const renderAdminDashboardButton = () => {
    if (role.toLowerCase() === "admin") {
      return (
        <li>
          <a className="justify-between" href="/admin/dashboard">
            Dashboard
          </a>
        </li>
      );
    }
  };

  const profileButton = (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        Hi, {LocalStorageUtils.getToken() && username}
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between" href="/profile">
            Tài khoản
            <span className="badge">New</span>
          </a>
        </li>
        {renderAdminDashboardButton()}
        <li>
          <a
            onClick={() => {
              LocalStorageUtils.removeItem('token')
              LocalStorageUtils.removeItem('currentUser')
            }}
            href="/">
            Đăng xuất
          </a>
        </li>
      </ul>
    </div>
  );

  const renderLoginButton = (
    <a className="btn btn-ghost" href="/login">
      Đăng nhập
    </a>
  );

  const renderOrderButton = (
    <>
      <div class="hidden flex-none items-center lg:block">
        <a
          data-sveltekit-preload-data="hover"
          href="/Order"
          class="btn btn-ghost drawer-button font-semibold normal-case">
          Đơn Hàng
        </a>
      </div>
      <div class="hidden flex-none items-center lg:block">
        <a
          data-sveltekit-preload-data="hover"
          href="/ViewOrder"
          class="btn btn-ghost drawer-button font-semibold normal-case">
          Xem Đơn
        </a>
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100 border border-solid fixed top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Sản phẩm</a>
            </li>
            <li>
              <a>Dịch vụ</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="/">
          <img
            className="btn btn-ghost normal-case h-20 w-max text-xl"
            src="/img/312679b8fcd3288d71c2-removebg-preview-1.png"></img>
        </a>
      </div>
      <div class="hidden flex-none items-center lg:block">
        <a
          data-sveltekit-preload-data="hover"
          href="/categories"
          class="btn btn-ghost drawer-button font-semibold normal-case">
          Sản Phẩm
        </a>
      </div>
      <div class="hidden flex-none items-center lg:block">
        <a
          data-sveltekit-preload-data="hover"
          href="/service"
          class="btn btn-ghost drawer-button font-semibold normal-case">
          Dịch Vụ
        </a>
      </div>
      {role.toLowerCase() === "dental" ? renderOrderButton : null}
      <div className="navbar-end">
        {!!localStorage.getItem("token") ? profileButton : renderLoginButton}
      </div>
    </div>
  );
};

export default MenuNavbar;
