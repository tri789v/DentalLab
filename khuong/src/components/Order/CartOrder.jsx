import LocalStorageUtils from "../../utils/LocalStorageUtils";
import React from "react";
import {CREATE_NEW_ORDER, PROFILE_API_BY_ROLE, SUCCESS_RESPONSE_STATUS} from "../../utils/constants";
import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useEffect, useState} from "react";
import {ToastError, ToastSuccess} from "../../utils/Toastify";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {authenticatedApiInstance} from "../../utils/ApiInstance";
import {formatToVnd} from "../../utils/NumberFormat";

export default function CartOrder({
  initialValue,
  onChange,
  products,
  sharedInfo,
}) {

  const [finalAmount, setFinalAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(initialValue);
  const accessToken = localStorage.getItem("token");
  const currentId = LocalStorageUtils.getCurrentUser().id;

  useEffect(() => {
    let finalTotal = 0;
    products.forEach((product) => {
      finalTotal += Number(product.totalAmount);
    });
    setFinalAmount(finalTotal);
  });

  const clickClose = () => {
    setIsOpen(false);
    onChange(false);
  };

  const handleSubmitOrder = async () => {
    try {
      let afterDiscountAmount = Number(finalAmount) - 0 * 100;
      let productList = products.map((product) => ({
        productId: product.productId,
        teethPositionId: Number(product.teethPositionId),
        totalAmount: product.totalAmount,
        note: product.note,
      }));

      const { role, id } = LocalStorageUtils.getCurrentUser();
      const dentalProfileUrl = PROFILE_API_BY_ROLE(role.toLowerCase());
      const dentalProfileResponse = await authenticatedApiInstance(
        accessToken,
      ).get(`${dentalProfileUrl}/${id}/dental`);
      let dentalId = 0;

      if (typeof dentalProfileResponse.data !== "undefined") {
        dentalId = dentalProfileResponse.data.id;
      }

      let payload = {
        dentalId: dentalId,
        dentistName: sharedInfo.dentistName,
        patientName: sharedInfo.patientName,
        patientGender: sharedInfo.patientGender || "Male",
        patientPhoneNumber: sharedInfo.patientPhoneNumber,
        dentistNote: "Cắt đôi nỗi sầu",
        status: "pending",
        productsList: productList,
        totalAmount: Number(finalAmount),
        discount: 0,
        finalAmount: afterDiscountAmount,
        note: "Em có gì đâu ngoài những vết thương sâu",
      };

      if (productList.length <= 0) {
        ToastError("Vui lòng thêm sản phẩm vào giỏ hàng")
        return;
      }
      

      const response = await authenticatedApiInstance(accessToken).post(
        CREATE_NEW_ORDER,
        payload,
      );
      if (SUCCESS_RESPONSE_STATUS.includes(response.status)) {
        ToastSuccess("Đặt hàng thành công, cảm ơn quý khách");
        LocalStorageUtils.removeItem(`shoppingCart:${currentId}`)
        await new Promise(r => setTimeout(r, 200))
        window.location.reload();
      } else {
        ToastError("Hệ thống có trục trặc, vui lòng thử lại sau");
      }
    } catch (err) {
      ToastError(err.response.data["Error"] || err.response.data["title"]);
    }
  };

  return (
    <Transition.Root show={initialValue} as={Fragment}  style={{zIndex: 999}}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full">
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Đơn hàng
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={clickClose}>
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Đóng</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.productId} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src="https://img.lovepik.com/free-png/20220121/lovepik-hand-drawn-cartoon-tooth-elements-png-image_401597533_wh860.png"
                                    alt={product.productName}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>
                                          {product.productName}
                                        </a>
                                      </h3>
                                      <p className="ml-4">
                                        {formatToVnd(product.totalAmount)}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{`Vị trí răng: ${product.teethPositionId}`}</p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.note}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500"></p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Tổng</p>
                        <p>{formatToVnd(finalAmount, "VND")}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Kiểm tra kĩ trước khi đặt hàng.
                      </p>
                      <div className="mt-6">
                        <button
                          className="flex items-center justify-center rounded-md border border-transparent bg-maincolor px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 w-full"
                          onClick={handleSubmitOrder}>
                          Đặt Hàng
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          <button
                            type="button"
                            className="font-medium text-maincolor hover:text-cyan-600"
                            onClick={clickClose}>
                            Tiếp tục đặt hàng
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
// export default CartOrder;
