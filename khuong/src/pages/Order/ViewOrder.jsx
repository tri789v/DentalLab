import {useEffect, useState} from "react";
import React from "react";
import Footer from "../../components/Footer";
import MenuNavbar from "../../components/MenuNavbar";
import {authenticatedApiInstance} from "../../utils/ApiInstance";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import {GET_ORDERS, PROFILE_API_BY_ROLE} from "../../utils/constants";
import {ToastError} from "../../utils/Toastify";
import {OrderTable} from "../../components/Order/OrderTable";
import Pagination from "../../components/Pagination";
import queryString from "query-string";

function ViewOrder() {
  const [orderList, setOrderList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    total: 1,
    size: 10,
  });
  const [filters, setFilters] = useState({
    size: 10,
    page: 1,
  });

  useEffect(() => {
    fetchOrderList().then((items) => {
      setOrderList(items[0]);
      setPagination(items[1]);
    });
  }, [filters]);

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  const fetchOrderList = async () => {
    try {
      const {role, id} = LocalStorageUtils.getCurrentUser();
      const dentalProfileUrl = PROFILE_API_BY_ROLE(role.toLowerCase());
      const accessToken = LocalStorageUtils.getToken();
      const dentalProfileResponse = await authenticatedApiInstance(
        accessToken,
      ).get(`${dentalProfileUrl}/${id}/dental`);
      let dentalId = 0;

      if (typeof dentalProfileResponse.data !== "undefined") {
        dentalId = dentalProfileResponse.data.id;
      }
      const paramsString = queryString.stringify(filters);
      const response = await authenticatedApiInstance(accessToken).get(
        GET_ORDERS(dentalId, paramsString),
      );
      const {items, size, page, total} = response.data;
      const _pagination = {size, page, total};

      return [items, _pagination];
    } catch (err) {
      ToastError(err.response.data["Error"] || err.response.data["title"]);
    }
  };

  return (
    <>
      <MenuNavbar />

      <div class=" py-1 bg-blueGray-50 mt-20">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center ">
                <div class="text-black text-3xl font-bold">XEM ĐƠN HÀNG</div>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <OrderTable orders={orderList} />
            </div>
            <Pagination
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ViewOrder;
