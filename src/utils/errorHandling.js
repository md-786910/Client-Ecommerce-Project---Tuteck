import swal from "sweetalert";

export const showSuccess = (error, text = "") => {
  return swal(error, text, "success");
};
export const showError = (error, text = "") => {
  return swal(error, text, "error");
};
export const showApiError = (error, text = "") => {
  return swal(error?.response?.data?.message, text, "error");
};
export const showWarn = (error, text = "") => {
  return swal(error, text, "warning");
};
