import React, { useEffect, useState } from "react";
import { TableGenerator } from "../../utils/TableGenerator";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import { GET_ALL_ACCOUNT } from "../../utils/constants";
import { authenticatedApiInstance } from "../../utils/ApiInstance";
import { ToastError } from "../../utils/Toastify";
import Pagination from "../Pagination";
import queryString from "query-string";

export function UsersManagement() {
  const accessToken = LocalStorageUtils.getToken();

  const HEADER_NAMES = ["id", "username", "status", "role", "action"]
  const [pagination, setPagination] = useState({
    page: 1,
    total: 1,
    size: 10,
  });
  const [filters, setFilters] = useState({
    size: 10,
    page: 1,
  });

  const [accountList, setAccountList] = useState([])

  useEffect(() => {
    fetchAccount().then((items) => {
      setAccountList(items[0])
      setPagination(items[1]);
    });
  }, [filters]);

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  const fetchAccount = async () => {
    try {
      const paramsString = queryString.stringify(filters);
      const response = await authenticatedApiInstance(accessToken).get(
        GET_ALL_ACCOUNT(paramsString),
      );
      const { items, size, page, total } = response.data;

      const _pagination = { size, page, total };

      return [items, _pagination];
    } catch (err) {
      await ToastError(err.response?.data["Error"]);
    }
  };

  const renderUsers = (users) => {
    return users.map((user) => (
      <tbody>
        <tr className="hover">
          <th>
            <a href="#">{user.id}</a>
          </th>
          <td>{user.username}</td>
          <td>{user.status}</td>
          <td>{user.role}</td>
          <td ><button>CC</button></td>
        </tr>
      </tbody>
    ));
  };

  return <div class="flex-1 p-4">
    <div class="">


      <div class="bg-white p-4 rounded-md mt-24">
        <div className="flex w-full justify-between">
          <h2 class="text-gray-500 text-lg font-semibold pb-4">
            Danh sách tài khoản
          </h2>
          <button class="text-gray-500 text-lg font-semibold pb-4">
            Danh sách tài khoản
          </button>
        </div>


        <div class="my-1"></div>
        <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
        <div>
          <div>
            <TableGenerator headerNames={HEADER_NAMES} renderRowHandler={renderUsers} items={accountList} />
            <Pagination pagination={pagination} onPageChange={handlePageChange} />
          </div>
        </div>


      </div>
    </div>
  </div>;
}
