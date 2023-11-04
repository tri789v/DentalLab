import React, { useEffect, useState } from "react";
import { TableGenerator } from "../../utils/TableGenerator";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import { GET_ALL_ACCOUNT } from "../../utils/constants";
import { authenticatedApiInstance } from "../../utils/ApiInstance";
import { ToastError } from "../../utils/Toastify";
import Pagination from "../Pagination";
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
  }, []);

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  const fetchAccount = async () => {

    try {
      const response = await authenticatedApiInstance(accessToken).get(
        GET_ALL_ACCOUNT,
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


      <div class="bg-white p-4 rounded-md">
        <h2 class="text-gray-500 text-lg font-semibold pb-4">
          Danh sách tài khoản
        </h2>
        <div class="my-1"></div>
        <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
        {/* <table class="w-full table-auto text-sm">
          <thead>
            <tr class="text-sm leading-normal">
              <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Foto
              </th>
              <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Nombre
              </th>
              <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Rol
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                Juan Pérez
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                Comercio
              </td>
            </tr>

            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                María Gómez
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                Usuario
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                Carlos López
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                Usuario
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                Laura Torres
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                Comercio
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                Ana Ramírez
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                Usuario
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                Luis Martínez
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                Comercio
              </td>
            </tr>
          </tbody>
        </table> */}
        <div>
          <div>
            <TableGenerator headerNames={HEADER_NAMES} renderRowHandler={renderUsers} items={accountList} />
            <Pagination pagination={pagination} onPageChange={handlePageChange} />
          </div>
        </div>


      </div>

      <div class="bg-white p-4 rounded-md mt-4">
        <h2 class="text-gray-500 text-lg font-semibold pb-4">
          Transacciones
        </h2>
        <div class="my-1"></div>
        <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
        <table class="w-full table-auto text-sm">
          <thead>
            <tr class="text-sm leading-normal">
              <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Nombre
              </th>
              <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Fecha
              </th>
              <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">
                Monto
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                Carlos Sánchez
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                27/07/2023
              </td>
              <td class="py-2 px-4 border-b border-grey-light text-right">
                $1500
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                Ana Torres
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                28/07/2023
              </td>
              <td class="py-2 px-4 border-b border-grey-light text-right">
                $2000
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                Juan Ramírez
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                29/07/2023
              </td>
              <td class="py-2 px-4 border-b border-grey-light text-right">
                $1800
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                María Gómez
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                30/07/2023
              </td>
              <td class="py-2 px-4 border-b border-grey-light text-right">
                $2100
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                Luis González
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                31/07/2023
              </td>
              <td class="py-2 px-4 border-b border-grey-light text-right">
                $1700
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                Laura Pérez
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                01/08/2023
              </td>
              <td class="py-2 px-4 border-b border-grey-light text-right">
                $2400
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                Pedro Hernández
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                02/08/2023
              </td>
              <td class="py-2 px-4 border-b border-grey-light text-right">
                $1950
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                Sara Ramírez
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                03/08/2023
              </td>
              <td class="py-2 px-4 border-b border-grey-light text-right">
                $1850
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-2 px-4 border-b border-grey-light">
                Daniel Torres
              </td>
              <td class="py-2 px-4 border-b border-grey-light">
                04/08/2023
              </td>
              <td class="py-2 px-4 border-b border-grey-light text-right">
                $2300
              </td>
            </tr>
          </tbody>
        </table>

        <div class="text-right mt-4">
          <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
            Ver más
          </button>
        </div>
      </div>
    </div>
  </div>;
}
