import Footer from "../components/Footer";
import MenuNavbar from "../components/MenuNavbar";



function ViewOrder() {
  return (
    <>
      <MenuNavbar />


      <div class=" py-1 bg-blueGray-50 mt-20">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center ">
                <div class="text-black text-3xl font-bold">
                  XEM ĐƠN HÀNG
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
                      <select className="select select-info w-full max-w-xs " disabled>
                        <option disabled selected>Chọn tên bác sỹ</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 pl-24">
                    <div class=" w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password" >
                        Số điện thoại
                      </label>
                      <input type="text" className="input input-bordered input-info w-full max-w-xs " value="" />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class=" w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Tên bệnh nhân
                      </label>
                      <input type="text"  className="input input-bordered input-info w-full max-w-xs  " value=""/>                                        </div>
                  </div>
                  <div class="w-full lg:w-6/12 pl-24">
                    <div class=" w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Giới tính
                      </label>
                      <select className="select select-info w-full max-w-xs" value="">
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

                  <div class="mt-6 border-b-1 border-blue-700 ">

                    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase ">
                      Ghi chú của Nha Khoa
                    </h6>
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-12/12 px-4">
                        <div class=" w-full mb-3">

                          <textarea type="text" className="textarea textarea-info focus:ring w-full" rows="4" value=""></textarea>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="overflow-x-auto ">
                    <table className="table">

                      <thead>
                        <tr>
                          <th></th>
                          <th>Vật liệu răng</th>
                          <th>Sản phẩm</th>
                          <th>Răng</th>
                          <th>Số Lượng</th>
                          <th>Trạng thái</th>
                          <th>Ghi chú</th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr className="hover">
                          <th>1</th>
                          <td>Cy Ganderton</td>
                          <td>Quality Control Specialist</td>
                          <td>Blue</td>
                        </tr>

                        <tr className="hover">
                          <th>2</th>
                          <td>Hart Hagerty</td>
                          <td>Desktop Support Technician</td>
                          <td>Purple</td>
                        </tr>

                        <tr className="hover">
                          <th>3</th>
                          <td>Brice Swyre</td>
                          <td>Tax Accountant</td>
                          <td>Red</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer />











    </>
  );

} export default ViewOrder