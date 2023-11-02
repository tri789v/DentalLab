import CartOrder from "../components/CartOrder";
import Footer from "../components/Footer";
import MenuNavbar from "../components/MenuNavbar";
import { Fragment, useEffect, useState } from "react";
import { authenticatedApiInstance } from "../utils/ApiInstance";
import { GET_CATEGORY_URL, GET_PRODUCTS_BY_CATEGORY } from "../utils/constants";
import { ToastError, ToastSuccess } from "../utils/Toastify";
import LocalStorageUtils from "../utils/LocalStorageUtils";
import { formatToVnd } from '../utils/NumberFormat';

function Order() {
  const [categoryListName, setCategoryListName] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productListName, setProductListName] = useState([]);
  const [dentistName, setDentistName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [patientName, setPatientName] = useState("");
  const [openCardOrder, setOpenCardOrder] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedTeethPosition, setSelectedTeethPosition] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [note, setNote] = useState("");
	const [gender, setGender] = useState("");
	const [sharedInfo, setSharedInfo] = useState({});


  useEffect(() => {
    fetchCategories().then((items) => setCategoryListName(items));
  }, []);

  const fetchCategories = async () => {
    const accessToken = localStorage.getItem("token");
    try {
      const response = await authenticatedApiInstance(accessToken).get(
        GET_CATEGORY_URL
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
        `${GET_PRODUCTS_BY_CATEGORY}/${id}`
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
    let orderItem = {
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      teethPositionId: selectedTeethPosition,
      totalAmount: selectedProduct.costPrice,
      note: note,
    };

    let sharedItem = {
      dentalId: LocalStorageUtils.getItem("currentUser").id,
      dentistName: dentistName,
      patientName: patientName,
      patientGender: gender,
      patientPhoneNumber: phoneNumber,
    };

    if (Object.keys(selectedProduct).length !== 0) {
      setShoppingCart((shoppingCart) => [orderItem, ...shoppingCart]);
      // LocalStorageUtils.removeItem('cart')
      // LocalStorageUtils.setItem('cart', shoppingCart);
			setSharedInfo(sharedItem);
      ToastSuccess("Thêm đơn hàng thành công");

		} else {
			ToastError("Đơn đang trống")
		}
  };

  const isValidPhoneNumber = ({ phoneNumber }) => {
    const regexPhoneNumber = /(0[2|3|5|7|8|9])+([0-9]{8})\b/g;
    return phoneNumber.match(regexPhoneNumber) ? true : false;
  };

  const handlePhoneNumberChange = (e) => {
    e.preventDefault();
    let assumPhoneNumber = e.target.value;

    if (isValidPhoneNumber({ phoneNumber: assumPhoneNumber })) {
      setPhoneNumber(assumPhoneNumber);
    }
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
                    <div class=" w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2 "
                        htmlfor="grid-password"
                      >
                        Bác sỹ
                      </label>
                      <input
                        type="text"
                        placeholder="Nhập vào"
                        className="input input-bordered input-info w-full max-w-xs "
                        onChange={(e) => setDentistName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 pl-24">
                    <div class="w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="text"
                        placeholder="Nhập vào"
                        className="input input-bordered input-info w-full max-w-xs "
                        onChange={handlePhoneNumberChange}
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class=" w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Tên bệnh nhân
                      </label>
                      <input
                        type="text"
                        placeholder="Nhập vào"
                        className="input input-bordered input-info w-full max-w-xs"
                        onChange={(e) => setPatientName(e.target.value)}
                      />{" "}
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 pl-24">
                    <div class=" w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Giới tính
                      </label>
                      <select
                        className="select select-info w-full max-w-xs"
                        onChange={(e) => setGender(e.target.value)}
                      >
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
                          htmlfor="grid-password"
                        >
                          Vật liệu răng
                        </label>
                        <select
                          className="select select-info w-full max-w-xs"
                          onChange={handleSelectedCategory}
                        >
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
                          htmlfor="grid-password"
                        >
                          Sản phẩm
                        </label>
                        <select
                          className="select select-info w-full max-w-xs"
                          onChange={selectPricebyProduct}
                        >
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
                          htmlfor="grid-password"
                        >
                          Giá tiền
                        </label>
                        <input
                          className="input input-bordered input-info w-full max-w-xs "
                          value={formatToVnd(selectedProduct.costPrice)}
                          disabled
                        />
                      </div>
                    </div>

                    <form class="pt-10 pb-10 px-20 ">
                      <div class="grid grid-rows-2 grid-flow-col gap-4 text-center">
                        <div>
                          <img src="./imgMenu/r1.png" className="max-w-2rem" />
                          <p class="text-base">1-8</p>
                          <input
                            type="radio"
                            id="8"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={8}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>

                        <div>
                          <img src="./imgMenu/r32.png" className="max-w-2rem" />
                          <p class="text-base">4-8</p>
                          <input
                            type="radio"
                            id="32"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={32}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r2.png" className="max-w-2rem" />
                          <p class="text-base">1-7</p>
                          <input
                            type="radio"
                            id="7"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={7}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r31.png" className="max-w-2rem" />
                          <p class="text-base">4-7</p>
                          <input
                            type="radio"
                            id="31"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={31}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r3.png" className="max-w-2rem" />
                          <p class="text-base">1-6</p>
                          <input
                            type="radio"
                            id="6"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={6}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r30.png" className="max-w-2rem" />
                          <p class="text-base">4-6</p>
                          <input
                            type="radio"
                            id="30"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={30}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r4.png" className="max-w-2rem" />
                          <p class="text-base">1-5</p>
                          <input
                            type="radio"
                            id="5"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={5}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r29.png" className="max-w-2rem" />
                          <p class="text-base">4-5</p>
                          <input
                            type="radio"
                            id="29"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={29}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r5.png" className="max-w-2rem" />
                          <p class="text-base">1-4</p>
                          <input
                            type="radio"
                            id="4"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={4}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r28.png" className="max-w-2rem" />
                          <p class="text-base">4-4</p>
                          <input
                            type="radio"
                            id="28"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={28}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r6.png" className="max-w-2rem" />
                          <p class="text-base">1-3</p>
                          <input
                            type="radio"
                            id="3"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={3}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r27.png" className="max-w-2rem" />
                          <p class="text-base">4-3</p>
                          <input
                            type="radio"
                            id="27"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={27}
                            onChange={(e) => setSelectedTeethPosition(27)}
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r7.png" className="max-w-2rem" />
                          <p class="text-base">1-2</p>
                          <input
                            type="radio"
                            id="2"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={2}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r26.png" className="max-w-2rem" />
                          <p class="text-base">4-2</p>
                          <input
                            type="radio"
                            id="26"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={26}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r8.png" className="max-w-2rem" />
                          <p class="text-base">1-1</p>
                          <input
                            type="radio"
                            id="1"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={1}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r25.png" className="max-w-2rem" />
                          <p class="text-base">4-1</p>
                          <input
                            type="radio"
                            id="25"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={25}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r9.png" className="max-w-2rem" />
                          <p class="text-base">2-1</p>
                          <input
                            type="radio"
                            id="9"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={9}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r24.png" className="max-w-2rem" />
                          <p class="text-base">3-1</p>
                          <input
                            type="radio"
                            id="17"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={17}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r10.png" className="max-w-2rem" />
                          <p class="text-base">2-2</p>
                          <input
                            type="radio"
                            id="10"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={10}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r23.png" className="max-w-2rem" />
                          <p class="text-base">3-2</p>
                          <input
                            type="radio"
                            id="18"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={18}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r11.png" className="max-w-2rem" />
                          <p class="text-base">2-3</p>
                          <input
                            type="radio"
                            id="11"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={11}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r22.png" className="max-w-2rem" />
                          <p class="text-base">3-3</p>
                          <input
                            type="radio"
                            id="19"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={19}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r12.png" className="max-w-2rem" />
                          <p class="text-base">2-4</p>
                          <input
                            type="radio"
                            id="12"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={12}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r21.png" className="max-w-2rem" />
                          <p class="text-base">3-4</p>
                          <input
                            type="radio"
                            id="20"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={20}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r13.png" className="max-w-2rem" />
                          <p class="text-base">2-5</p>
                          <input
                            type="radio"
                            id="13"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={13}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r20.png" className="max-w-2rem" />
                          <p class="text-base">3-5</p>
                          <input
                            type="radio"
                            id="21"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={21}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r14.png" className="max-w-2rem" />
                          <p class="text-base">2-6</p>
                          <input
                            type="radio"
                            id="14"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={14}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r19.png" className="max-w-2rem" />
                          <p class="text-base">3-6</p>
                          <input
                            type="radio"
                            id="22"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={22}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r15.png" className="max-w-2rem" />
                          <p class="text-base">2-7</p>
                          <input
                            type="radio"
                            id="15"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={15}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r18.png" className="max-w-2rem" />
                          <p class="text-base">3-7</p>
                          <input
                            type="radio"
                            id="23"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={23}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r16.png" className="max-w-2rem" />
                          <p class="text-base">2-8</p>
                          <input
                            type="radio"
                            id="16"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={16}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <img src="./imgMenu/r17.png" className="max-w-2rem" />
                          <p class="text-base">3-8</p>
                          <input
                            type="radio"
                            id="24"
                            name="tooth-position"
                            className="radio checkbox-xs checkbox-info"
                            value={24}
                            onChange={(e) =>
                              setSelectedTeethPosition(e.target.value)
                            }
                          />
                        </div>
                      </div>
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
                            onChange={(e) => setNote(e.target.value)}
                          ></textarea>
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
              products={shoppingCart}
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
