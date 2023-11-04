import CartOrder from "../../components/Order/CartOrder";
import React from "react";
import Footer from "../../components/Footer";
import MenuNavbar from "../../components/MenuNavbar";
import {Fragment, useEffect, useState} from "react";
import {authenticatedApiInstance} from "../../utils/ApiInstance";
import {
  GET_CATEGORY_URL,
  GET_PRODUCTS_BY_CATEGORY,
} from "../../utils/constants";
import {ToastError, ToastSuccess} from "../../utils/Toastify";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import {formatToVnd} from "../../utils/NumberFormat";
import ToothRadioInput from "../../components/Order/ToothRadioInput";

function Order() {
  const [categoryListName, setCategoryListName] = useState([]);
  const [dentistName, setDentistName] = useState("");
  const [dentistNameError, setDentistNameError] = useState("");
  const [gender, setGender] = useState("");
  const [note, setNote] = useState("");
  const [openCardOrder, setOpenCardOrder] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientNameError, setPatientNameError] = useState("");
  const [patientPhoneError, setPatientPhoneError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [productListName, setProductListName] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedTeethPosition, setSelectedTeethPosition] = useState(0);
  const [sharedInfo, setSharedInfo] = useState({});
  const [shoppingCart, setShoppingCart] = useState([]);
  const [toothPositionError, setToothPositionError] = useState("");

  const currentId = LocalStorageUtils.getCurrentUser().id; 

  useEffect(() => {
    fetchCategories().then((items) => setCategoryListName(items));
  }, []);

  useEffect(() => {
    if (shoppingCart.length > 0) {
      LocalStorageUtils.setItem(`shoppingCart:${currentId}`, shoppingCart);
      setShoppingCart([]);
    }
  }, [shoppingCart])

  const fetchCategories = async () => {
    const accessToken = localStorage.getItem("token");
    try {
      const response = await authenticatedApiInstance(accessToken).get(
        GET_CATEGORY_URL,
      );
      return response.data["items"];
    } catch (err) {
      await ToastError(err.response?.data["Error"]);
    }
  };

  const handleSelectedCategory = async (e) => {
    const accessToken = localStorage.getItem("token");
    const id = e.target.value;

    try {
      const response = await authenticatedApiInstance(accessToken).get(
        `${GET_PRODUCTS_BY_CATEGORY(id)}`,
      );
      setProductListName(response.data["items"]);
    } catch (err) {
      await ToastError(err.response?.data["Error"]);
    }
  };

  const handleOpenCardOrder = () => {
    setOpenCardOrder(true);
  };

  const selectPricebyProduct = (e) => {
    productListName.forEach((product) => {
      if (product.id.toString() === e.target.value) {
        setSelectedProduct(product);
      }
    });
  };

  const handleAddToCart = () => {
    let errors = {};

    if (dentistName === "") {
      errors.dentistName = "Vui lòng điền thông tin bác sĩ";
    }

    if (patientName === "") {
      errors.patientName = "Vui lòng điền thông tin bệnh nhân";
    }

    if (isValidPhoneNumber(phoneNumber) === false) {
      errors.phoneNumber = "Số điện thoại sai định dạng";
    }

    if (selectedTeethPosition === 0) {
      errors.teethPosition = "Vui lòng chọn loại răng";
    }

    if (Object.keys(errors).length > 0) {
      setPatientNameError(errors.patientName || "");
      setDentistNameError(errors.dentistName || "");
      setPatientPhoneError(errors.phoneNumber || "");
      setToothPositionError(errors.teethPosition || "")
      window.scrollTo({top: 0, behavior: "smooth"})
      ToastError(toothPositionError || "Form không hợp lệ");
      return;
    }

    let orderItem = {
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      teethPositionId: selectedTeethPosition,
      totalAmount: selectedProduct.costPrice,
      note: note,
    };

    let sharedItem = {
      dentalId: currentId,
      dentistName: dentistName,
      patientName: patientName,
      patientGender: gender,
      patientPhoneNumber: phoneNumber,
    };

    if (Object.keys(selectedProduct).length !== 0) {
      setShoppingCart((shoppingCart) => [orderItem, ...shoppingCart]);
      setSharedInfo(sharedItem);
      setSelectedTeethPosition(0)
      ToastSuccess("Thêm đơn hàng thành công");
    } else {
      ToastError("Đơn đang trống");
    }
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const regexPhoneNumber = /(0[2|3|5|7|8|9])+([0-9]{8})\b/g;
    return phoneNumber.match(regexPhoneNumber) ? true : false;
  };

  return (
    <>
      <MenuNavbar />
      <br />
      <br />
      <div class="bg-blueGray-50 mt-20">
        <div class="w-full lg:w-8/12 px-4 mx-auto ">
          <div class="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center ">
                <div class="text-black text-3xl font-bold">ĐƠN HÀNG</div>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 class="text-blue-700 text-sm mt-3 mb-6 font-bold uppercase ">
                  Thông tin
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div className="form-control w-full max-w-xs">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2 "
                        htmlfor="grid-password">
                        Bác sỹ
                      </label>
                      <input
                        type="text"
                        placeholder="Nhập tên bác sỹ"
                        autoFocus={true}
                        className={`input input-bordered w-full max-w-xs input-${
                          dentistNameError !== "" ? "error" : "info"
                        } `}
                        onChange={(e) => setDentistName(e.target.value)}
                      />
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {dentistNameError}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 pl-24">
                    <div class="w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password">
                        Số điện thoại
                      </label>
                      <input
                        type="text"
                        placeholder="Nhập số điện thoại"
                        className={`input input-bordered w-full max-w-xs input-${
                          patientPhoneError !== "" ? "error" : "info"
                        } `}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {patientPhoneError}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class=" w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2 "
                        htmlfor="grid-password">
                          Bệnh nhân
                      </label>
                      <input
                        type="text"
                        placeholder="Nhập tên bệnh nhân"
                        autoFocus={true}
                        className={`input input-bordered w-full max-w-xs input-${
                          patientNameError !== "" ? "error" : "info"
                        } `}
                        onChange={(e) => setPatientName(e.target.value)}
                      />
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {patientNameError}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 pl-24">
                    <div class=" w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password">
                        Giới tính
                      </label>
                      <select
                        className="select select-info w-full max-w-xs"
                        onChange={(e) => setGender(e.target.value)}>
                        <option disabled selected>
                          Chọn giới tính
                        </option>
                        <option value="Male">Nam</option>
                        <option value="Female">Nữ</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="mt-6 border-b-1 border-blueGray-300">
                  <h6 class="text-blue-700 text-sm mt-3 mb-6 font-bold uppercase">
                    Sản phẩm
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class=" w-full mb-3">
                        <label
                          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password">
                          Vật liệu răng
                        </label>
                        <select
                          className="select select-info w-full max-w-xs"
                          onChange={handleSelectedCategory}>
                          <option disabled selected>
                            Chọn vật liệu răng
                          </option>
                          {categoryListName.map((cart) => (
                            <option value={cart.id}>{cart.categoryName}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div class="w-full lg:w-6/12 pl-24">
                      <div class=" w-full mb-3">
                        <label
                          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password">
                          Sản phẩm
                        </label>
                        <select
                          className="select select-info w-full max-w-xs"
                          onChange={selectPricebyProduct}>
                          <option disabled selected>
                            Chọn sản phẩm
                          </option>
                          {productListName.map((cart) => (
                            <option value={cart.id}>{cart.name} </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div class="w-full lg:w-6/12 px-4"></div>

                    <div class="w-full lg:w-6/12 pl-24">
                      <div class=" w-full mb-3">
                        <label
                          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password">
                          Giá tiền
                        </label>
                        <input
                          className="input input-bordered input-info w-full max-w-xs "
                          value={formatToVnd(selectedProduct.costPrice || "0", "VND")}
                          disabled
                        />
                      </div>
                    </div>

                    <form class="pt-10 pb-10 px-20 ">
                      <ToothRadioInput
                        setSelectedTeethPosition={setSelectedTeethPosition}
                      />
                    </form>
                  </div>

                  <div class="mt-6 border-b-1 border-blue-700 ">
                    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                      Ghi chú
                    </h6>
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-12/12 px-4">
                        <div class="w-full mb-3">
                          <textarea
                            type="text"
                            className="textarea textarea-info focus:ring w-full"
                            rows="4"
                            onChange={(e) =>
                              setNote(e.target.value)
                            }></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <button className="btn btn-ghost" onClick={handleOpenCardOrder}>
              Xem thêm
            </button>
            <CartOrder
              initialValue={openCardOrder}
              onChange={() => setOpenCardOrder(false)}
              products={LocalStorageUtils.getItem(`shoppingCart:${currentId}`) || []}
              sharedInfo={sharedInfo}
            />
            <button className="btn btn-ghost" onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Order;
