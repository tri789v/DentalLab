import moment from "moment";

export const formatDate = (value = "", formatType = "") => {
  if (value === null) {
    return "NO DATA";
  } else {
    return moment(value).format(formatType);
  }
};