import React from "react";

export function CreateAcountModal({
  username,
  setUsername,
  password,
  setPassword,
  name,
  setName,
  setRole,
  handleCreateNewUser,
}) {
  return (
    <dialog id="my_modal_account" className="modal">
      <div className="modal-box max-w-xl">
        <form method="dialog" className="p-4">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h2 className="font-bold text-xl mb-3">Tạo tài khoản</h2>
          <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-3"></div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text">Tài Khoản</span>
            </label>
            <input
              type="text"
              placeholder="Nhập tài khoản"
              className="input input-bordered"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xl mt-1">
            <label className="label">
              <span className="label-text">Mật khẩu</span>
            </label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xl mt-1">
            <label className="label">
              <span className="label-text">Tên</span>
            </label>
            <input
              type="text"
              placeholder="Xin tên"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xl mt-1">
            <label className="label">
              <span className="label-text">Vai trò</span>
            </label>
            <select
              className="select select-bordered max-w-xl"
              onChange={(e) => setRole(e.target.value)}>
              <option disabled selected>
                Chọn vai trò
              </option>
              <option value="Dental">Dental</option>
              <option value="Staff">Staff</option>
              <option value="Reception">Reception</option>
              <option value="Manager">Manager</option>
              <option value="Shipper">Shipper</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="mt-6 ml-1">
            <button
              class="btn btn-error text-white mr-2"
              onClick={() => console.log("huy")}>
              Hủy
            </button>
            <button
              class="btn btn-success text-white"
              onClick={(e) => handleCreateNewUser(e)}>
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
