import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {authenticatedApiInstance} from "../../../utils/ApiInstance";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
import {SUCCESS_RESPONSE_STATUS, UPDATE_USER} from "../../../utils/constants";
import {ToastError, ToastSuccess} from "../../../utils/Toastify";

UpdateAcountModal.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export function UpdateAcountModal(props) {
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState(0);
  const accessToken = LocalStorageUtils.getToken();

  useEffect(() => {
    setName(props.name);
    setStatus(props.status);
    setUserId(props.userId);
  }, [props]);

  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        fullname: name,
        status: status,
        password: password,
      };
      const response = await authenticatedApiInstance(accessToken).put(
        UPDATE_USER(userId),
        payload,
      );
      if (SUCCESS_RESPONSE_STATUS.includes(response.status)) {
        setEmptyField();
        window.document.getElementById("update_modal_account").close();
        await new Promise(r => setTimeout(r, 60))
        await ToastSuccess(`Cập nhật tài khoản thành công`);
        window.location.reload();
      }
    } catch (err) {
      await ToastError(
        err.response.data["Error"] || err.response.data["title"],
      );
    }
  };

  const setEmptyField = () => {
    setName("");
    setPassword("");
    setUserId(0);
    setStatus("");
  };

  return (
    <dialog id="update_modal_account" className="modal">
      <div className="modal-box max-w-xl">
        <form method="dialog" className="p-4">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h2 className="font-bold text-xl mb-3">Cập nhật tài khoản</h2>
          <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-3"></div>
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
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Đang hoạt động</span>
              <input
                type="checkbox"
                className="toggle toggle-success"
                checked={status === "Activate"}
                onChange={(e) =>
                  setStatus(e.target.checked ? "Activate" : "Deactivate")
                }
              />
            </label>
          </div>
          <div className="mt-6 ml-1">
            <button
              class="btn btn-error text-white mr-2"
              onClick={() => console.log("huy")}>
              Hủy
            </button>
            <button
              class="btn btn-success text-white"
              onClick={(e) => handleUpdateAccount(e)}>
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
