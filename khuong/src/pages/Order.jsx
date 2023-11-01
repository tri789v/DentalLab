import CartOrder from "../components/CartOrder";
import Footer from "../components/Footer";
import MenuNavbar from "../components/MenuNavbar";
import { Fragment, useEffect, useState } from 'react'
import { authenticatedApiInstance } from "../utils/ApiInstance";
import { GET_CATEGORY_URL, GET_PRODUCTS_BY_CATEGORY } from "../utils/constants";
import { ToastError } from "../utils/Toastify";


function Order() {
    const [open, setOpen] = useState(true)
    const [categoryListName, setCategoryListName] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [productListName, setProductListName] = useState([])
    const [dentistName, setDentistName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [patientName, setPatientName] = useState('')

    useEffect(() => {
        fetchCategories().then(items => setCategoryListName(items))
    }, [])

    const fetchCategories = async () => {
        const accessToken = localStorage.getItem('token');
        try {
            const response = await authenticatedApiInstance(accessToken).get(GET_CATEGORY_URL);
            return response.data['items'];
        } catch (err) {
            await ToastError(err.response?.data['Error']);
        }
    }

    const handleSelectedCategory = async (e) => {
        const accessToken = localStorage.getItem('token');
        const id = e.target.value

        try {
            const response = await authenticatedApiInstance(accessToken).get(`${GET_PRODUCTS_BY_CATEGORY}/${id}`);
            setProductListName(response.data['items']);
        } catch (err) {
            await ToastError(err.response?.data['Error']);
        }
    }

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
                                <div class="text-black text-3xl font-bold">
                                    ĐƠN HÀNG
                                </div>
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
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlfor="grid-password">
                                                Bác sỹ
                                            </label>
                                            <input type="text" placeholder="Nhập vào" className="input input-bordered input-info w-full max-w-xs " />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 pl-24">
                                        <div class="w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Số điện thoại
                                            </label>
                                            <input type="text" placeholder="Nhập vào" className="input input-bordered input-info w-full max-w-xs " />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class=" w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Tên bệnh nhân
                                            </label>
                                            <input type="text" placeholder="Nhập vào" className="input input-bordered input-info w-full max-w-xs  " />                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 pl-24">
                                        <div class=" w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Giới tính
                                            </label>
                                            <select className="select select-info w-full max-w-xs">
                                                <option disabled selected>Chọn giới tính</option>
                                                <option>Nam</option>
                                                <option>Nữ</option>
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
                                                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                    Vật liệu răng
                                                </label>
                                                <select className="select select-info w-full max-w-xs" onChange={handleSelectedCategory}>
                                                    <option disabled selected>Chọn vật liệu răng</option>
                                                    {categoryListName.map((cart) => <option value={cart.id}>{cart.categoryName}</option>)}
                                                </select>
                                            </div>
                                        </div>


                                        <div class="w-full lg:w-6/12 pl-24">
                                            <div class=" w-full mb-3">
                                                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                    Sản phẩm
                                                </label>
                                                <select className="select select-info w-full max-w-xs">
                                                    <option disabled selected>Chọn sản phẩm</option>
                                                    {productListName.map((cart) => <option value={cart.productId}>{cart.name}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        <form class="pt-10 pb-10 px-20 ">
                                            <div class="grid grid-rows-2 grid-flow-col gap-4 text-center">
                                                <div>
                                                    <img src="./imgMenu/r1.png" className="max-w-2rem" />
                                                    <p class="text-base">01</p>
                                                    <input type="radio" id="1" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>

                                                <div>
                                                    <img src="./imgMenu/r32.png" className="max-w-2rem" />
                                                    <p class="text-base">32</p>
                                                    <input type="radio" id='32' name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r2.png" className="max-w-2rem" />
                                                    <p class="text-base">02</p>
                                                    <input type="radio" id="2" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r31.png" className="max-w-2rem" />
                                                    <p class="text-base">31</p>
                                                    <input type="radio" id="31" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r3.png" className="max-w-2rem" />
                                                    <p class="text-base">03</p>
                                                    <input type="radio" id="3" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r30.png" className="max-w-2rem" />
                                                    <p class="text-base">30</p>
                                                    <input type="radio" id="30" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r4.png" className="max-w-2rem" />
                                                    <p class="text-base">04</p>
                                                    <input type="radio" id="4" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r29.png" className="max-w-2rem" />
                                                    <p class="text-base">29</p>
                                                    <input type="radio" id="29" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r5.png" className="max-w-2rem" />
                                                    <p class="text-base">05</p>
                                                    <input type="radio" id="5" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r28.png" className="max-w-2rem" />
                                                    <p class="text-base">28</p>
                                                    <input type="radio" id="28" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r6.png" className="max-w-2rem" />
                                                    <p class="text-base">06</p>
                                                    <input type="radio" id="6" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r27.png" className="max-w-2rem" />
                                                    <p class="text-base">27</p>
                                                    <input type="radio" id="27" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r7.png" className="max-w-2rem" />
                                                    <p class="text-base">07</p>
                                                    <input type="radio" id="7" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r26.png" className="max-w-2rem" />
                                                    <p class="text-base">26</p>
                                                    <input type="radio" id="26" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r8.png" className="max-w-2rem" />
                                                    <p class="text-base">08</p>
                                                    <input type="radio" id="8" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r25.png" className="max-w-2rem" />
                                                    <p class="text-base">25</p>
                                                    <input type="radio" id="25" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r9.png" className="max-w-2rem" />
                                                    <p class="text-base">09</p>
                                                    <input type="radio" id="9" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r24.png" className="max-w-2rem" />
                                                    <p class="text-base">24</p>
                                                    <input type="radio" id="24" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r10.png" className="max-w-2rem" />
                                                    <p class="text-base">10</p>
                                                    <input type="radio" id="10" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r23.png" className="max-w-2rem" />
                                                    <p class="text-base">23</p>
                                                    <input type="radio" id="23" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r11.png" className="max-w-2rem" />
                                                    <p class="text-base">11</p>
                                                    <input type="radio" id="11" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r22.png" className="max-w-2rem" />
                                                    <p class="text-base">22</p>
                                                    <input type="radio" id="22" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r12.png" className="max-w-2rem" />
                                                    <p class="text-base">12</p>
                                                    <input type="radio" id="12" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r21.png" className="max-w-2rem" />
                                                    <p class="text-base">21</p>
                                                    <input type="radio" id="21" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r13.png" className="max-w-2rem" />
                                                    <p class="text-base">13</p>
                                                    <input type="radio" id="13" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r20.png" className="max-w-2rem" />
                                                    <p class="text-base">20</p>
                                                    <input type="radio" id="20" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r14.png" className="max-w-2rem" />
                                                    <p class="text-base">14</p>
                                                    <input type="radio" id="14" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r19.png" className="max-w-2rem" />
                                                    <p class="text-base">19</p>
                                                    <input type="radio" id="19" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r15.png" className="max-w-2rem" />
                                                    <p class="text-base">15</p>
                                                    <input type="radio" id="15" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r18.png" className="max-w-2rem" />
                                                    <p class="text-base">18</p>
                                                    <input type="radio" id="18" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r16.png" className="max-w-2rem" />
                                                    <p class="text-base">16</p>
                                                    <input type="radio" id="16" name="tooth-position" className="radio checkbox-xs checkbox-info" />
                                                </div>
                                                <div>
                                                    <img src="./imgMenu/r17.png" className="max-w-2rem" />
                                                    <p class="text-base">17</p>
                                                    <input type="radio" id="17" name="tooth-position" className="radio checkbox-xs checkbox-info" />
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

                                                    <textarea type="text" className="textarea textarea-info focus:ring w-full" rows="4"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <CartOrder />
            <Footer />
        </>
    );

} export default Order