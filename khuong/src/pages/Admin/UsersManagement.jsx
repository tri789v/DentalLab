import React, {useEffect, useState} from "react";
import {TableGenerator} from "../../utils/TableGenerator";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import {
  CREATE_NEW_USER,
  DELETE_USER,
  GET_ALL_ACCOUNT,
  SUCCESS_RESPONSE_STATUS,
} from "../../utils/constants";
import {authenticatedApiInstance} from "../../utils/ApiInstance";
import {ToastError, ToastSuccess} from "../../utils/Toastify";
import Pagination from "../../components/Pagination";
import queryString from "query-string";
import Swal from "sweetalert2";
import {CreateAcountModal} from "../../components/Admin/User/CreateAcountModal";
import {UpdateAcountModal} from "../../components/Admin/User/UpdateAcountModal";

export function UsersManagement() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [accountList, setAccountList] = useState([]);
  const [isDelete, setIsDelete] = useState(true);
  const [userToUpdate, setUserToUpdate] = useState({
    userId: 0,
    name: "",
    status: "",
  });

  const accessToken = LocalStorageUtils.getToken();

  const HEADER_NAMES = [
    "ID",
    "Tên đăng nhập",
    "Trạng thái",
    "Vai trò",
    "Thao tác",
  ];
  const [pagination, setPagination] = useState({
    page: 1,
    total: 1,
    size: 6,
  });
  const [filters, setFilters] = useState({
    size: 6,
    page: 1,
  });

  useEffect(() => {
    fetchAccount().then((items) => {
      setAccountList(items[0]);
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
      const {items, size, page, total} = response.data;

      const _pagination = {size, page, total};

      return [items, _pagination];
    } catch (err) {
      await ToastError(err.response?.data["Error"]);
    }
  };

  const handleDeleteUserButton = async (userId, username) => {
    Swal.fire({
      title: "Chắc chưa?",
      text: `Tài khoản ${username} sẽ bị xoá và không thể tái tạo!!!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAccount(userId, username);
      }
    });
  };

  const deleteAccount = async (userId, username) => {
    try {
      const response = await authenticatedApiInstance(accessToken).delete(
        DELETE_USER(userId),
      );
      if (SUCCESS_RESPONSE_STATUS.includes(response.status)) {
        Swal.fire(
          "Deleted!",
          `Account ${username} đã được xoá khỏi hệ thống.`,
          "success",
        );
      }
    } catch (err) {
      await ToastError(
        err.response.data["Error"] || err.response.data["title"],
      );
    }
  };

  const setFieldsEmpty = () => {
    setName("");
    setPassword("");
    setUsername("");
    setRole("");
  };

  const handleCreateNewUser = async (e) => {
    try {
      e.preventDefault();
      const payload = {
        username: username,
        name: name,
        role: role,
        password: password,
      };
      const response = await authenticatedApiInstance(accessToken).post(
        CREATE_NEW_USER,
        payload,
      );

      setFieldsEmpty();
      window.document.getElementById("my_modal_account").close();
      await ToastSuccess(`${response.data.username} đã được thêm vào hệ thống`);
    } catch (err) {
      await ToastError(
        err.response.data["Error"] || err.response.data["title"],
      );
    }
  };

  const openUpdateUserModal = (e, user) => {
    e.preventDefault();
    if (e.target.getAttribute("data-column") !== "action") {
      setUserToUpdate({
        userId: Number(user.id),
        name: user.name,
        status: user.status,
      });
      window.document.getElementById("update_modal_account")?.showModal();
    }
  };

  const renderUsers = (users) => {
    return users.map((user) => (
      <>
        <tbody>
          <tr
            className="hover text-xl"
            onClick={(e) => openUpdateUserModal(e, user)}>
            <th>
              <a href="#">{user.id}</a>
            </th>
            <td>{user.username}</td>
            <td
              className={`font-bold ${
                user.status === "Activate" ? "text-green-500" : "text-red-500"
              }`}>
              {user.status}
            </td>
            <td>{user.role}</td>
            <td>
              <button
                data-column="action"
                className="btn btn-ghost"
                onClick={() => {
                  handleDeleteUserButton(user.id, user.username);
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  data-column="action"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </>
    ));
  };

  return (
    <div class="flex-1 p-4">
      <div class="">
        <div class="bg-white p-4 rounded-md mt-24">
          <div className="flex w-full justify-between">
            <h2 class="text-gray-500 text-lg font-semibold flex h-fit">
              Danh sách tài khoản
            </h2>
            <button
              class="btn btn-outline "
              onClick={() =>
                window.document.getElementById("my_modal_account")?.showModal()
              }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
              </svg>
            </button>
            <CreateAcountModal
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              name={name}
              setName={setName}
              setRole={setRole}
              handleCreateNewUser={handleCreateNewUser}
            />
            <UpdateAcountModal
              userId={userToUpdate.userId}
              name={userToUpdate.name}
              status={userToUpdate.status}
            />
          </div>

          <div class="my-1"></div>
          <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
          <div>
            <div>
              <TableGenerator
                headerNames={HEADER_NAMES}
                renderRowHandler={renderUsers}
                items={accountList}
              />
              <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
