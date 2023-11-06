import React, { useEffect, useState } from "react";
import { ToastError, ToastSuccess } from "../../../utils/Toastify";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
import { authenticatedApiInstance } from "../../../utils/ApiInstance";
import { GET_CATEGORY_URL, SUCCESS_RESPONSE_STATUS, UPDATE_OR_DELTE_PRODUCT } from "../../../utils/constants";
import PropTypes from "prop-types";
import CurrencyInput from "react-currency-input-field";

UpdateProductModal.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
  costPrice: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
  categoryList: PropTypes.array.isRequired
};

export function UpdateProductModal(props) {
  const [categoryId, setCategoryId] = useState(0)
  const [productId, setProductId] = useState(0)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Inactive');
  const [imageSrc, setImageSrc] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [categoryList, setCategoryList] = useState([]);

  const [isDisabled, setIsDisabled] = useState(false);
  const accessToken = LocalStorageUtils.getToken();

  useEffect(() => {
    if (name === "" ||
    description === "" ||
    imageSrc === "" ||
    costPrice === 0 ||
    costPrice === "" ||
    categoryId === -1) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [name, description, imageSrc, costPrice, categoryId])

  useEffect(() => {
    setCategoryId(props.categoryId)
    setProductId(props.productId)
    setName(props.name)
    setDescription(props.description)
    setStatus(props.status)
    setImageSrc(props.imageSrc)
    setCostPrice(props.costPrice)
  }, [props])

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
  

  const handleCreateNewCategory = async (e) => {
    e.preventDefault(); 
    try {
      const payload = {
        name: name,
        description: description,
        status: status,
        image: imageSrc,
        categoryId: categoryId,
        costPrice: Number(costPrice)
      }

      const response = await authenticatedApiInstance(accessToken).put(UPDATE_OR_DELTE_PRODUCT(productId), payload);
      if (SUCCESS_RESPONSE_STATUS.includes(response.status)) {
        window.document.getElementById("update_category_modal").close();
        await new Promise(r => setTimeout(r, 2000))
        await ToastSuccess(`Vật liệu ${name} đã được cập nhật`);
        setEmptyField();
        window.location.reload();
      }
    } catch (err) {
      await ToastError(err.response.data['Error'] || err.response.data['title'])
    }
  }

  const setEmptyField = () => {
    setCategoryId(0);
    setName('');
    setDescription('');
    setStatus('Available');
    setImageSrc('');
    setProductId(0);
    setCostPrice(100000);
  }

  return (
    <dialog id="update_category_modal" className="modal">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              <span className="label-text">Vật liệu</span>
            </label>
            <select
              className="select select-bordered max-w-xl"
              onChange={(e) => setCategoryId(e.target.value)}
            value={categoryId}>
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
              value={costPrice}
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
              onChange={(e) => setStatus(e.target.value)}
            value={status}>
              <option value={-1}>
                Chọn trạng thái
              </option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
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
              disabled={isDisabled}
              onClick={(e) => handleCreateNewCategory(e)}>
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
