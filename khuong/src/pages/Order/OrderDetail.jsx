import {OrderItem} from "./../../components/Order/OrderItem";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import MenuNavbar from "../../components/MenuNavbar";
import Footer from "../../components/Footer";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import {ToastError} from "../../utils/Toastify";
import {authenticatedApiInstance} from "../../utils/ApiInstance";
import {GET_ORDER_BY_ID} from "../../utils/constants";
import {formatDate} from "../../utils/StringFormat";
import {NotFound} from "../NotFound";
import {formatToVnd} from "../../utils/NumberFormat";

function OrderDetail() {
  const [currentOrder, setCurrentOrder] = useState({});
  const {id} = useParams();
  const accessToken = LocalStorageUtils.getToken();

  useEffect(() => {
    fetchCurrentOrder(id).then((order) => setCurrentOrder(order || {}));
  }, []);

  const fetchCurrentOrder = async (orderId) => {
    try {
      const response = await authenticatedApiInstance(accessToken).get(
        GET_ORDER_BY_ID(orderId),
      );
      return response.data;
    } catch (err) {
      ToastError(err.response.data["Error"] || err.response.data["title"]);
    }
  };

  return (
    <>
      <MenuNavbar />
      {Object.keys(currentOrder).length > 0 ? (
        <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto mt-20">
          <div class="flex justify-start item-start space-y-2 flex-col">
            <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
              {`Order #${currentOrder.id}`}
            </h1>
            <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
              {currentOrder && formatDate(currentOrder.createdDate, "LL LT")}
            </p>
          </div>
          <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
              <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                  Đơn hàng
                </p>
                {<OrderItem listItems={currentOrder.toothList} />}
              </div>
              <div class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                    Summary
                  </h3>
                  <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div class="flex justify-between w-full">
                      <p class="text-base dark:text-white leading-4 text-gray-800">
                        Giá tiền
                      </p>
                      <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
                        {formatToVnd(currentOrder.finalAmount, "VND")}
                      </p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                      <p class="text-base dark:text-white leading-4 text-gray-800">
                        Giảm giá
                      </p>
                      <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
                        {currentOrder.discount}
                      </p>
                    </div>
                  </div>
                  <div class="flex justify-between items-center w-full">
                    <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">
                      Thành tiền
                    </p>
                    <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                      {formatToVnd(currentOrder.finalAmount, "VND")}
                    </p>
                  </div>
                </div>
                <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                    Thẻ bảo hành
                  </h3>
                  <div class="w-full flex justify-center items-center">
                    <button
                      disabled
                      class="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
              <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                Tên khách hàng
              </h3>
              <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                <div class="flex flex-col justify-start items-start flex-shrink-0">
                  <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                    <img
                      className="h-20 w-20"
                      src="https://imgs.search.brave.com/FemI-pqGN1e1Cx4tJ4oOXAYpD50aDu0rHLxzgVZmtFE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9uaGFr/aG9hZGFpc3kudm4v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDQvZGljaC12dS1u/aWVuZy1yYW5nLXRo/YW0tbXkuanBn"
                      alt="avatar"
                    />
                    <div class="flex justify-start items-start flex-col space-y-2">
                      <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                        {currentOrder.dentalName}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                  <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                    <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                      <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                        Tên nha sĩ
                      </p>
                      <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        {currentOrder.dentistName}
                      </p>
                    </div>
                    <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                      <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                        Bệnh nhân
                      </p>
                      <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        <span>Tên bệnh nhân: </span>
                        {currentOrder.patientName}
                      </p>
                      <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        <span>Số điện thoại: </span>
                        {currentOrder.patientPhoneNumber}
                      </p>
                      <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        <span>Giới tính: </span>
                        {currentOrder.patientGender}
                      </p>
                    </div>
                    <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                      <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                        Ghi chú nha sĩ 
                      </p>
                      <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        {currentOrder.dentistNote}
                      </p>
                    </div>
                  </div>
                  <div class="flex w-full justify-center items-center md:justify-start md:items-start">
                    <button class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
                      Chỉnh sửa thông tin 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
      <Footer />
    </>
  );
}

export default OrderDetail;
