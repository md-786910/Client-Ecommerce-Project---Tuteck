import swal from "sweetalert";

export const showSuccess = (title, text = "") => {
  return swal(title, text, "success");
};
export const showError = (title, text = "") => {
  return swal(title, text, "error");
};
export const showWarn = (title, text = "") => {
  return swal(title, text, "warning");
};
