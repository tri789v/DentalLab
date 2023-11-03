import {useEffect, useState} from "react";
import React from "react";
import Footer from "../components/Footer";
import MenuNavbar from "../components/MenuNavbar";
import {authenticatedApiInstance} from "../utils/ApiInstance";
import {ToastError, ToastSuccess} from "../utils/Toastify";
import {PROFILE_API_BY_ROLE, UPDATE_DENTAL_PROFILE} from "../utils/constants";
import {Navigate} from "react-router-dom";

const Profile = (props) => {
  const [name, setName] = useState("");
  const [wardAddress, setWardAddress] = useState("");
  const [profileId, setProfileId] = useState("");
  const [proviceAddress, setProvinceAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const accessToken = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    fetchProfileByAccount().then((profile) => {
      if (profile) {
        setName(profile.name);
        setWardAddress(profile.address.split(",")[0]);
        setProvinceAddress(profile.address.split(",")[1]);
        setProfileId(profile.id);
      }
      setUsername(JSON.parse(localStorage.getItem("currentUser"))["username"]);
    });
  }, []);

  const fetchProfileByAccount = async () => {
    try {
      const userId = currentUser.id;
      const role = currentUser.role.toLowerCase();
      const apiUrl = PROFILE_API_BY_ROLE(role);

      if (apiUrl) {
        const response = await authenticatedApiInstance(accessToken).get(
          `${apiUrl}/${userId}/dental`,
        );
        return response.data;
      } else {
        await ToastError("Chức năng chưa được hỗ trợ");
      }
    } catch (err) {
      await ToastError(err.response?.data["Error"]);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      let payload = JSON.stringify({
        name: name,
        address: `${wardAddress}, ${proviceAddress}`,
        status: "Active",
      });

      const response = await authenticatedApiInstance(accessToken).put(
        `${UPDATE_DENTAL_PROFILE}/${profileId}`,
        payload,
      );
      if (response.status === 200) {
        await ToastSuccess("Cập nhật thành công");
      }
    } catch (err) {
      await ToastError(err.response?.data["Error"]);
    }
  };

  return (
    <>
      <MenuNavbar />
      <div class="py-20 bg-gray-100  bg-opacity-50 min-h-screen mt-10">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <img
                  class="w-10 h-10 object-cover rounded-full"
                  alt="User avatar"
                  src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
                />

                <h1 class="text-gray-600">{username}</h1>
              </div>
            </div>
          </div>
          <div class="bg-white space-y-6">
            <hr />
            <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 mx-auto max-w-sm">Thông tin tài khoản</h2>
              <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                <div>
                  <label class="text-sm text-gray-400">Họ và tên</label>
                  <div class="w-full inline-flex border">
                    <div class="w-1/12 pt-2 bg-gray-100">
                      <svg
                        fill="none"
                        class="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label class="text-sm text-gray-400">Huyện/Quận</label>
                  <div class="w-full inline-flex border">
                    <div class="w-1/12 pt-2 bg-gray-100">
                      <svg
                        fill="none"
                        class="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      value={wardAddress}
                      onChange={(e) => setWardAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label class="text-sm text-gray-400">Tỉnh/Thành phố</label>
                  <div class="w-full inline-flex border">
                    <div class="w-1/12 pt-2 bg-gray-100">
                      <svg
                        fill="none"
                        class="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      value={proviceAddress}
                      onChange={(e) => setProvinceAddress(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleUpdateProfile}>
                  Cập nhật
                </button>
              </div>
            </div>

            <hr />
            <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
              <h2 class="md:w-4/12 max-w-sm mx-auto">Thay đổi mật khẩu</h2>

              <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                <div class="w-full inline-flex border-b">
                  <div class="w-1/12 pt-2">
                    <svg
                      fill="none"
                      class="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                    placeholder="New"
                  />
                </div>
              </div>

              <div class="md:w-3/12 text-center md:pl-6">
                <button class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right">
                  <svg
                    fill="none"
                    class="w-4 text-white mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Update
                </button>
              </div>
            </div>

            <hr />
            <div class="w-full p-4 text-right text-gray-500">
              <button class="inline-flex items-center focus:outline-none mr-4">
                <svg
                  fill="none"
                  class="w-4 mr-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
