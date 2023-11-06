import React, {useEffect, useState} from "react";
import {ToastError, ToastSuccess} from "../../../utils/Toastify";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
import {authenticatedApiInstance} from "../../../utils/ApiInstance";
import {
  CREATE_NEW_CATEGORY,
  CREATE_NEW_PRODUCT,
  CREATE_OR_UPDATE_CATEGORY,
  GET_CATEGORY_URL,
  SUCCESS_RESPONSE_STATUS,
} from "../../../utils/constants";
import CurrencyInput from "react-currency-input-field";

export function CreateProductModal() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Inactive");
  const [imageSrc, setImageSrc] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [costPrice, setCostPrice] = useState(100000);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [categoryList, setCategoryList] = useState([]);

  const accessToken = LocalStorageUtils.getToken();

  useEffect(() => {
    if (
      productName === "" ||
      description === "" ||
      imageSrc === "" ||
      costPrice === 0 ||
      costPrice === "" ||
      selectedCategory === -1
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [productName, description, imageSrc, costPrice, selectedCategory]);

  useEffect(() => {
    fetchCategories().then((items) => setCategoryList(items));
  }, []);

  const fetchCategories = async () => {
    const accessToken = localStorage.getItem("token");
    try {
      const response = await authenticatedApiInstance(accessToken).get(
        GET_CATEGORY_URL(""),
      );
      return response.data["items"];
    } catch (err) {
      await ToastError(err.response?.data["Error"]);
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: productName,
        description: description,
        status: status,
        categoryId: selectedCategory,
        costPrice: costPrice,
        image: imageSrc,
      };

      const response = await authenticatedApiInstance(accessToken).post(
        CREATE_NEW_PRODUCT,
        payload,
      );
      if (SUCCESS_RESPONSE_STATUS.includes(response.status)) {
        window.document.getElementById("create_product_modal").close();
        await new Promise((r) => setTimeout(r, 60));
        await ToastSuccess(`Vật liệu ${productName} đã được thêm vào hệ thống`);
        setEmptyField();
        window.location.reload();
      }
    } catch (err) {
      await ToastError(
        err.response.data["Error"] || err.response.data["title"],
      );
    }
  };

  const setEmptyField = () => {
    setProductName("");
    setDescription("");
    setStatus("Available");
    setImageSrc("");
    setSelectedCategory(-1);
  };

  return (
    <dialog id="create_product_modal" className="modal">
      <div className="modal-box max-w-xl">
        <form method="dialog" className="p-4">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h2 className="font-bold text-xl mb-3">Tạo sản phẩm</h2>
          <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-3"></div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text">Tên vật liệu</span>
            </label>
            <input
              type="text"
              placeholder="Nhập tài khoản"
              className="input input-bordered"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
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
          <div className="form-control w-full max-w-xl mt-1">
            <label className="label">
              <span className="label-text">Vai trò</span>
            </label>
            <select
              className="select select-bordered max-w-xl"
              onChange={(e) => setSelectedCategory(e.target.value)}>
              <option selected value={-1}>
                Chọn vật liệu tương ứng
              </option>
              {categoryList.map((category) => (
                <option value={category.id}>{category.categoryName}</option>
              ))}
            </select>
          </div>
          <div className="form-control w-full max-w-xl mt-1">
            <label className="label">
              <span className="label-text">Giá tiền</span>
            </label>
            <CurrencyInput
              style={{
                border: "solid 0.5px",
                borderRadius: 5,
                height: 48,
                padding: 14,
                background: "transparent",
              }}
              id="input-example"
              name="input-name"
              placeholder="Vui lòng nhập giá tiền"
              defaultValue={100000}
              maxLength={9}
              decimalsLimit={2}
              suffix=" VND"
              onValueChange={(value, _name) => setCostPrice(value)}
            />
          </div>
          <div className="form-control w-full max-w-xl mt-1">
            <label className="label">
              <span className="label-text">Trạng thái</span>
            </label>
            <select
              className="select select-bordered max-w-xl"
              onChange={(e) => setStatus(e.target.value)}>
              <option value={-1}>
                Chọn trạng thái
              </option>
              <option value="Available">Available</option>
              <option value="Unavailable">Not available</option>
            </select>
          </div>
          <div className="mt-6 ml-1">
            <button
              class="btn btn-error text-white mr-2"
              onClick={() => setEmptyField()}>
              Hủy
            </button>
            <button
              class="btn btn-success text-white"
              disabled={isDisabled}
              onClick={(e) => handleCreateProduct(e)}>
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
