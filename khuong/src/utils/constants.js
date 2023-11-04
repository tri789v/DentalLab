const BASE_API_URL =
  "https://dentallabmanagementapi20231013174811.azurewebsites.net/api/v1";
export const LOGIN_URL = `${BASE_API_URL}/auth/login`;
export const GET_CATEGORY_URL = `${BASE_API_URL}/categories`;
export const GET_PRODUCTS_BY_CATEGORY =(id) => `${BASE_API_URL}/products?categoryId=${id}`;
export const UPDATE_DENTAL_PROFILE = `${BASE_API_URL}/dentals`;
export const CREATE_NEW_ORDER = `${BASE_API_URL}/orders`;
export const GET_ORDERS = (id, paramsString = '') => (`${BASE_API_URL}/dentals/${id}/orders?${paramsString}`);
export const GET_ORDER_BY_ID = (id) => `${BASE_API_URL}/orders/${id}`;
export const GET_ALL_ACCOUNT = `${BASE_API_URL}/accounts`

const PROFILE_API = {
  admin: "",
  dental: `${BASE_API_URL}/accounts`,
  staff: "",
};

export const PROFILE_API_BY_ROLE = (role) => PROFILE_API[role];
