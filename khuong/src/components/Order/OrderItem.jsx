import React from "react";
import PropTypes from "prop-types";
import {formatToVnd} from "../../utils/NumberFormat";

OrderItem.propTypes = {
  listItems: PropTypes.object.isRequired,
};

export function OrderItem(props) {
  const {listItems} = props;

  return (
    <>
      {listItems.map((item) => (
        <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div class="pb-4 md:pb-8 w-full md:w-40">
            <img
              class="w-full hidden md:block"
              src="https://img.lovepik.com/free-png/20220121/lovepik-hand-drawn-cartoon-tooth-elements-png-image_401597533_wh860.png"
              alt={item.id}
            />
            <img
              class="w-full md:hidden"
              src="https://img.lovepik.com/free-png/20220121/lovepik-hand-drawn-cartoon-tooth-elements-png-image_401597533_wh860.png"
              alt={item.id}
            />
          </div>
          <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div class="w-full flex flex-col justify-start items-start space-y-8">
              <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                {item.product.name}
              </h3>
              <div class="flex justify-start items-start flex-col space-y-2">
                <p class="text-sm dark:text-white leading-none text-gray-800">
                  <span class="dark:text-gray-400 text-gray-300">
                    Phân loại:{" "}
                  </span>{" "}
                  {item.product.categoryName}
                </p>
                <p class="text-sm dark:text-white leading-none text-gray-800">
                  <span class="dark:text-gray-400 text-gray-300">
                    Vị trí răng:{" "}
                  </span>{" "}
                  {item.teethPosition.positionName}
                </p>
                <p class="text-sm dark:text-white leading-none text-gray-800">
                  <span class="dark:text-gray-400 text-gray-300">
                    Ghi chú nha khoa:{" "}
                  </span>{" "}
                  {item.note}
                </p>
              </div>
            </div>
            <div class="flex justify-between space-x-8 items-start w-full">
              <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                01
              </p>
              <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                {formatToVnd(item.totalAmount, "VND")}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
