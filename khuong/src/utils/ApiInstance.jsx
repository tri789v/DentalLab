import axios from "axios";

export const authenticatedApiInstance = (accessToken = "") => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const anonymousApiInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
