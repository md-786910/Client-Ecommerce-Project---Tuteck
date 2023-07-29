import swal from "sweetalert";

export const showSuccess = (error, status = "success") => {
  return swal("Good Jobs", error, status || "success");
};
export const showError = (error) => {
  return swal("Oops", error, "error");
};
export const showApiError = (error, text = "") => {
  return swal(error?.data?.message, text, "error");
};
export const showWarn = (error, status = "") => {
  return swal("Oops", error, status || "warning");
};
