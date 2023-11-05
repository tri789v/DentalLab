import React, { useState } from "react";
import { ToastError, ToastSuccess } from "../../../utils/Toastify";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
import { authenticatedApiInstance } from "../../../utils/ApiInstance";
import { CREATE_NEW_CATEGORY, CREATE_OR_UPDATE_CATEGORY, SUCCESS_RESPONSE_STATUS } from "../../../utils/constants";

export function CreateCategoryModal() {

  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Inactive');
  const [imageSrc, setImageSrc] = useState('');
  const accessToken = LocalStorageUtils.getToken();

  const handleCreateNewCategory = async (e) => {
    e.preventDefault(); 
    try {
      const payload = {
        categoryName: categoryName,
        description: description,
        status: status,
        image: imageSrc,
      }
      const response = await authenticatedApiInstance(accessToken).post(CREATE_NEW_CATEGORY, payload);
      if (SUCCESS_RESPONSE_STATUS.includes(response.status)) {
        window.document.getElementById("create_category_modal").close();
        await new Promise(r => setTimeout(r, 60))
        await ToastSuccess(`Vật liệu ${categoryName} đã được thêm vào hệ thống`);
        setEmptyField();
        window.location.reload();
      }
    } catch (err) {
      await ToastError(err.response.data['Error'] || err.response.data['title'])
    }
  }

  const setEmptyField = () => {
    setCategoryName('');
    setDescription('');
    setStatus('Inactive');
    setImageSrc('');
  }

  return (
    <dialog id="create_category_modal" className="modal">
      <div className="modal-box max-w-xl">
        <form method="dialog" className="p-4">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h2 className="font-bold text-xl mb-3">Tạo vật liệu</h2>
          <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-3"></div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text">Tên vật liệu</span>
            </label>
            <input
              type="text"
              placeholder="Nhập tài khoản"
              className="input input-bordered"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xl mt-1">
            <label className="label">
              <span className="label-text">Mô tả</span>
            </label>
            <input
              type="text"
              placeholder="Nhập mật khẩu"
              className="input input-bordered"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xl mt-1">
            <label className="label">
              <span className="label-text">Đường dẫn hình ảnh</span>
            </label>
            <input
              type="text"
              placeholder="Nhập mật khẩu"
              className="input input-bordered"
              value={imageSrc}
              onChange={(e) => setImageSrc(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">{`Trạng thái: ${status}`}</span>
              <input
                type="checkbox"
                className="toggle toggle-success"
                checked={status === "Active"}
                onChange={(e) => setStatus(e.target.checked ? "Active" : "Inactive")}
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
              onClick={(e) => handleCreateNewCategory(e)}>
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
