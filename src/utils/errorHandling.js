import swal from "sweetalert";

export const showSuccess = (error, text = "", status = "success") => {
  return swal(error, text, status || "success");
};
export const showError = (error, text = "") => {
  return swal(error, text, "error");
};
export const showApiError = (error, text = "") => {
  return swal(error?.data?.message, text, "error");
};
export const showWarn = (error, text = "", status = "") => {
  return swal(error, text, status || "warning");
};
